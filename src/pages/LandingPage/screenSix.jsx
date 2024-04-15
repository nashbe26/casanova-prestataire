import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import LandingPageSEightColumnlogothirtyone from "components/archive To delete before build/LandingPageSEightColumnlogothirtyone";
import { ReactComponent as SvgEres } from "../../assets/images/pageLa.svg";

const ScreenSix = () => {
  return (
    <>
  <div className="bg-gray-100 panel  font-montserrat h-[1032px] mx-auto w-full  relative ">
        <div className="fullScreen transform -translate-y-[2.6%]">   
        <div className="bg-gray-100 font-montserrat h-[1032px] mx-auto relative w-full">
        <div className="h-[1038px] md:h-[999px] m-auto md:px-5 w-full">
          <div className="h-[1038px] md:h-[999px] m-auto w-full">
            <div className="h-[1038px] md:h-[999px] m-auto w-full">
              <div className="h-[1038px] md:h-[999px] m-auto w-full">
                <div className="h-[1038px] md:h-[999px] m-auto w-full">
                  <div className="h-[1038px] md:h-[999px] m-auto w-full">
                    <div className="h-[1038px] md:h-[999px] m-auto w-full">
                      <div className="absolute h-[999px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute flex flex-col h-full  items-center justify-end left-[7%] my-auto pt-[28px] md:px-10 sm:px-5 px-[49px] w-[7%]">
                          <Line className="bg-black-900 h-[800px] mt-[172px] w-px" />
                        </div>
                        <Img
                          className="absolute h-[100px] inset-x-[0] ml-[-20px] top-[15.2%]"
                          src="images/img_maskgroup_black_900_100x1440.svg"
                          alt="maskgroup"
                        />
                           <Img
              className="absolute h-[100px] inset-x-[0] ml-[-20px] mx-auto bottom-[7.5%]"
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
                    <Img
                      className="absolute bottom-[23%] h-[504px] object-cover right-[0]"
                      src="images/img_group.png"
                      alt="group"
                    />
                  </div>
                  <div className="absolute bg-red-300 bottom-[13.8%] h-[30%] flex md:flex-col flex-row md:gap-5 items-start justify-start sm:pl-5 pl-[39px] pt-[2%] right-[9px] w-[89%]">
                    <div className="flex flex-col  items-start justify-start w-auto md:w-full">
                      <Text
                        className="text-base text-black-900 tracking-[5.00px] uppercase w-[100%]"
                        size="txtMontserratRegular16"
                      >
                        A propos de nous
                      </Text>
                      <br></br>
                      <Text
                        className="max-w-[702px] md:max-w-full md:text-5xl text-4xl text-black-900 uppercase w-full"
                        size="txtCormorantRegular60"
                        >
                        <>
                          Un événementréussi en un clin d&#39;œil? C&#39;est
                          possible avec Casanova !
                        </>
                      </Text>
                      <br></br>

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
                      <br></br>
                     
                    </div>
                   
                  </div>
                </div>
               
              </div>
              <Text className="absolute bottom-[-35%] text-[70%] leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
              Nous créons. Vous célébrez
            </Text>
            </div>
           
          </div>
         
          <SvgEres className="absolute bottom-[12%] h-[52%] object-cover right-[-4%] w-[39%]"/>
        </div>
        <div className="absolute flex flex-col font-cormorant gap-[33px] items-start justify-start md:px-5 left-[12%] top-[30%] w-auto">
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
          </div>
      </div>
    </>
  );
};

export default ScreenSix;
