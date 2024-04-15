import React from "react";

import { Img, Line, Text } from "components";
import "./style.css";

const NavBar = () => {
  return (
      <div className="navbar-position-top">
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="ml-[2%] text-base text-black-900"
            size="txtMontserratRegular16"
          >
            HOME
          </Text>
          <div className=" ml-[2%] flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[23px] mt-[13px] w-[99%] md:w-full">
            <Text
              className="text-base text-black-900"
              size="txtMontserratRegular16"
            >
              ABOUT
            </Text>
            <Img
              className=" ml-[2%] h-7 mr-[2%] md:h-auto object-cover"
              src="images/img_logo22.png"
              alt="logoTwentyTwo"
            />
          </div>
          <Text
            className=" ml-[2%] md:ml-[0] ml-[3px] mt-[11px] text-base text-black-900"
            size="txtMontserratRegular16"
          >
            CONTACT
          </Text>
          <Text
            className=" ml-[2%] md:ml-[0] ml-[3px] mt-[15px] text-base text-black-900"
            size="txtMontserratRegular16"
          >
            WEDDING PLANNER
          </Text>
        </div>
      </div>
  
  );
};
export default NavBar;
