import "tailwindcss"
import { IoMenu } from "react-icons/io5";

function Homepage () {
    return (
        <div>
            <nav className="flex p-4 justify-between items-center bg-white-500 shadow-sm "> 
                <div>
                    <h1 className="text-2xl  font-roboto font-bold ">Ninja <span className="text-orange-400">Food</span></h1>
                </div>
                
                <div> 
                    <ul className="hidden lg:flex gap-10 font-roboto text-lg font-semibold">
                        <li className=" hover:text-orange-600 "><a href="#">Home</a></li>
                        <li className=" hover:text-orange-600 "><a href="#">About</a></li>
                        <li className=" hover:text-orange-600 "><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className=" hidden lg:flex gap-4">
                    <button className="border-2 px-5 rounded-md text-lg  cursor-pointer transition delay-150 duration-150 ease-in-out hover:bg-orange-600 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Login</button>
                    <button className=" px-3 bg-orange-600 rounded-md text-lg  cursor-pointer transition delay-150 duration-150 ease-in-out hover:bg-orange-600 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Sign up</button>
                </div>
                
                <IoMenu className="text-2xl text-orange-500 display-none block lg:hidden"/>
            </nav>

            {/* End Nav bar */}
        </div>
    )
}

export default Homepage;