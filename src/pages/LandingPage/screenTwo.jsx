import React, { useEffect, useRef } from "react";

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
import { ReactComponent as Slide } from "../../assets/images/Group427320539.svg";

const ScreenTwo = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
   <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
  <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
    <div className="flex items-center" style={{ marginTop: "13%", border: "1px black solid" }}>
      <div className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`}  >
        <br />
        <Text className="text-[84%] pr-[42%] texto text-base pt-[50%] text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">Nous créons. Vous célébrez</Text>
        <br />
      </div>
     
      <div className="flex flex-col items-start w-[92%] height-[31.9vw] justify-start" style={{  borderLeft: "1px black solid" }}  >
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
                className="swiper-container w-[100%]  "
              >
                {" "}
                {[...Array(3)].map((_, index) => (
                  <SwiperSlide key={index}>

                         <Slide className={"w-[89.2%] h-[30.5vw]"}/>
 
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
