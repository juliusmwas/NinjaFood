import { useState } from "react";
import SegmentedControl from "../SegmentedControl";

function DashboardPage() {
  const [selected, setSelected] = useState("Daily");

  return (
    <div className="max-w-[1000px]">
      {/* Top cards */}
      <div className="flex gap-4 mb-4 flex-col lg:flex-row">
        {/* Left card */}
        <div className="bg-blue-300 h-80 flex-1 rounded-xl flex items-center justify-between overflow-hidden">
          <div className="flex flex-col items-center text-center px-9">
            <h1 className="text-4xl font-bold text-white py-3">
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
          <img
            src="/Colony.png"
            alt="Habit illustration"
            className="h-60 object-contain"
          />
        </div>

        {/* Right card */}
        <div className="bg-gray-800 h-80 w-full lg:w-[300px] rounded-xl flex flex-col items-center justify-center text-white">
          <h1 className="text-xl font-medium mb-3">Statistics</h1>
          <p className="text-3xl font-bold">75%</p>
          <p className="text-sm mt-1">Average Progress</p>
        </div>
      </div>

      {/* Bottom box */}
      <div className="bg-white h-80 w-full rounded-xl relative shadow-xl">
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
          <SegmentedControl
            options={["Daily", "Weekly", "Monthly"]}
            value={selected}
            onChange={setSelected}
          />
        </div>

        <div className="h-full flex items-center justify-center pt-10">
          {selected === "Daily" && <p>Daily View Content</p>}
          {selected === "Weekly" && <p>Weekly View Content</p>}
          {selected === "Monthly" && <p>Monthly View Content</p>}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
