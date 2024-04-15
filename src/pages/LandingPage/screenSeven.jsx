import React from "react";

import { Button, Img, Line, List, Text } from "components";
import { useNavigate, useLocation } from 'react-router-dom';

const ScreenSeven = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 panel  font-montserrat h-[1032px] mx-auto w-full  relative ">
        <div className="fullScreen transform -translate-y-[2.6%]">   
        <div className="h-[1038px] md:h-[999px] m-auto md:px-5 w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
            <Line className="bg-black-900 h-[778px] mt-[180px] w-px" />
          </div>
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
        </div>
        <div className="absolute flex flex-col gap-[53px] h-max inset-[0] items-center justify-center m-auto  md:px-5 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <br></br>
              <Text
                className="ml-[2%] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                <br></br>
              </Text>
              <div className=" ml-[2%] flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[23px] mt-[13px] w-[99%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRegular16"
                >
                                  <br></br>

                </Text>
              
              </div>
              <Text
                className=" ml-[2%] md:ml-[0] ml-[3px] mt-[11px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                                <br></br>

              </Text>
              <Text
                className=" ml-[2%] md:ml-[0] ml-[3px] mt-[15px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                                <br></br>

              </Text>
            </div>
          <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
            <Text
              className="leading-[25.00px] rotate-[90deg] text-base text-gray-600 tracking-[5.00px] uppercase"
              size="txtMontserratRegular16Gray600"
            >
              TRAITEUR ÉLITE
            </Text>
            <div className="md:h-[1123px] sm:h-[724px] h-[788px] relative w-[95%] md:w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-[53px] items-center justify-between left-[0] top-[2%] w-[87%]">
                <div className="flex md:h-[680px] h-[724px] sm:h-[748px] justify-end relative w-[63%] md:w-full">
                 
                  <div className="absolute md:h-[680px] h-[724px] sm:h-[748px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-start justify-start p-[50px] md:px-10 sm:px-5 right-[0] shadow-bs2 w-[93%]">
                      <Text
                        className="mt-[13px] text-base text-gray-600 tracking-[5.00px] uppercase"
                        size="txtMontserratRegular16Gray600"
                      >
                        TRAITEUR ÉLITE
                      </Text>
                      <Text
                        className="mt-3 sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-[98%] sm:w-full"
                        size="txtCormorantRegular42Red300"
                      >
                        Nous planifions votre journée à la perfection
                      </Text>
                      <Text
                        className="leading-[25.00px] mt-[45px] text-base text-gray-600 w-[90%] sm:w-full"
                        size="txtMontserratRegular16Gray600"
                      >
                        Créez des souvenirs impérissables qui vous
                        accompagneronttoute votre vie
                      </Text>
                      <List
                        className="flex flex-col font-montserrat gap-11 items-center mt-11 w-[99%]"
                        orientation="vertical"
                      >
                        <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                          <div className="h-[50px] relative w-[92%] sm:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[25.00px] left-[0] my-auto text-base text-gray-600"
                              size="txtMontserratRegular16Gray600"
                            >
                              <>
                                Pulled jackfruit
                                <br />
                                (cumin seeds, paprika, tomato, jackfruit)
                              </>
                            </Text>
                          </div>
                          <Text
                            className="sm:mt-0 mt-1.5 text-base text-gray-600"
                            size="txtMontserratRegular16Gray600"
                          >
                            $50
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                          <div className="h-[50px] relative w-[92%] sm:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[25.00px] left-[0] my-auto text-base text-gray-600"
                              size="txtMontserratRegular16Gray600"
                            >
                              <>
                                Wedding wreath
                                <br />
                                (spinach, tofu, nutmeg, cherries)
                              </>
                            </Text>
                            <Line className="absolute bg-gray-600 h-px right-[0] top-[5%] w-[57%]" />
                          </div>
                          <Text
                            className="sm:mt-0 mt-1.5 text-base text-gray-600"
                            size="txtMontserratRegular16Gray600"
                          >
                            $68
                          </Text>
                        </div>
                      </List>
                      <Button
                        className="border border-black-900 border-solid cursor-pointer font-montserrat leading-[normal] mb-[21px] min-w-[203px] mt-11 rounded-[5px] text-center text-sm uppercase"
                        color="black_900"
                        size="md"
                        variant="fill"
                        onClick = {(e)=>{navigate("/Signup")}}


                      >
                        EXPLORE
                      </Button>
                    </div>
                    <Img
                      className="absolute h-[156px] left-[0] top-[0]"
                      src="images/img_vector_black_900_156x161.svg"
                      alt="vector"
                    />
                  </div>
                </div>
                <Img
                  className="h-[390px]"
                  src="images/img_group_black_900.svg"
                  alt="group"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[17%] w-[30%]">
                <div className="md:h-[289px] h-[342px] relative w-full">
                  <Img
                    className="absolute h-[289px] object-cover right-[0] top-[0] w-[86%]"
                    src="images/img_maskgroup_289x328.png"
                    alt="maskgroup_Two"
                  />
                  <Img
                    className="absolute bottom-[0] h-[140px] left-[0] w-[140px]"
                    src="images/img_vector_red_300.svg"
                    alt="vector_One"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[30%]">
                <div className="md:h-[289px] h-[340px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-[289px] left-[0] object-cover w-[87%]"
                    src="images/img_maskgroup_1.png"
                    alt="maskgroup_Three"
                  />
                  <Img
                    className="absolute h-[136px] right-[0] top-[0] w-[136px]"
                    src="images/img_vector_red_300_136x136.svg"
                    alt="vector_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default ScreenSeven;
