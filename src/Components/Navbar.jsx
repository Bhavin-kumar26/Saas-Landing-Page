import React from "react";
import logo from "../assets/images/logosaas.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className=" bg-black">
      <div className=" px-4 mx-auto ">
        <div className=" py-4 flex justify-between items-center">
          <div className=" relative">
            <div className=" absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#F892CF,#FFD09B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <img src={logo} className=" relative h-12 w-12" alt="" />
          </div>
          <div className=" sm:hidden border border-white border-opacity-30 h-8 w-8 inline-flex justify-center items-center">
            <FiMenu className=" text-white text-xl" />
          </div>
          <nav className=" hidden sm:flex gap-4 items-center ">
            <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">About</a>
            <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Features</a>
            <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Updates</a>
            <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Help</a>
            <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Customers</a>
            <button className=" bg-white py-2 px-4 font-semibold rounded-lg">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
