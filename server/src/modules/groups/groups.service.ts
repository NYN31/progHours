import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import * as crypto from "crypto"
import { GroupRole, User } from "@prisma/client"

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async createGroup(name, hashtag) {
    const group = await this.prisma.group.findFirst({ where: { hashtag } })
    if (group) {
      throw new BadRequestException("Hashtag is taken!")
    }
    return this.prisma.group.create({
      data: {
        name,
        hashtag,
        accessCode: crypto.randomBytes(4).toString("hex"),
      },
    })
  }

  async joinGroupByCode(accessCode, userId) {
    // find the group with the accessCode
    const group = await this.prisma.group.findFirst({ where: { accessCode } })

    // if the group does not exist
    if (!group) {
      throw new BadRequestException("Invalid access code!")
    }

    // check if user is already a member of the group
    const userGroup = await this.prisma.userGroup.findFirst({
      where: { groupId: group.id, userId },
    })
    if (userGroup) {
      throw new BadRequestException("You are already a member of the group!")
    }

    // all ok, join into the group
    return this.prisma.userGroup.create({
      data: {
        userId,
        groupId: group.id,
        role: GroupRole.MEMBER,
      },
    })
  }

  async joinOnGroup({
    userId,
    groupId,
    role,
  }: {
    userId: number
    groupId: number
    role: GroupRole
  }) {
    return this.prisma.userGroup.create({
      data: {
        userId,
        groupId,
        role,
      },
    })
  }

  async getUserGroups(userId) {
    return this.prisma.userGroup.findMany({
      where: { userId },
      include: {
        group: true,
      },
    })
  }

  async deleteGroup(groupId) {
    // delete the users from the group
    await this.prisma.userGroup.deleteMany({ where: { groupId } })
    return this.prisma.group.delete({ where: { id: groupId } })
  }

  async getGroupByHashtag(hashtag: string) {
    // find the group with the hashtag
    const group = await this.prisma.group.findUnique({ where: { hashtag } })

    // find the users of the group
    let groupUsers = await this.prisma.userGroup.findMany({
      where: { groupId: group.id },
      include: { user: true },
    })

    // get leaderboard of the users
    let ranklist = await this.prisma.userStat.findMany({
      where: {
        OR: groupUsers.map((groupUser) => ({ userId: groupUser.user.id })),
      },
      include: {
        user: true,
      },
    })

    // remove password from the object
    groupUsers = groupUsers.map((groupUser) => {
      delete groupUser.user.password
      return groupUser
    })

    return {
      group,
      groupUsers,
      ranklist,
    }
  }

  async addUsersToGroup(groupId: number, usernames: string[]) {
    let groups = [],
      failed = []

    for (let i = 0; i < usernames.length; i++) {
      let username = usernames[i].toLowerCase()

      // find user by username
      const user = await this.prisma.user.findUnique({ where: { username } })
      if (!user) {
        failed.push({ username, message: "User not found!" })
        continue
      }

      const userGroup = await this.prisma.userGroup.findFirst({
        where: { groupId, userId: user.id },
      })

      // if the user is not in the group
      if (!userGroup) {
        groups.push({ groupId, userId: user.id })
      } else {
        failed.push({ username, message: "User already exist!" })
      }
    }

    await this.prisma.userGroup.createMany({
      data: groups,
    })

    return { failed }
  }

  async isGroupOwner(groupId, userId) {
    const userGroup = await this.prisma.userGroup.findFirst({
      where: { userId, groupId },
    })
    return userGroup.role === GroupRole.ADMIN
  }

  async removeUserFromGroup(groupId: number, userId: number) {
    const userGroup = await this.prisma.userGroup.findFirst({
      where: { groupId, userId },
    })
    if (!userGroup) {
      throw new BadRequestException("The user is not a member of the group!")
    }
    if (userGroup.role === GroupRole.ADMIN) {
      throw new BadRequestException("Group owner can't be removed!")
    }
    // delete the entry
    return this.prisma.userGroup.delete({
      where: {
        id: userGroup.id,
      },
    })
  }

  async editGroup(
    id: number,
    name: string,
    hashtag: string,
    isPrivate: boolean
  ) {
    const group = await this.prisma.group.findFirst({ where: { id } })
    if (!group) {
      throw new NotFoundException("Group is not found!")
    }

    return this.prisma.group.update({
      where: {
        id,
      },
      data: {
        name,
        hashtag,
        private: isPrivate,
      },
    })
  }
}
