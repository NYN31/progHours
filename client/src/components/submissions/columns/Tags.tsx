import { Cell } from "react-table"
import TagInputPopup from "../TagInputPopup"
import { Submission } from "@/types/Submission"
import { UserProblemTag } from "@/types/UserProblemTag"
import { Tag } from "@/types/Tag"

const Tags = (cell: Cell) => {
  let user = localStorage.getItem("userId")
  let userId = user ? parseInt(user) : -1

  const row: Submission = cell.row.original as Submission
  const { id, tags, user_problem_tags } = row.problem

  return (
    <ul className="tags-ul flex flex-wrap items-center gap-2">
      {tags.map((tag: Tag) => {
        return (
          <li
            key={tag.id}
            className="px-2 py-1 text-sm rounded-lg bg-primary bg-opacity-10 text-primary"
          >
            {tag.name}
          </li>
        )
      })}
      {user_problem_tags
        .filter((t) => t.user_id === userId)
        .map((user_problem_tag: UserProblemTag) => {
          return (
            <li
              key={user_problem_tag.tag.id}
              className="relative px-2 py-1 text-sm text-gray-400 border rounded-lg suggested-tag"
            >
              <button className="absolute right-0 hidden w-4 h-4 p-1 text-red-500 rounded-full -top-3">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                >
                  <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z" />
                </svg>
              </button>
              <p>{user_problem_tag.tag.name}</p>
            </li>
          )
        })}
      <li>
        <TagInputPopup problemId={id} />
      </li>
    </ul>
  )
}
export default Tags
