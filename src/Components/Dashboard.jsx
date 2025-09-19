import { IoIosClose } from "react-icons/io";
import { IoMdClipboard } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";



function Dashboard (){
    return(
        <div className="p-4 ">
            <h1 className="text-xl lg:text-2xl font-bold">Hey there, Hailey</h1>
            <p className="py-1">Friday, 19 Sept</p>
            <div className="grid grid-cols-7 grid-rows-9 gap-4 py-3">
                <div className="col-span-2 row-span-9 bg-blue-300">1</div>
                <div className="col-span-3 row-span-4 col-start-3 bg-blue-300">2</div>
                <div className="col-span-2 row-span-4 col-start-6 bg-blue-300">3</div>
                <div className="col-span-5 row-span-5 col-start-3 row-start-5 bg-blue-300">5</div>
            </div>

            <div className="bg-blue-300 w-60 rounded" >
                <nav>
                    <div>
                        <h1>HabitFlow</h1>
                        <IoIosClose />
                    </div>
                    <nav-links>
                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>
                        
                        <div>
                            <span><IoBarChartOutline /></span> 
                            <span>Analytics</span>
                        </div>

                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>

                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>

                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>

                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>

                        <div>
                            <span><IoMdClipboard /></span> 
                            <span>Habits</span>
                        </div>

                    </nav-links>
                </nav>
            </div>
        </div>
    );
}
export default Dashboard;