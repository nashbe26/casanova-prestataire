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
          
            <div className="absolute flex flex-col md:h-auto inset-x-[0] items-center justify-start mx-auto  w-[747px] h-[100%]">
              <div className="flex flex-col md:h-auto items-center justify-start p-[27px] sm:px-5 w-[747px] md:w-full h-[100%]">
                <div className="sm:h-[502px]  relative w-[95%] md:w-full h-[100%]">
               
                  <div className="relative flex sm:flex-col flex-row gap-[38px] h-max inset-y-[0] items-start justify-between my-auto right-[5%] w-[72%]">
                    <div className="h-80 sm:h-[319px] md:h-[343px] sm:mt-0 mt-6 relative w-3/4 sm:w-full">
                      <Img
                        className="absolute h-[73%] w-[100%] top-[100%] left-[56%] inset-[0] justify-center m-auto object-contain w-full"
                        src="images/img_sdsza1.png"
                        alt="sdszaOne"
                        style={{height:"100%",width:"100%"}}
                      />
                    </div>
                   <Img
                   className="textCercle"
                   src="../images/text.svg"
                   />
                  </div>

                </div>
              </div>

              <div class="border-t-2 border-black-900 absolute bottom-[4.5%] right-[-64%%] z-[999] w-[100vw]"></div>
              <div class="border-t-2 border-black-900 absolute top-[64.6%] left-[-78%] z-[999] w-[27vw] transform rotate-90"></div>


         
            </div>
         
          </div>
              </div></>
   
    )

}

export default ScreenOne;