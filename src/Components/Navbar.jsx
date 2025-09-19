import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: when user resizes to a large screen, close the mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false); // 1024px = lg breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="relative flex p-4 justify-between items-center bg-white shadow-sm">
        <div>
          <h1 className="text-xl lg:text-2xl font-roboto font-bold">Food <span className="text-orange-400">Ninja </span></h1></div>

        {/* Desktop links (hidden on small screens) */}
        <div className="hidden lg:flex gap-10 font-roboto text-lg font-semibold">
          <a className="hover:text-orange-600" href="#">Home</a>
          <a className="hover:text-orange-600" href="#">About</a>
          <a className="hover:text-orange-600" href="#">Contact Us</a>
        </div>

        {/* Desktop buttons (hidden on small screens) */}
        <div className="hidden lg:flex gap-4">
          <button className="border-2 px-5 rounded-md text-lg cursor-pointer transition transform hover:bg-orange-600 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Login</button>
          <button className="px-3 bg-orange-600 rounded-md text-lg cursor-pointer transition transform hover:bg-orange-700 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Sign up</button>
        </div>

        {/* Mobile menu button (visible only on small screens) */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (<IoClose className="text-2xl text-orange-500" />) : (<IoMenu className="text-2xl text-orange-500" />)}
        </button>
      </nav>

      {/* Mobile menu (appears on small screens when isOpen === true) */}
      <div
        id="mobile-menu"
        className={`${isOpen ? "block" : "hidden"} lg:hidden`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col px-4 pt-4 pb-6 space-y-3 bg-white shadow-md text-center">
          <a href="#" onClick={() => setIsOpen(false)} className="text-lg font-semibold font-roboto hover:text-orange-600">Home</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-lg font-semibold font-roboto hover:text-orange-600">About</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-lg font-semibold font-roboto hover:text-orange-600">Contact Us</a>

          <div className="flex flex-col sm:flex-row sm:space-x-3 pt-2">
            <button onClick={() => setIsOpen(false)} className="mb-2 sm:mb-0 border-2 px-5 rounded-md text-lg cursor-pointer transition transform hover:bg-orange-600 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Login</button>
            <button onClick={() => setIsOpen(false)} className="px-3 bg-orange-600 rounded-md text-lg cursor-pointer transition transform hover:bg-orange-700 hover:text-white hover:-translate-y-1 hover:scale-110 font-medium font-roboto">Sign up</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
