import React from "react";

import { Img, Line, Text } from "components";

const LandingpagesFivePage = () => {
  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1032px] mx-auto relative w-full">
        <div className="h-[1038px] md:h-[999px] m-auto md:px-5 w-full">
          <div className="h-[1038px] md:h-[999px] m-auto w-full">
            <div className="h-[1038px] md:h-[999px] m-auto w-full">
              <div className="h-[1038px] md:h-[999px] m-auto w-full">
                <div className="h-[1038px] md:h-[999px] m-auto w-full">
                  <div className="h-[1038px] md:h-[999px] m-auto w-full">
                    <div className="h-[1038px] md:h-[999px] m-auto w-full">
                      <div className="absolute h-[999px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[7%] my-auto pt-[49px] md:px-10 sm:px-5 px-[49px] w-[7%]">
                          <Line className="bg-black-900 h-[778px] mt-[172px] w-px" />
                        </div>
                        <Img
                          className="absolute h-[100px] inset-x-[0] mx-auto top-[17%]"
                          src="images/img_maskgroup_black_900_100x1440.svg"
                          alt="maskgroup"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[100px] inset-x-[0] mx-auto"
                        src="images/img_maskgroup.svg"
                        alt="maskgroup_One"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[5%] w-[92%]">
                        <Text
                          className="text-base text-black-900"
                          size="txtMontserratRegular16"
                        >
                          HOME
                        </Text>
                        <div className="flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[23px] mt-[13px] w-[99%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtMontserratRegular16"
                          >
                            ABOUT
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover"
                            src="images/img_logo22.png"
                            alt="logoTwentyTwo"
                          />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[3px] mt-[11px] text-base text-black-900"
                          size="txtMontserratRegular16"
                        >
                          CONTACT
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[3px] mt-[15px] text-base text-black-900"
                          size="txtMontserratRegular16"
                        >
                          WEDDING PLANNER
                        </Text>
                        <Text
                          className="leading-[25.00px] mt-[225px] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[2%] sm:w-full"
                          size="txtMontserratRegular16"
                        >
                          Design. Planification. Amour
                        </Text>
                      </div>
                    </div>
                    <Line className="absolute bg-black-900 h-px left-[0] top-[10%] w-[5%]" />
                    <Img
                      className="absolute bottom-[23%] h-[504px] object-cover right-[0]"
                      src="images/img_group.png"
                      alt="group"
                    />
                  </div>
                  <div className="absolute bg-red-300 bottom-[4%] flex md:flex-col flex-row md:gap-5 items-start justify-end sm:pl-5 pl-[39px] pt-[39px] right-[0] w-[90%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-auto md:w-full">
                      <Text
                        className="text-base text-black-900 tracking-[5.00px] uppercase w-[243px]"
                        size="txtMontserratRegular16"
                      >
                        A propos de nous
                      </Text>
                      <Text
                        className="max-w-[624px] md:max-w-full sm:text-[32px] md:text-[38px] text-[23px] text-black-900 uppercase"
                      >
                        <>
                          Un événementréussi en un clin d&#39;œil ? C&#39;est
                          possible avec Casanova !
                        </>
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[579px] md:max-w-full text-base text-black-900"
                        size="txtMontserratRegular16"
                      >
                        <>
                          Casanova révolutionne le monde de l&#39;événementiel
                          en rassemblant tous les prestatairesdont vous avez
                          besoin en un seul et même endroit.
                        </>
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 flex flex-col items-center justify-start md:mt-0 mt-[33px] rounded-tl-[246px] w-1/2 md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[266px] md:h-auto object-cover w-full"
                          src="images/img_newbeautifulc.png"
                          alt="newbeautifulc"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[2%] h-[371px] object-cover right-[10%] w-[27%]"
                  src="images/img_041.png"
                  alt="FortyOne"
                />
              </div>
              <Img
                className="absolute bottom-[4%] h-[242px] object-cover right-[0] w-[21%]"
                src="images/img_031.png"
                alt="ThirtyOne"
              />
            </div>
            <Img
              className="absolute bottom-[14%] h-[228px] right-[3%]"
              src="images/img_vector.svg"
              alt="vector"
            />
          </div>
          <Img
            className="absolute bottom-[4%] h-[449px] object-cover right-[10%] w-[18%]"
            src="images/img_beautifulcoupl.png"
            alt="beautifulcoupl"
          />
        </div>
        <div className="absolute flex flex-col font-cormorant gap-[33px] items-start justify-start md:px-5 right-[6%] top-[30%] w-auto">
          <Text
            className="max-w-[702px] md:max-w-full md:text-5xl text-6xl text-red-300 uppercase w-full"
            size="txtCormorantRegular60"
          >
            Là où tout commence
          </Text>
          <div className="flex flex-col font-montserrat gap-[13px] h-[162px] md:h-auto items-start justify-start w-auto md:w-full">
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
                Un événement magique et sur mesure. Des décors féériques, une
                ambiance envoûtante, tout est pensé pour créer une expérience
                extraordinaire.
                <br /> Laissez-nous réaliser vos rêves, de la conception à la
                coordination. Écrivez ensemble une histoire inoubliable, une
                parenthèse enchantée qui renforcera vos liens. Embarquez pour un
                voyage inoubliable dès maintenant !
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagesFivePage;
