import React from "react";

import { Img, Line, Text } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Button } from "components";
import { useNavigate } from "react-router-dom";

import LandingPageSFourColumn from "components/archive To delete before build/LandingPageSFourColumn";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";
const ScreenTwo = () => {
  const navigate = useNavigate()

  return (
    <>
     <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto  relative ">
      <div class="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div className="h-[1005px] md:h-[966px] m-auto fullScreen postion2">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
              <Line className="bg-black-900 h-[665px] mt-[140%] w-px" />
            </div>
            <Img
              className="absolute h-[100px] inset-x-[0] mx-auto top-[16%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
            <Img
              className="absolute h-[100px] inset-x-[0] mx-auto bottom-[7%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                speed={600}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                }}
                modules={[Autoplay]}
                className="swiper-container w-[83%] left-[4%] "
              >
                {" "}
                {[...Array(3)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div key={index} className="relative">
                      <div
                        className={`flex flex-nowrap flex flex-col items-center pt-[12.5%] justify-start p-[18px]`}
                      >
                        <div
                          key={index}
                          className="flex flex-col items-center justify-start my-[25px] w-[99%] md:w-full"
                        >
                          <div className="flex relative w-full">
                            <Img
                              className="h-[642px] my-auto object-cover w-[62%]"
                              src="images/img_logo31.png"
                              alt="logoThirtyOne"
                            />
                            <div className="h-[638px] ml-[-401.5px] my-auto w-[73%] md:w-full z-[1]">
                              <Img
                                className="h-[638px] m-auto object-cover w-full"
                                src="images/img_vector8.png"
                                alt="vectorEight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            <Text
              className="absolute bottom-[-34%] text-[70%]  leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full"
           
            >
              Nous créons. Vous célébrez
            </Text>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[107px]  inset-x-[0] items-start justify-start mx-auto top-[4%] w-[92%]">
            <div className="flex flex-col items-start justify-start w-full">
             <br></br> <br></br> <br></br> <br></br><br></br>
            </div>

          

          </div>

        </div>
       

      </div>
    </>
  );
};

export default ScreenTwo;
