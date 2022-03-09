import Layout from "@/components/dashboard/Layout"
import { GridViewIcon, ListViewIcon, PlusIcon } from "@/components/Icons"
import TrackingTable from "@/components/submissions/Table"
import { useQuery } from "react-query"
import { getSubmissions } from "@/api/submissions"
import { Link } from "react-router-dom"
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react"
import { Transition } from "@headlessui/react"
import moment from "moment"
import getWeekRanges from "../../utils/getWeekRanges"
import WeekFilters from "../../components/submissions/filters/WeekFilter"

function minmaxDate(arr) {
  var len = arr.length,
    min = new Date(),
    max = new Date()
  while (len--) {
    if (new Date(arr[len].solved_at) < min) {
      min = new Date(arr[len].solved_at)
    } else {
      max = new Date(arr[len].solved_at)
    }
  }
  return [
    moment(min).startOf("day").toDate(),
    moment(max).endOf("day").toDate(),
  ]
}

export default function TrackingSheet() {
  const query = useQuery("practice", getSubmissions)
  let [weeks, setWeeks] = useState([])
  let [filters, setFilters] = useState([])
  let [filteredData, setFilteredData] = useState([])
  const [selectedWeek, setSelectedWeek] = useState({ id: 0, name: "" })

  useEffect(() => {
    if (!query.data) return
    const weekRanges = getWeekRanges(query.data.submissions)
    setWeeks(weekRanges)
    setSelectedWeek({
      id: weekRanges.length + 1,
      name: "Week " + weekRanges.length,
    })
  }, [query.data])

  const dateFilter = (arr, from, to) =>
    arr.filter((el) => {
      if (new Date(el.solved_at) >= from && new Date(el.solved_at) <= to)
        return true
    })

  useEffect(() => {
    if (!query.data) return
    let arr = query.data.submissions
    const weekId = selectedWeek.id - 1
    if (weekId > 0)
      arr = dateFilter(arr, weeks[weekId - 1].from, weeks[weekId - 1].to)
    setFilteredData(arr)
  }, [query.data, selectedWeek])

  const removeFilter = (name) => {
    setFilters(
      filters.filter((filter) => {
        return filter !== name
      })
    )
  }

  return (
    <Layout>
      {/* tracking table header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold">
          <div className="flex items-center space-x-4">
            <span>Tracking Sheet</span>
            <Transition
              as={Fragment}
              show={query.status === "loading"}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="sp sp-circle sp-circle-dark"></div>
            </Transition>
          </div>
        </h3>
      </div>
      <div className="mt-4">
        <ul className="flex items-center space-x-4">
          <li className="">Filters</li>
          <li>
            <WeekFilters
              numberOfWeeks={weeks.length}
              selected={selectedWeek}
              setSelected={setSelectedWeek}
            />
          </li>
          {/* {filters.map((filter, i) => {
            return (
              <li
                key={i}
                className="relative px-3 py-1 text-sm rounded-lg bg-primary bg-opacity-10 text-primary"
              >
                {filter}
                <button
                  className="absolute right-0 w-4 h-4 p-1 text-red-500 rounded-full -top-3"
                  onClick={() => removeFilter(filter)}
                >
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
              </li>
            )
          })} */}
        </ul>
      </div>
      {/* tracking table */}
      {query.data && <TrackingTable submissions={filteredData} />}
    </Layout>
  )
}