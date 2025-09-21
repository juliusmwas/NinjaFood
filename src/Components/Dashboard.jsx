import { useState } from "react";
import { IoIosClose} from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBarChartOutline, IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsJournalBookmark } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

// Import pages
import DashboardPage from "./pages/DashboardPage";
import StatisticsPage from "./pages/StatisticsPage";
import CalendarPage from "./pages/CalendarPage";
import JournalPage from "./pages/JournalPage";
import AchievementsPage from "./pages/AchievementsPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import LogoutPage from "./pages/LogoutPage";

function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const renderPage = () => {
    switch (active) {
      case "Dashboard":
        return <DashboardPage />;
      case "Statistics":
        return <StatisticsPage />;
      case "Calendar":
        return <CalendarPage />;
      case "Journal":
        return <JournalPage />;
      case "Achievements":
        return <AchievementsPage />;
      case "Settings":
        return <SettingsPage />;
      case "Profile":
        return <ProfilePage />;
      case "Logout":
        return <LogoutPage/>
      default:
        return <DashboardPage />;
    }
  };

  const menuItems = [
    { label: "Dashboard", icon: <LuLayoutDashboard /> },
    { label: "Statistics", icon: <IoBarChartOutline /> },
    { label: "Calendar", icon: <SlCalender /> },
    { label: "Journal", icon: <BsJournalBookmark /> },
    { label: "Achievements", icon: <LiaAwardSolid /> },
    { label: "Settings", icon: <IoSettingsOutline /> },
    { label: "Profile", icon: <FaRegUser /> },
    { label: "Logout", icon: <IoIosLogOut /> },
  ];

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
            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-2 p-2 cursor-pointer rounded ${
                  active === item.label
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}

          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4 w-full overflow-y-auto">{renderPage()}</div>
    </div>
  );
}

export default Dashboard;
