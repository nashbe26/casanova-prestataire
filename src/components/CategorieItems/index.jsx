import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';

import { Img, Text } from "components";

const CategorieItems = (props) => {
  return (
    <div className={props.className}>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
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
        className="swiper-container"
      >
        {props.categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="relative">
              <Img
                className="h-[318px] m-auto object-cover rounded-[10px] w-full"
                src={category.image}
                alt={`image_${index}`}
              />
              <div className="absolute bg-light_green-100_ba bottom-[0] flex flex-row inset-x-[0] items-start justify-start mx-auto p-[19px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-row items-center justify-start mb-1 ml-2 md:ml-[0]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900_c9"
                    size="txtCormorantBold21Black900c9"
                  >
                    {category.name}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CategorieItems.defaultProps = {
  categories: [
    { name: "ESPACE DE MARIAGE", image: "images/img_image15.png" },
    { name: "MUSIC DE MARIAGE", image: "images/img_image15_318x279.png" },
    { name: "cccc", image: "images/img_image15.png" },
    { name: "cccc", image: "images/img_image15.png" },
  ],
};

export default CategorieItems;
