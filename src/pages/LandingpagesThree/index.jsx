import React from "react";

import { Button, Img, Line, Text } from "components";
import LandingPageSThreeColumnvector from "components/archive To delete before build/LandingPageSThreeColumnvector";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";

const LandingpagesThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 panel font-montserrat h-[1032px] mx-auto pb-[27px] position2 relative">

        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen">
          <div className="h-[1005px] md:h-[966px] m-auto fullScreen postion2">

            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
              <Line className="bg-black-900 h-[760px] mt-[157px] w-px" />
            </div>
            <Img
              className="absolute bottom-[0] h-[100px] inset-x-[0] mx-auto"
              src="images/img_maskgroup.svg"
              alt="maskgroup"
            />
            <div className="absolute bottom-[11%] flex flex-col items-start justify-start right-[5%] w-[42%]">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                nous construisons votre rève autour de vous{" "}
              </Text>
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px] mt-[86px] text-base text-black-900"
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
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px] mt-12 text-base text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                Trouvez enquelques clics le prestataire idéal pour votre
                événement : espaces, band,traiteur,  photographe, décorateur,
                etc…
              </Text>
              <Text
                className="leading-[25.00px] md:ml-[0] ml-[5px] mt-[47px] text-base text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                <>
                  Comparez facilement les services et les tarifs en toute
                  transparence pour choisirl&#39;offre qui correspond à vos
                  besoins et à votre budget
                </>
              </Text>
              <Text
                className="md:ml-[0] ml-[5px] mt-[50px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                <>Gagnez dutemps et de l&#39;énergie.</>
              </Text>
              <Button
                className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                color="red_300"
                size="md"
                variant="fill"
              >
                Rejoignez-nous
              </Button>
            </div>
            <Text
              className="absolute bottom-[24%] leading-[25.00px] left-[4%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[2%] sm:w-full"
              size="txtMontserratRegular16"
            >
              Nous créons. Vous célébrez
            </Text>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[107px] inset-x-[0] items-start justify-start mx-auto top-[4%] w-[92%]">
            <NavBar></NavBar>
            <LandingPageSThreeColumnvector className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] md:px-10 sm:px-5 px-[92px] w-[57%] md:w-full" />
          </div>
        </div>
        <Line className="absolute bg-black-900 h-px left-[0] top-[8%] w-[5%]" />
        <Img
          className="absolute h-[100px] inset-x-[0] mx-auto object-cover top-[15%]"
          src="images/img_maskgroup_black_900_100x1439.png"
          alt="maskgroup_One"
        />
      </div>
      <br></br> <br></br>

    </>
  );
};

export default LandingpagesThreePage;
