import { Tag } from "./Tag"
import { UserProblemTag } from "./UserProblemTag"

export interface Problem {
  id: number
  name: string
  link: string
  pid: string
  difficulty: number
  created_at: string
  onlineJudgeId: number
  tags: Tag[]
  user_problem_tags: UserProblemTag[]
}
