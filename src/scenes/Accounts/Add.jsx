import React from "react";
import { logo, acc2 } from "../../assets";
import { RiAddFill, RiEditLine  } from "@remixicon/react";

const Add = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="py-[20px] px-[50px] flex justify-between items-center relative  z-10">
        <div className="w-[99px] h-[23px]">
          <img
            src={logo}
            alt="logo"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-white mt-[150px]">
        <h1 className="mb-10 font-bold text-[24px] leading-[31px] text-center">
          Add Account
        </h1>

        <div className="w-[194px] h-[194px] p-5 border-[1px] border-white rounded-[21px] mb-[20px]">
          <img src={acc2} alt="icon" className="w-full h-full rounded-[21px]" />
        </div>

        <div className="flex gap-1 ">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent	border-none outline-none w-[128px]"
          />
          <RiEditLine size={24} />
        </div>
      </div>

      <div className="text-white relative z-10 flex items-center justify-center flex-col gap-20 mt-[8%] font-normal leading-5 text-[16px]">
        <div className="bg-secondary rounded-full p-5">
          <RiAddFill size={50} color="white" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Add;
