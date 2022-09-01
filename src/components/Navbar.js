import React from "react";
import { Dashboard, Login, User } from "../assests";

const Navbar = () => {
  return (
    <div className="navabr flex h-[75px] justify-between items-center px-[7rem]">
      <div className="left flex">
        <div className="logo_container hover:scale-110 duration-100 ease-in">
          <img src={require("../assests/logo.png")} alt="" />
        </div>
      </div>
      <div className="right flex gap-8 justify-center items-center">
        <Login className="h-[25px] w-[40px] hover:scale-125 duration-100 ease-in" />
        <Dashboard className="h-[25px]  w-[40px] hover:scale-125 duration-100 ease-in" />
        <button className="bg-[#6001D3] hover:scale-105 text-white text-[1.1rem] px-5 py-2 hover:bg-[#5A20B9] duration-100 ease-in-out rounded-lg w-32">
          Back
        </button>
        <User className="h-[34px]  w-[40px] hover:scale-125 duration-100 ease-in" />
      </div>
    </div>
  );
};

export default Navbar;
