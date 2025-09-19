import { IoIosClose } from "react-icons/io";
import { IoMdClipboard } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsJournalBookmark } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";


function Dashboard (){
    return(
        <div className="p-4 ">
            <div className="grid grid-cols-7 grid-rows-9 gap-4 py-3">
                <div className="col-span-2 row-span-9 bg-blue-300">1</div>
                <div className="col-span-3 row-span-4 col-start-3 bg-blue-300">2</div>
                <div className="col-span-2 row-span-4 col-start-6 bg-blue-300">3</div>
                <div className="col-span-5 row-span-5 col-start-3 row-start-5 bg-blue-300">5</div>
            </div>

            <div className="bg-blue-200 w-60 rounded shadow-xs " >
                <nav className="p-2 font-roboto">
                    <div className="flex items-center justify-between p-1">
                        <h1 className="text-2xl font-bold ">HabitFlow</h1>
                        <IoIosClose className="text-3xl  font-bold cursor-pointer" />
                    </div>

                    <div>
                        <div className="flex gap-4 items-center py-4 p-2 text-lg cursor-pointer hover:bg-blue-700">
                            <div><IoMdClipboard /></div> 
                            <span>Habits</span>
                        </div>
                        
                        <div>
                            <div><IoBarChartOutline /></div> 
                            <div>Analytics</div>
                        </div>

                        <div>
                            <span><SlCalender /></span> 
                            <span>Calender</span>
                        </div>

                        <div>
                            <span><BsJournalBookmark /></span> 
                            <span>Journal</span>
                        </div>

                        <div>
                            <span><LiaAwardSolid /></span> 
                            <span>Achievements</span>
                        </div>

                        <div>
                            <span><IoSettingsOutline /></span> 
                            <span>Settings</span>
                        </div>

                        <div>
                            <span><FaRegUser /></span> 
                            <span>Profile</span>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Dashboard;