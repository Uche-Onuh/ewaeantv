import React from "react";
import { logo } from "../../assets";
import { RiPencilFill, RiAddFill } from "@remixicon/react";
import { acc1, acc2 } from "../../assets";

const index = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="py-[20px] px-[50px] flex justify-between items-center relative  z-10">
        <div className="w-[99px] h-[23px]">
          <img src={logo} alt="logo" className="w-[100%] h-[100%]" />
        </div>
        <div className="text-white flex justify-center gap-2 items-center">
          <RiPencilFill />
          <h1 className="font-normal text-[16px] leading-[21.79px]">Manage</h1>
        </div>
      </div>

      <div class="absolute inset-0 flex justify-center items-center h-[75%]">
        {/* <!-- Outer ring --> */}
        <div class="w-[400px] h-[400px] border-[50px] border-white border-opacity-10 rounded-full flex justify-center items-center relative">
          {/* <!-- Inner ring --> */}
          <div class="w-[300px] h-[300px] border-[50px] border-white border-opacity-15 rounded-full flex justify-center items-center relative">
            {/* <!-- Innermost circle --> */}
            <div class="w-[200px] h-[200px] border-[50px] border-white border-opacity-20 rounded-full flex justify-center items-center relative">
              <div class="w-[100px] h-[100px]  border-[50px]  border-white border-opacity-25 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center h-[75%] gap-7 z-10">
        <div className="w-[128.22px] h-[128.28px] border-[5px] border-white rounded-full object-contain">
          <img
            src={acc1}
            alt=""
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
          <h1 className="text-white text-center mt-3">User 1</h1>
        </div>
        <div className="w-[128.22px] h-[128.28px] border-[5px] border-white rounded-full object-contain">
          <img
            src={acc1}
            alt=""
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
          <h1 className="text-white text-center mt-3">User 3</h1>
        </div>
        <div className="w-[128.22px] h-[128.28px] border-[5px] border-white  rounded-full object-contain">
          <img
            src={acc2}
            alt=""
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
          <h1 className="text-white text-center mt-3">User 2</h1>
        </div>
      </div>

      <div className="text-white relative z-10 flex items-center justify-center flex-col gap-20 mt-[30%] font-normal leading-5 text-[16px] italic">
        <h1>
          You can <span className="text-secondary"> add max of 5</span>{" "}
          account to your already existing account
        </h1>

        <div className="bg-secondary rounded-full p-5">
          <RiAddFill
            size={50}
            color="white"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
