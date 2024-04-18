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
import { ReactComponent as SvgEres } from "../../assets/images/pageLa.svg";

const ScreenSix = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div
            className="flex items-center"
            style={{marginTop: "13%", border: "1px black solid" }}
          >
            <div
              className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`}
              style={{ borderRight: "1px black solid" }}
            >
              <br />
              <Text className="text-[84%] pr-[42%] texto text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
                Nous créons. Vous célébrez
              </Text>
              <br />
            </div>

            <div
              className="flex flex-col items-start w-[92%] justify-start"
             
            >
              <div>
                <div className="flex flex-col font-cormorant gap-[33px] items-start justify-start md:px-5  w-auto">
                  <br></br>
                  <Text
                    className=" md:max-w-full md:text-5xl pl-[2%] pt-[0.6] text-[25px]  text-red-300 uppercase w-full"
                    size="txtCormorantRegular60"
                  >
                    Là où tout commence
                  </Text>
                  <div className="lg:pb-[16%] flex flex-col font-montserrat pl-[2%] gap-[13px] h-[162px] md:h-auto items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-base text-gray-800 w-[85px]"
                      size="txtMontserratRegular16Gray800"
                    >
                      Imaginez...
                    </Text>
                    <Text
                      className="leading-[25.00px] max-w-[658px] md:max-w-full text-base text-black-900"
                      size="txtMontserratRegular16"
                    >
                      <>
                        Un événement magique et sur mesure. Des décors
                        féériques, une ambiance envoûtante, tout est pensé pour
                        créer une expérience extraordinaire.
                        <br /> Laissez-nous réaliser vos rêves, de la conception
                        à la coordination. Écrivez ensemble une histoire
                        inoubliable, une parenthèse enchantée qui renforcera vos
                        liens. Embarquez pour un voyage inoubliable dès
                        maintenant !
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row bg-red-300 items-start justify-start w-auto md:w-full">
                  

                    <div className="">
                    <Text
                      className="text-base pl-[2%] text-black-900 tracking-[5.00px] text-[15px] uppercase w-[100vw]"
                      size="txtCormorantRegular60"
                    >
                      A propos de nous
                    </Text>
                    <br></br>
                    <Text
                      className="max-w-[702px]  pl-[2%] md:max-w-full md:text-5xl text-[23px] text-black-900 uppercase w-full"
                      size="txtCormorantRegular60"
                    >
                      <>
                        Un événementréussi en un clin d&#39;œil? C&#39;est
                        possible avec Casanova !
                      </>
                    </Text>
                    <br></br>

                    <Text
                      className="leading-[25.00px] pl-[2%] max-w-[590px] md:max-w-full text-base text-black-900"
                      size="txtMontserratRegular16"
                    >
                      <>
                        Casanova révolutionne le monde de l&#39;événementiel en
                        rassemblant tous les prestatairesdont vous avez 
                        en un seul et même endroit.
                      </>
                    </Text>
                    </div>
                    
                    <div className="flex justify-end">
                    <SvgEres className="absolute bottom-[34.3%] right-[-7%]  h-[52%] object-cover  w-[39%]"/>

                    </div>
                  
                    
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

export default ScreenSix;
