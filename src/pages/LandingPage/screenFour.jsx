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
const ScreenFour = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <>
   <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
  <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
    <div className="flex items-center" style={{  marginTop: "13%", border: "1px black solid" }}>
      <div className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`} >
        <br />
        <Text className="text-[84%] pr-[42%] texto text-base text-black-900 tracking-[5.00px] pt-[50%] uppercase w-[100%] sm:w-full">Nous créons. Vous célébrez</Text>
        <br />
      </div>
      <div className="flex"> 
        <div className={`flex md:flex-1 h-[100%] w-[41.4%] flex-col items-center justify-start`} style={{ borderLeft: "1px black solid" }}>
        <br />
        <br />
       
        <Img
          className={`md:h-auto object-cover h-[100%] w-[48%] rounded-br-7px w-full`}
          src={"images/img_weddingbouquet.png"}
          alt={"images/img_weddingbouquet.png"}
        />
        <br />
        <Img
          className={`md:h-auto h-[100%] w-[48%] object-cover rounded-br-7px w-full`}
          src={"images/img_vitormonthayj.png"}
          alt={"images/img_vitormonthayj.png"}
        />
        <br />
        <br />
       
       
      </div>
      <div className="flex flex-col items-start w-[50%] justify-start">
        <Text
          className="sm:text-[32px] md:text-[38px] text-[23px] text-red-300 uppercase w-full"
          size="txtCormorantRegular42Red300"
        >
          nous construisons votre rève autour de vous
        </Text>
        <br />
        <Text
          className="leading-[25.00px] md:ml-[0] ml-[5px] text-[13px] text-black-900"
          size="txtMontserratRegular16"
        >
          <>
            Simplifiezl&#39;organisation de vos événements, du rêve à la réalité
            <br />
            Votre événement, un succès clés en main où l&#39;union parfaite des prestataires pour un événement inoubliable sans stress.
          </>
        </Text>
        <br />
        <Text
          className="leading-[25.00px] md:ml-[0] ml-[5px] text-[13px] text-black-900 w-[95%] sm:w-full"
          size="txtMontserratRegular16"
        >
          Trouvez en quelques clics le prestataire idéal pour votre événement : espaces, band, traiteur, photographe, décorateur, etc…
        </Text>
        <br />
        <Text
          className="leading-[25.00px] md:ml-[0] ml-[5px] text-[13px] text-black-900 w-[95%] sm:w-full"
          size="txtMontserratRegular16"
        >
          <>
            Comparez facilement les services et les tarifs en toute transparence pour choisir l&#39;offre qui correspond à vos besoins et à votre budget
          </>
        </Text>
        <br />
        <Text
          className="md:ml-[0] ml-[5px] text-[13px] text-black-900"
          size="txtMontserratRegular16"
        >
          <>Gagnez du temps et de l&#39;énergie.</>
        </Text>
        <br />
        <Button
          onClick={(e) => navigate("/homepage")}
          className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-h-[5%] min-w-[5%] rounded-[5px] text-center text-[12px] uppercase"
          color="red_300"
          size="sm"
          variant="fill"
        >
          Rejoignez-nous
        </Button>
      </div></div>
     
    </div>
  </div>
</div>

    </>
  );
};

export default ScreenFour;
