import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBarChartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsJournalBookmark } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

function CircularProgress({ target }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= target) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  const radius = 70; // bigger radius
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center mt-2">
      <svg width="160" height="160" className="-rotate-90">
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#374153"
          fill="transparent"
          strokeWidth={stroke}
        />
        {/* Progress Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>

      {/* Centered content */}
      <div className="absolute flex flex-col items-center">
        <span className="text-white text-2xl font-bold">{value}%</span>
        <span className="text-gray-300 text-sm font-medium mt-1">
          Average Progress
        </span>
      </div>
    </div>
  );
}



function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl">
        <nav className="p-4 font-roboto">
          <div className="flex items-center justify-between pb-6">
            <h1 className="text-2xl font-bold">HabitFlow</h1>
            <IoIosClose className="text-3xl cursor-pointer" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <LuLayoutDashboard className="text-xl" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-950 hover:text-white rounded">
              <IoBarChartOutline className="text-xl" />
              <span>Statistics</span>
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
            {/* Left Card */}
            <div className="bg-blue-300 h-80 w-[700px] rounded-xl flex items-center justify-between overflow-hidden">
              <div className="flex flex-col items-center text-center px-9 w-lg">
                <h1 className="text-4xl font-bold text-white py-3 font-roboto">
                  How to Build <br /> a New Habit
                </h1>
                <p className="text-white mt-2 py-2">
                  This is essential for making progress <br /> in your health,
                  happiness and your life
                </p>
                <button className="bg-white text-blue-500 rounded px-4 py-2 mt-4 font-medium hover:bg-blue-500 hover:text-white cursor-pointer">
                  + Add New Habit
                </button>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="/Colony.png"
                  alt="Habit illustration"
                  className="h-90 mt-29 py-3 object-contain"
                />
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-gray-800 h-80 w-[300px] rounded-xl">
              <div className="flex justify-between items-center text-white p-5">
                <h1 className="text-xl font-medium">Statistics</h1>
                <LuLayoutDashboard className="text-xl" />
              </div>

              {/* Animated Circular Progress */}
              <CircularProgress target={75} />

              <div className="flex gap-4 text-white p-5 items-center font-medium justify-center">
                <div>
                  <h1 className="text-sm">7 Days</h1>
                  <p className="text-xs">Best Streaks</p>
                </div>
                
                <div>
                  <h1 className="text-sm">8</h1>
                  <p className="text-xs">Perfect Days</p>
                </div>

                <div>
                  <h1 className="text-sm">24</h1>
                  <p className="text-xs">Habits Done</p>
                </div>

              </div>

            </div>
          </div>

          {/* Second row: Box 3 */}
          <div className="bg-red-200 h-80 w-[1000px] rounded-xl flex items-center justify-center">
            <h1>Box 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
