import React from "react";

import { Img, Line, Text } from "components";
import LandingPageSSixColumn from "components/archive To delete before build/LandingPageSSixColumn";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";

const LandingpagesSixPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-gray-100 panel font-montserrat h-[1032px] mx-auto relative fullScreen">
        <div className="absolute bg-light_green-100 bottom-[3%] h-[778px] left-[11%] md:px-5 w-[47%]"></div>
        <div className="absolute h-[1038px] md:h-[999px] inset-[0] justify-center m-auto md:px-5 fullScreen">
          <div className="absolute h-[999px] inset-[0] justify-center m-auto fullScreen">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
              <Line className="bg-black-900 h-[778px] mt-[172px] w-px" />
            </div>
            <Img
              className="absolute h-[100px] inset-x-[0] mx-auto top-[15%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
          </div>
          <Img
            className="absolute bottom-[0] h-[100px] inset-x-[0] mx-auto"
            src="images/img_maskgroup.svg"
            alt="maskgroup_One"
          />
        
        </div>
        <div className="absolute bottom-[7%] md:h-[1027px] sm:h-[548px] h-[608px] md:px-5 right-[0] w-[90%] md:w-full">
          <div className="absolute font-cormorant md:h-[548px] h-[602px] inset-y-[0] left-[9%] my-auto w-[71%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col justify-start right-[4%] w-4/5">
              <Img
                className="h-[226px] md:h-auto md:ml-[0] ml-[498px] object-cover w-[227px] sm:w-full"
                src="images/img_061.png"
                alt="SixtyOne"
              />
              <Img
                className="h-[322px] sm:h-auto mr-[415px] object-cover w-[43%] md:w-full"
                src="images/img_031_322x310.png"
                alt="ThirtyOne"
              />
            </div>
            <Img
              className="absolute h-[264px] object-cover right-[0] top-[0] w-[265px]"
              src="images/img_035.png"
              alt="ThirtyFive"
            />
            <Text
              className="absolute left-[0] md:text-5xl text-6xl text-black-900 top-[5%] uppercase"
              size="txtCormorantRegular60Black900"
            >
              NOTRE GALERIE
            </Text>
          </div>
          <Text
            className="absolute left-[9%] text-base text-black-900 top-[0] tracking-[5.00px] uppercase"
            size="txtMontserratRegular16"
          >
            La fête de mariage
          </Text>
          <Img
            className="absolute h-6 right-[5%] top-[6%] w-6"
            src="images/img_arrowright_black_900.svg"
            alt="arrowright"
          />
          <Img
            className="absolute h-[91px] left-[22%] top-[23%]"
            src="images/img_vector_black_900.svg"
            alt="vector"
          />
          <Img
            className="absolute bottom-[24%] h-[86px] object-cover right-[0]"
            src="images/img_maximize.png"
            alt="maximize"
          />
             <div className={"absolute flex flex-col h-max inset-[0] items-center justify-center m-auto py-[77px] w-full"}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[29%] md:w-full">
            <Img
              className="h-60 md:h-auto object-cover rounded-br-[7px] w-full"
              src="images/img_jaysonhinrichs.png"
              alt="jaysonhinrichs"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[39%] md:w-full">
            <Img
              className="h-80 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
              src="images/img_vitormonthayj.png"
              alt="vitormonthayj"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[28%] md:w-full">
            <Img
              className="h-[233px] md:h-auto object-cover rounded-bl-[9px] w-full"
              src="images/img_weddingbouquet.png"
              alt="weddingbouquet"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagesSixPage;
