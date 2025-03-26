import React, { useState } from "react";
import logo from "../assets/bite.jpeg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (

    // darkMode ? " bg-gray-900 text-white" : "bg-gray-100 text-black"
    <>
      <div className="flex items-center h-full justify-between shadow-2xl shadow-gray-400">
        <div>
          <Link to={"/"}>
            <div className="h-20 flex justify-between">
              <img src={logo} className="h-14 mt-2.5" />
            </div>
            <div></div>
          </Link>
        </div>
        <nav className="text-base md:text-lg flex gap-2 ">
          <Link
            to={"/"}
            className="px-2 py-1 hover:text-[#800000]"
          >
            Home
          </Link>
          <Link
            to={"menu"}
            className="px-2 py-1 hover:text-[#800000]"
          >
            Menu
          </Link>
          <Link
            to={"about"}
            className="px-2 py-1 hover:text-[#800000]"
          >
            About
          </Link>
          <Link
            to={"contact"}
            className="px-2 py-1 hover:text-[#800000]"
          >
            Contact
          </Link>

          <div className="text-slate-600 text-yellow-500' : 'hover:text-slate-500">
            <Link to="cart">
              <FaCartPlus className="h-5 mt-2 w-6 mr-1" />
              <div className="absolute top-5 right-21.5 text-white  bg-red-500 h-4 w-4 rounded-full text-sm text-center">
                  0
                </div>{" "}
            </Link>
          </div>

          <div className="text-slate-600 text-yellow-500' : 'hover:text-slate-500">
            <HiOutlineUserCircle className="h-9 w-7 mr-14" />
          </div>
        </nav>
        <Outlet />
        {/* <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow-md bg-gray-700 text-white hover:scale-105 transition"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div> */}
      </div>
    </>
  );
};

export default Header;
