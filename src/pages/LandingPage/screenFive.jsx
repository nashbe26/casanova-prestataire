import React from "react";

import { Img, Line, Text } from "components";
import LandingPageSSixColumn from "components/archive To delete before build/LandingPageSSixColumn";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards } from 'swiper/modules';

const ScreenFive = () => {
  return (
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto  relative transform -translate-y-[2.6%] ">

        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen"></div>

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
             <Img
              className="absolute h-[100px] inset-x-[0] mx-auto bottom-[7.5%]"
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
        <div className="absolute bottom-[20%] md:h-[1027px] sm:h-[548px] h-[609px] md:px-5 right-[0] w-[90%] md:w-full">
          <div className="font-cormorant bg-red-300 ml-[0.5%] colorOfthiPage md:h-[548px] h-[673px] inset-y-[0] left-[9%] my-auto w-[50%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col justify-start right-[4%] w-4/5">
              <Img
                className="h-[226px] md:h-auto md:ml-[0] ml-[498px] object-cover w-[227px] sm:w-full"
                src="images/img_061.png"
                alt="SixtyOne"
              />
             
            </div>
            <Img
              className="absolute h-[264px] object-cover right-[0] top-[0] w-[265px]"
              src="images/img_035.png"
              alt="ThirtyFive"
            />
            <div className="right-[0]">
            <Text
              className="absolute left-[5%] md:text-5xl text-6xl text-black-900 top-[23%] uppercase"
              size="txtCormorantRegular60Black900"
            >
              NOTRE GALERIE
            </Text>
          </div>
          <Text
            className="absolute left-[5%] text-base text-black-900 top-[17%] tracking-[5.00px] uppercase"
            size="txtMontserratRegular16"
          >
            La fête de mariage
          </Text>
            </div>
          
     
         
          <Img
            className="absolute bottom-[24%] h-[86px] object-cover right-[0]"
            src="images/img_maximize.png"
            alt="maximize"
          />
             <div className={"absolute flex flex-col h-max inset-[0] items-center pl-[0.5%] justify-center m-auto py-[77px] w-full"}>
        <div className="flex md:flex-col flex-row md:gap-10 pt-[15%] items-center justify-between w-full">
        <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  effect={'coverflow'}

  slidesPerView={3}
  pagination={{
    clickable: true,
  }}
  loop={true}
  speed={600}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,

  }}
  modules={[Navigation, Autoplay, EffectCoverflow, EffectCards]}
  >
  {[
    { src: "images/img_jaysonhinrichs.png", alt: "jaysonhinrichs" },
    { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
    { src: "images/img_weddingbouquet.png", alt: "weddingbouquet" },
    { src: "images/img_jaysonhinrichs.png", alt: "jaysonhinrichs" },
    { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
    { src: "images/img_weddingbouquet.png", alt: "weddingbouquet" },
    { src: "images/img_jaysonhinrichs.png", alt: "jaysonhinrichs" },
    { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
    { src: "images/img_weddingbouquet.png", alt: "weddingbouquet" },
    { src: "images/img_jaysonhinrichs.png", alt: "jaysonhinrichs" },
    { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
    { src: "images/img_weddingbouquet.png", alt: "weddingbouquet" },
  ].map((image, index) => {
    const scale = index === 1 ? 1.5 : 1; // Set scale factor for the middle slide
    
    return (
      <SwiperSlide key={index}>
        <div className={`flex md:flex-1 flex-col items-center justify-start w-full scale-${scale}`}>
          <Img
            className={`h-60 md:h-auto object-cover rounded-br-7px w-full `}
            src={image.src}
            alt={image.alt}
          />
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>




        
     
        </div>
      </div>
        </div>
        <Text className="absolute bottom-[-35%] text-[70%] leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
              Nous créons. Vous célébrez
            </Text>
      </div>
    </>
  );
};

export default ScreenFive;
/*  <div className="flex md:flex-col flex-row md:gap-10 pt-[9%] items-center justify-between w-full">
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


        */