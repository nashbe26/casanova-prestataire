import React from "react";

import { Img, Line, Text } from "components";
import LandingPageSFourColumn from "components/archive To delete before build/LandingPageSFourColumn";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";
const LandingpagesFourPage = () => {
  return (
    <>
      <div className="bg-gray-100 panel font-montserrat h-[1032px] mx-auto relative ">
        <div className="h-[1038px] md:h-[1360px] sm:h-[999px] m-auto md:px-5 fullScreen">
          <div className="h-[1038px] md:h-[999px] m-auto w-full">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
              <Line className="bg-black-900 h-[778px] mt-[172px] w-px" />
            </div>
            <Img
              className="absolute h-[100px] inset-x-[0] mx-auto top-[16%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
            
         
          </div>
          <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[93%]">
           
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[65px] w-full">
              <Text
                className="leading-[25.00px] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase"
                size="txtMontserratRegular16"
              >
                Nous créons. Vous célébrez
              </Text>
              <LandingPageSFourColumn className="flex flex-col items-center justify-start p-[18px]" />
            </div>
          </div>
        </div>
        <Line className="absolute bg-black-900 h-px left-[0] top-[10%] w-[5%]" />
      </div>
    </>
  );
};

export default LandingpagesFourPage;
