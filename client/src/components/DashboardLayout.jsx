import { Link, useNavigate } from "react-router-dom"
import NavLink from "./NavLink"
import clearAuthData from "utils/clearAuthData"
import { toast } from "react-toastify"
import Avatar from "react-avatar"

// import logo and icons
import Logo from "./Logo"
import { IoMdSettings } from "react-icons/io"
import { MdLeaderboard, MdOutlineListAlt } from "react-icons/md"
import { ImStatsDots } from "react-icons/im"
import { IoLogOutOutline } from "react-icons/io5"
import Navbar from "./Navbar"

const DashboardSidebar = () => {
  const user = localStorage.getItem("name")
  const navigate = useNavigate()
  const handleLogout = async () => {
    await clearAuthData()
    toast.success("Logged out", { className: "toast" })
    navigate("/login")
  }
  return (
    <div className="max-w-[280px] w-full h-[100vh] px-6 py-4 fixed z-50 top-0 left-0 bottom-0 bg-white shadow">
      {/* logo   */}
      <Logo />
      {/* sidebar links */}
      <div className="flex flex-col justify-between h-full pt-16">
        <nav>
          <ul className="space-y-1">
            <NavLink Icon={ImStatsDots} to="/dashboard/home">
              Dashboard
            </NavLink>
            <NavLink Icon={MdOutlineListAlt} to="/dashboard/tracking">
              Tracking Sheet
            </NavLink>
            <NavLink Icon={MdLeaderboard} to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink Icon={IoMdSettings} to="/settings">
              Settings
            </NavLink>
          </ul>
        </nav>
        <div className="mb-12">
          <div>
            <div className="flex items-start space-x-3">
              <Avatar size="40px" name={user} round />
              <div>
                <h6 className="text-xl font-medium">{user}</h6>
                <button
                  className="flex items-center mt-1 space-x-1 text-sm text-red-500"
                  onClick={handleLogout}
                >
                  <IoLogOutOutline size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Dashboardlayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DashboardSidebar />
      {/* dashboard main contents */}
      <div className="ml-[280px] bg-light min-h-screen px-6">{children}</div>
    </div>
  )
}

export default Dashboardlayout