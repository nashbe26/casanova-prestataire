import React from "react";

import { Img, Text } from "components";
import { animate } from "motion"

const LandingPageSOneDesktop15 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[571px] sm:h-[572px] mt-auto mx-auto w-full">
          <Img
            className="h-[571px] m-auto object-cover w-full"
            src="images/img_bridegroomhav.png"
            alt="bridegroomhav"
          />
          <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[60px] h-full inset-[0] justify-center m-auto md:pr-10 sm:pr-5 pr-[61px] pt-[61px] w-full">
            <div className="mr-[1379px] mt-[419px] overflow-x-auto w-[1%]">
              <div className="flex flex-row gap-[23px] items-center justify-between w-full">
                <div className="h-[29px] relative w-[29px]">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-[29px]">
                    <div className="h-[29px] w-[29px]"></div>
                  </div>
                  <Img
                    className="absolute h-[29px] inset-[0] justify-center m-auto w-[29px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <Img
                  className="h-[26px] w-[26px]"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_cibtiktok.svg"
                  alt="cibtiktok"
                />
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_warning.svg"
                  alt="warning"
                />
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[61px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center uppercase"
              size="txtCormorantLight28"
            >
              {props?.scrolltext}
            </Text>
          </div>
        </div>
        <div className="absolute flex h-[1042px] sm:h-[1144px] md:h-[2216px] inset-[0] justify-end m-auto w-full">
          <div className="h-[1144px] md:h-[2216px] mt-auto mx-auto w-full">
            <div className="h-[1144px] md:h-[2216px] m-auto w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="overflow-x-auto">
                    <div className="flex overflow-auto relative w-full">
                      <div className="h-[1149px] my-auto md:pr-10 sm:pr-5 pr-[743px] w-full">
                       
                      </div>
                     
                    </div>
                  </div>
                
                </div>
              </div>
           
            </div>
         
          </div>
          <Img
            className="absolute h-[1032px] inset-y-[0] my-auto object-cover right-[0] w-[26%]"
            src="images/img_91231converti_1032x371.png"
            alt="91231converti_Seven"
          />
        </div>
      </div>
    </>
  );
};

LandingPageSOneDesktop15.defaultProps = { scrolltext: "scroll" };

export default LandingPageSOneDesktop15;
