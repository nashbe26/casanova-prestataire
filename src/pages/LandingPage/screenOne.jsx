import React from "react";
import NavBar from "components/archive To delete before build/LandingPageSTwoDesktop11/navBar";
import { ReactComponent as BottomVector } from "../../assets/images/bottomVector.svg";

import { Img, Line, Text } from "components";
import "./style.css"
const ScreenOne = () => {
    return(
      <>
      
        <div className="flex panel flex-col items-start justify-start fullScreen" >

          <div   className="md:h-[846px] mt-0.5 relative fullScreen">
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[7%] w-[47%]">
              <div className="flex flex-row sm:gap-10 items-start justify-between fullScreen">
                <div className="flex flex-col items-center justify-start mb-[70px] pt-[49px] md:px-10 sm:px-5 px-[49px]">
                  <Line className="bg-black-900 h-[724px] w-px" />
                </div>
               
              </div>
            </div>
            <div className="absolute flex flex-col h-[747px] md:h-auto inset-x-[0] items-center justify-start mx-auto pt-[5%] w-[747px]">
              <div className="flex flex-col h-[747px] md:h-auto items-center justify-start p-[27px] sm:px-5 w-[747px] md:w-full">
                <div className="sm:h-[502px] md:h-[593px] h-[692px] relative w-[95%] md:w-full">
               
                  <div className="absolute flex sm:flex-col flex-row gap-[38px] h-max inset-y-[0] items-start justify-between my-auto right-[5%] w-[72%]">
                    <div className="h-80 sm:h-[319px] md:h-[343px] sm:mt-0 mt-6 relative w-3/4 sm:w-full">
                      <div className="absolute bg-black-900 bottom-[0] h-[294px] right-[1%] rounded-[50%] w-[294px]"></div>
                      <Img
                        className="absolute h-[319px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_sdsza1.png"
                        alt="sdszaOne"
                      />
                    </div>
                   <Img
                   className="textCercle"
                   src="../images/text.svg"
                   />
                  </div>

                </div>
              </div>

              <div class="border-t-2 border-black-900 absolute bottom-[-15.5%] left-[-79%] z-[999] w-[300%]"></div>
              <div class="border-t-2 border-black-900 absolute top-[72.8%] left-[-105%] z-[999] w-[85%] transform rotate-90"></div>


         
            </div>
         
          </div>
              </div></>
   
    )

}

export default ScreenOne;