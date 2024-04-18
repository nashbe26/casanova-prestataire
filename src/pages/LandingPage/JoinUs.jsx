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
const JoinUs = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div
            className="flex ite ms-center"
            style={{ marginTop: "13%", border: "1px black solid" }}
          >
             <div
              className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`}
            >
              <Text className="text-[84%] pr-[38%] texto text-base text-black-900 tracking-[5.00px] uppercase w-[100%] pt-[100%] sm:w-full">
                La fête de mariage
              </Text> 
            </div>
            <div
              className={`flex md:flex-1 h-[100%] w-[38%] flex-col items-center justify-start`}
              style={{ borderLeft: "1px black solid" }}
            >
              <br />
              <br />

              <Img
                className={`md:h-auto object-cover h-[25%] w-[48%] rounded-br-7px w-full`}
                src="images/3rouss.svg"
                alt={"images/img_weddingbouquet.png"}
              />
              <br />

              <br />
              <br />
            </div>
            <div className="flex flex-col items-start w-[50%] justify-start pt-[8%]">
              <br />
              <Text className="sm:text-[32px] md:text-[38px] text-[15px] text-gray-500 uppercase w-full">
                Prêt à entrer en contact ?{" "}
              </Text>
              <Text
                className="sm:text-[32px] md:text-[38px] w-[73%] text-[30px] text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                Offrez-vous une parenthèse enchantée hors du temps. We plan
                yourday your way
              </Text>

              <Button
                className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                color="red_300"
                size="md"
                variant="fill"
                onClick={(e) => navigate("/signup")}
              >
                Rejoignez-nousmaintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
