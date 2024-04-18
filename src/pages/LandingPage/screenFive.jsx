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

const ScreenFive = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div
            className="flex relative items-center"
            style={{ marginTop: "13%", border: "1px black solid" }}
          >
            <div className="colorOfthiPage absolute  w-[45%] left-[8%] h-[100%] z-[-99]"></div>
            <div
              className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`}
             
            >
              <div style={{ marginTop: "20px" }}></div>
              <Text className="text-[84%] pr-[42%] texto text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
                Nous créons. Vous célébrez
              </Text>
              <div style={{ marginBottom: "20px" }}></div>
            </div>

            <div className="flex flex-col items-start w-[92%] pb-[3%] justify-start"   style={{ borderLeft: "1px black solid" }}>
              <div className="pl-[4%]  flex-grow">
                <Text
                  className=" text-[12px] text-black-900 pt-[18%] tracking-[5.00px] uppercase"
                  size="txtMontserratRegular16"
                >
                  La fête de mariage
                </Text>
                <Text
                  className="  md:text-4xl text-4xl text-black-900 top-[23%] uppercase"
                  size="txtCormorantRegular60Black900"
                >
                  NOTRE GALERIE
                </Text>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
                speed={600}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                className="swiper-container w-[100%] flex-grow"
              >
                {[
                  {
                    src: "images/img_jaysonhinrichs.png",
                    alt: "jaysonhinrichs",
                  },
                  { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                  {
                    src: "images/img_weddingbouquet.png",
                    alt: "weddingbouquet",
                  },
                  {
                    src: "images/img_jaysonhinrichs.png",
                    alt: "jaysonhinrichs",
                  },
                  { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                  {
                    src: "images/img_weddingbouquet.png",
                    alt: "weddingbouquet",
                  },
                  {
                    src: "images/img_jaysonhinrichs.png",
                    alt: "jaysonhinrichs",
                  },
                  { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                  {
                    src: "images/img_weddingbouquet.png",
                    alt: "weddingbouquet",
                  },
                  {
                    src: "images/img_jaysonhinrichs.png",
                    alt: "jaysonhinrichs",
                  },
                  { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                  {
                    src: "images/img_weddingbouquet.png",
                    alt: "weddingbouquet",
                  },
                ].map((image, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className={`h-[60] md:h-auto object-cover rounded-br-7px w-full `}
                        src={image.src}
                        alt={image.alt}
                      ></img>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenFive;
