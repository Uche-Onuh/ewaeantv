import React from "react";
import { logo } from "../assets";

const Dark = () => {
  return (
    <div className="w-1/2 flex flex-col p-[50px] h-[100%] justify-between">
      <div className="w-[90px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>

      <div className="flex justify-start gap-3">
        <div className="w-[28px] h-[3px] bg-white"></div>
        <div className="w-[28px] h-[3px] bg-[#efefef56]"></div>
        <div className="w-[28px] h-[3px] bg-[#efefef56]"></div>
      </div>
    </div>
  );
};

export default Dark;
