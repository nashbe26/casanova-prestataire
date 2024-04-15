import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import LandingPageSEightColumnlogothirtyone from "components/archive To delete before build/LandingPageSEightColumnlogothirtyone";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1032px] mx-auto relative w-full ">
        <div className="h-[1038px] md:h-[999px] m-auto md:px-5 w-full transform -translate-y-[5%]">
          <div className="h-[1038px] md:h-[999px] m-auto w-full">
            <Sidebar className="!sticky !w-[286px] bg-black-900 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
              <div className="flex flex-col items-center justify-end ml-[104px] mr-[82px] pt-[49px] md:px-10 sm:px-5 px-[49px] w-[35%]">
                <Line className="bg-black-900 h-[778px] mt-[172px] w-px" />
              </div>
            
              <Img
                className="h-[177px] md:h-auto ml-[100px] mt-[87px] object-cover w-[66%]"
                src="images/img_035_177x186.png"
                alt="ThirtyFive"
              />
              <Img
                className="h-[111px] ml-[130px] mr-11 w-[111px]"
                src="images/img_vector_black_900_111x111.svg"
                alt="vector"
              />
              <Text
                className="leading-[25.00px] mb-[218px] ml-[59px] mr-[201px] mt-[7px] rotate-[90deg] text-base text-gray-600 tracking-[5.00px] uppercase w-[10%] sm:w-full"
                size="txtMontserratRegular16Gray600"
              >
                PRÊT À ENTRER EN CONTACT ?
              </Text>
            </Sidebar>
            <Img
              className="absolute h-[100px] inset-x-[0] mx-auto top-[16%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
            <Img
              className="absolute bottom-[0] h-[100px] inset-x-[0] mx-auto"
              src="images/img_maskgroup.svg"
              alt="maskgroup_One"
            />
            <Img
              className="absolute h-7 object-cover right-[4%] top-[8%] w-[15%]"
              src="images/img_logo22.png"
              alt="logoTwentyTwo"
            />
            <div className="absolute bottom-[17%] flex flex-col items-start justify-start right-[6%] w-[53%]">
              <Text
                className="text-base text-gray-600 tracking-[5.00px] uppercase"
                size="txtMontserratRegular16Gray600"
              >
                Prêt à entrer en contact ?
              </Text>
              <Text
                className="mt-[22px] sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                Nous planifierons votre journée selon vos préférences.
              </Text>
              <List
                className="flex flex-col font-montserrat gap-10 items-center mt-[31px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="bg-clip-text bg-gradient1  text-base text-transparent"
                      size="txtMontserratRegular16Gray80001"
                    >
                      Nom complet
                    </Text>
                  </div>
                  <Line className="bg-gradient1  h-px w-full" />
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRegular16Bluegray900"
                      >
                        Téléphone
                      </Text>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRegular16Bluegray900"
                      >
                        Email
                      </Text>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRegular16Bluegray900"
                      >
                        Date
                      </Text>
                    </div>
                    <Line className="bg-gray-900_01 h-px w-full" />
                  </div>
                </div>
              </List>
              <div className="bg-red-300 border border-red-300 border-solid flex flex-col font-montserrat items-center justify-end mt-[52px] p-3 rounded-[5px]">
                <Text
                  className="mt-0.5 text-center text-sm text-white-A700 uppercase"
                  size="txtMontserratRegular14"
                >
                  ENVOYER
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[17%] flex flex-col items-center justify-start left-[12%] w-[27%]">
            <Img
              className="h-[542px] md:h-auto object-cover rounded-br-[15px] w-full"
              src="images/img_patricklangwal_542x385.png"
              alt="patricklangwal"
            />
          </div>
        </div>
        <div className="absolute bottom-[8%] flex flex-row sm:gap-10 items-start justify-between md:px-5 right-[6%] w-full">
          <div className="h-[181px] md:h-[207px] mb-[26px] relative w-1/5">
            <Img
              className="h-[181px] m-auto object-cover w-full"
              src="images/img_031_181x177.png"
              alt="ThirtyOne"
            />
            <Img
              className="absolute h-[117px] inset-y-[0] my-auto right-[14%]"
              src="images/img_vector_red_300_117x111.svg"
              alt="vector_One"
            />
          </div>
          <LandingPageSEightColumnlogothirtyone className="flex flex-col items-center justify-start mt-[87px] w-[12%]" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
