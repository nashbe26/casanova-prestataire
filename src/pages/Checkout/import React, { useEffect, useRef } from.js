import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Img, Line, Text } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./style.css";
const ScreenTwo = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
   <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
  <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
    <div className="flex items-center" style={{ marginTop: "13%", border: "1px black solid" }}>
      <div className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`} >
        <br />
        <Text className="text-[84%] pr-[42%] texto text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">Nous créons. Vous célébrez</Text>
        <br />
      </div>
      <div className={`flex md:flex-1 h-[100%] w-[38%] flex-col items-center justify-start`} style={{ borderLeft: "1px black solid" }}>
        <br />
        <br />
       
        <Img
          className={`md:h-auto object-cover h-[25%] w-[48%] rounded-br-7px w-full`}
          src={"images/img_weddingbouquet.png"}
          alt={"images/img_weddingbouquet.png"}
        />
        <br />
        <Img
          className={`md:h-auto h-[25%] w-[48%] object-cover rounded-br-7px w-full`}
          src={"images/img_vitormonthayj.png"}
          alt={"images/img_vitormonthayj.png"}
        />
        <br />
        <br />
       
       
      </div>
      <div className="flex flex-col items-start w-[50%] justify-start">
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
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ScreenTwo;
