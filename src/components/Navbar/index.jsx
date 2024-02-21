import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[80%] m-auto">
      <div className="w-[99px] h-[23px] object-contain">
        <img src={logo} alt="logo" className="w-[100%] h-[100%]" />
      </div>
      <div className="flex justify-center items-center gap-8">
        <Link className="text-white font-normal text-[16px] leading-[20.83px]">
          Sign In
        </Link>
        <button className="text-white bg-secondary py-[10px] px-[16px] rounded-[8px] font-normal text-[16px] leading-[20.83px]">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
