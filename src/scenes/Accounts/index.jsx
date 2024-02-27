import React from "react";
import { logo } from "../../assets";
import { RiPencilFill } from "@remixicon/react";

const index = () => {
  return (
    <section className="h-[100vh]">
      <div className="py-[20px] px-[50px] flex justify-between items-center">
        <div className="w-[99px] h-[23px]">
          <img src={logo} alt="logo" className="w-[100%] h-[100%]" />
        </div>

        <div className="text-white flex justify-center gap-2 items-center">
          <RiPencilFill />
          <h1 className="font-normal text-[16px] leading-[21.79px]">Manage</h1>
        </div>
      </div>
    </section>
  );
};

export default index;
