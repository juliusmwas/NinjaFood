import { IoBarChart } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoIosFlame } from "react-icons/io";

function StatisticsPage() {
  return (
    <div className="max-w-[1000px] mx-auto p-6">
      {/* ===== Top Overview Cards ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 rounded-xl p-4 text-center">
          <h2 className="text-xl font-bold">5</h2>
          <p className="text-sm text-gray-600">Total Habits</p>
        </div>
        <div className="bg-green-100 rounded-xl p-4 text-center">
          <h2 className="text-xl font-bold">72%</h2>
          <p className="text-sm text-gray-600">Avg Completion</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <h2 className="text-xl font-bold">14</h2>
          <p className="text-sm text-gray-600">Longest Streak</p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-4 text-center">
          <h2 className="text-xl font-bold">4</h2>
          <p className="text-sm text-gray-600">Streak Today</p>
        </div>
      </div>

      {/* ===== Middle Charts Section (placeholders for now) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <FaRegCalendarCheck /> Progress Over Time
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400">
            [ Line Chart goes here ]
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <IoBarChart /> Habit Comparison
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400">
            [ Bar Chart goes here ]
          </div>
        </div>
      </div>

      {/* ===== Bottom Insights ===== */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="font-semibold flex items-center gap-2 mb-4">
          <IoIosFlame /> Insights & Highlights
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Best Habit: Reading (90% consistency)</li>
          <li>⚠️ Weakest Habit: Meditation (40% consistency)</li>
          <li>🏆 Milestone: 100 habits completed</li>
          <li>🔥 Current streak: 4 days</li>
        </ul>
      </div>
    </div>
  );
}

export default StatisticsPage;
