import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards } from 'swiper/modules';
import "./style.css"
const ScreenFour = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

 

  return (
    <>
    
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto  relative ">
     
        <div class="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div className="h-[1005px] md:h-[966px] m-auto fullScreen postion2">
          <div className="absolute flex flex-col h-full  items-center justify-end left-[7%] my-auto pt-[28px] md:px-10 sm:px-5 px-[49px] w-[7%]">
                          <Line className="bg-black-900 h-[795px] mt-[172px] w-px" />
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
            <div className="absolute bottom-[23%] flex flex-col items-start  justify-start right-[5%] w-[42%]">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                nous construisons votre rève autour de vous{" "}
              </Text>
              <br></br>
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px]  text-base text-black-900"
                size="txtMontserratRegular16"
              >
                <>
                  Simplifiezl&#39;organisation de vos événements, du rêveà la
                  réalité
                  <br />
                  Votreévénement, un succès clés en main où l&#39;union parfaite
                  des prestataires pour un événementinoubliable sans stress.
                </>
              </Text>
              <br></br>
             
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px]  text-base text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                Trouvez enquelques clics le prestataire idéal pour votre
                événement : espaces, band,traiteur,  photographe, décorateur,
                etc…
              </Text>
              <br></br>
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px]  text-base text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                <>
                  Comparez facilement les services et les tarifs en toute
                  transparence pour choisirl&#39;offre qui correspond à vos
                  besoins et à votre budget
                </>
              </Text>
              <br></br>
              <Text
                className="md:ml-[0] ml-[5px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                <>Gagnez dutemps et de l&#39;énergie.</>
              </Text>
              <br></br>
              <Button
                onClick={(e) => navigate("/homepage")}
                className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                color="red_300"
                size="md"
                variant="fill"
              >
                Rejoignez-nous
              </Button>
            </div>
           
            <Text className="absolute bottom-[-35%] text-[70%] leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
              Nous créons. Vous célébrez
            </Text>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[107px]  inset-x-[0] items-start justify-start mx-auto top-[4%] w-[92%]">
            <div className="flex flex-col items-start justify-start w-full">
              <br></br> <br></br> <br></br> <br></br>
              <br></br>
            </div>
            <div className="flex flex-col md:gap-10  h-[100%] right-[28%] items-center justify-start w-full">
           
 


        <div className={`flex md:flex-1  h-[100%] absolute left-[-21%] top-[26%] flex-col items-center justify-start w-full `}>
          <Img
            className={` md:h-auto object-cover  h-[25%] w-[25%] rounded-br-7px w-full `}
            src={"images/img_weddingbouquet.png"}
            alt={"images/img_weddingbouquet.png"}
          /> 
            <br></br>
            <Img
            className={` md:h-auto h-[25%] w-[25%] object-cover rounded-br-7px w-full `}
            src={"images/img_vitormonthayj.png"}
            alt={"images/img_vitormonthayj.png"}
          />
        </div>
       
   
 


            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] z-index[0] md:px-10 sm:px-5 px-[92px] w-[57%] md:w-full">
              <div className="md:h-[594px] sm:h-[641px] h-[643px] relative w-[95%] sm:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[7%] w-[81%] pb-[4%]">
                  
                  <div className="flex flex-col md:gap-10 gap-[47px] items-center justify-start w-full">
              
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

export default ScreenFour;
