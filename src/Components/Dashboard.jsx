import { IoIosClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBarChartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsJournalBookmark } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64  bg-white shadow-xl">
        <nav className="p-4 font-roboto">
          <div className="flex items-center justify-between pb-6">
            <h1 className="text-2xl font-bold">HabitFlow</h1>
            <IoIosClose className="text-3xl cursor-pointer" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2  p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <LuLayoutDashboard className="text-xl" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <IoBarChartOutline className="text-xl" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <SlCalender className="text-xl" />
              <span>Calendar</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <BsJournalBookmark className="text-xl" />
              <span>Journal</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <LiaAwardSolid className="text-xl" />
              <span>Achievements</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <FaRegUser className="text-xl" />
              <span>Profile</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <IoIosLogOut className="text-xl" />
              <span>Log Out</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4 w-full">
        <div className="max-w-[1000px]">
          <div className="flex gap-4 mb-4">

            <div className=" bg-blue-300 h-80 w-[700px] rounded-xl flex items-center justify-between overflow-hidden">
               

                <div className="flex flex-col items-center text-center px-9 w-lg">
                  <h1 className="text-4xl font-bold text-white py-3 font-roboto">How to Build <br /> a New Habit</h1>
                  <p className="text-white mt-2  py-2  ">This is essential for making progress <br /> in your health, happiness and your life</p>
                  <button className="bg-white text-blue-500 rounded px-4 py-2 mt-4 font-medium"> + Add New Habit</button>
                </div>

                <div className="flex-shrink-0">
                  <img src="/Colony.png" alt="Habit illustration" className="h-90 mt-29 py-3 object-contain" />
                </div>
              </div>


            <div className="bg-red-200 h-80 w-[300px] rounded-xl flex items-center justify-center">
              <h1>Box 2</h1>
            </div>

          </div>

          {/* Second row: Box 3 spans the same total width */}
          <div className="bg-red-200 h-80 w-[1000px] rounded-xl flex items-center justify-center">
            <h1>Box 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
