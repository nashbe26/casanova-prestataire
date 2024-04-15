import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP
import LandingpagesThree from "../../../pages/LandingpagesThree";

import { Img, Line, Text } from "components";
import "./style.css"
import LandingpagesFourPage from "pages/LandingpagesFour";
import LandingPageSFourColumn from "components/archive To delete before build/LandingPageSFourColumn";
import LandingpageContactPage from "pages/LandingpageContact";
import LandingpagesSixPage from "pages/LandingpagesSix";
import NavBar from "./navBar";
const LandingPageSTwoDesktop12 = ({props}) => {
    return(
      <>
        <div className="flex panel flex-col items-start justify-start fullScreen" >
          
          <div   className="md:h-[846px] h-[909px] mt-0.5 relative fullScreen">
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[7%] w-[47%]">
              <div className="flex flex-row sm:gap-10 items-start justify-between fullScreen">
                <div className="flex flex-col items-center justify-start mb-[70px] pt-[49px] md:px-10 sm:px-5 px-[49px]">
                  <Line className="bg-black-900 h-[724px] w-px" />
                </div>
                <Img
                  className="h-[99px] mt-[745px] w-[100px]"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col h-[747px] md:h-auto inset-x-[0] items-center justify-start mx-auto top-[0] w-[747px]">
              <div className="flex flex-col h-[747px] md:h-auto items-center justify-start p-[27px] sm:px-5 w-[747px] md:w-full">
                <div className="sm:h-[502px] md:h-[593px] h-[692px] relative w-[95%] md:w-full">
               
                  <div className="absolute flex sm:flex-col flex-row gap-[38px] h-max inset-y-[0] items-start justify-between my-auto right-[5%] w-[72%]">
                    <div className="h-80 sm:h-[319px] md:h-[343px] sm:mt-0 mt-6 relative w-3/4 sm:w-full">
                      <div className="absolute bg-black-900 bottom-[0] h-[294px] right-[1%] rounded-[50%] w-[294px]"></div>
                      <Img
                        className="absolute h-[319px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_sdsza1.png"
                        alt="sdszaOne"
                      />
                    </div>
                   <Img
                   className="textCercle"
                   src="../images/text.svg"
                   />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute left-[4%] text-base text-black-900 top-[1%]"
              size="txtMontserratRegular16"
            >
              {props?.aboutmenublogThree}
            </Text>
            
          </div>
              </div></>
   
    )

}

export default LandingPageSTwoDesktop12;