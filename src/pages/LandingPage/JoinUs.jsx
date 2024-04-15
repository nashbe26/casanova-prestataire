import React from "react";

import { Button, Img, Line, Text, Input } from "components";
import { useNavigate } from "react-router-dom";

const JoinUs  = () => {
  const navigate = useNavigate();

  return (   
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto  relative transform -translate-y-[2.6%]">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen">
          <div className="flex">
            
            <div className="h-[1005px] md:h-[966px] m-auto fullScreen postion2">
            <div className="absolute flex flex-col h-full  items-center justify-end left-[7%] my-auto pt-[28px] md:px-10 sm:px-5 px-[49px] w-[7%]">
                          <Line className="bg-black-900 h-[817px] mt-[172px] w-px" />
                        </div>
              <Img
                className="absolute h-[100px] inset-x-[0] mx-auto top-[16%]"
                src="images/img_maskgroup_black_900_100x1440.svg"
                alt="maskgroup"
              />
                <Img
              className="absolute h-[100px] inset-x-[0] mx-auto bottom-[8.7%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
              <div className="absolute bottom-[16%] flex flex-row gap-[10%] items-start  justify-start right-[3%] w-[80%]">
              <div className="transform -translate-y-[7.5%]">
              <Img
                src="images/3rouss.svg"
                alt="maskgroup"
              />
              
            </div>
                <div className="transform -translate-y-[-10%]" >
                
                <Text className="sm:text-[32px] md:text-[38px] text-[22px] text-gray-500 uppercase w-full">
                  Prêt à entrer en contact ?{" "}
                </Text>
                <br></br>
                <Text
                  className="sm:text-[32px] md:text-[38px] w-[100%] text-[42px] text-red-300 uppercase w-full"
                  size="txtCormorantRegular42Red300"
                >
                  Offrez-vous une parenthèse <br></br> enchantée hors du temps. 
We plan yourday <br></br> your way.{" "}
                </Text>

                <Button
                    className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                    color="red_300"
                    size="md"
                    variant="fill"
                    onClick={(e)=>navigate("/signup")}
                  >
                    Rejoignez-nousmaintenant
                  </Button>

                </div>
               
              </div>
              <Img
  className="h-[10%] w-[10%] top-[70%] textCercle"
  src="../images/doura.svg"
  style={{ height: 'auto', width: 'auto', top: '71%' , left: "91%"}}
/>

              <Text className="absolute bottom-[-35%] text-[70%] leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
              Nous créons. Vous célébrez
            </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs ;
