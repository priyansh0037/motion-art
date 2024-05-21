
// Navbar.jsx
import React from "react";
import logo from "../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center  ">
      <div className="  relative w-5/6 h-32 flex justify-between py-8 bg-transparent lg:pointer-events-none">
        <img src={logo} alt="" className="cursor-pointer lg:pointer-events-non" />
        <button className="hidden sm:block text-2xl bg-white rounded-md text-black py-2 px-5 cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-white hover:text-white lg:pointer-events-none">Purchase Now</button>
      </div>
    </div>
  );
};

export default Navbar;