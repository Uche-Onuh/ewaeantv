import React from "react";
import { logo } from "../../assets";

import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex justify-evenly items-center text-white gap-3">
        <RiFacebookFill size={18} color="white" className="my-icon" />
        <RiInstagramFill size={18} color="white" className="my-icon" />
        <RiTwitterFill size={18} color="white" className="my-icon" />
      </div>
    </div>
  );
};

export default Footer;
