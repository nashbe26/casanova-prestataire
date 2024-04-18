import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import "./style.css";
const ScreenOne = () => {
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
      <div className="flex flex-col items-start w-[15%] justify-start">
        </div>
      <div className="flex flex-col items-start w-[50%] justify-start">
      
      <Img
                        className=" h-[73%] w-[25%] top-[100%] left-[56%] inset-[0] justify-center m-auto object-contain w-full"
                        src="images/img_sdsza1.png"
                        alt="sdszaOne"
                      />
       <Img
                   className="textCercle"
                   src="../images/text.svg"
                   />
       
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ScreenOne;
