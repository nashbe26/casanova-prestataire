import React from "react";

import { Img } from "components";

const LandingPageSThreeColumnvector = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[594px] sm:h-[641px] h-[643px] relative w-[95%] sm:w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[7%] w-[81%]">
            <div className="flex flex-col md:gap-10 gap-[87px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[277px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-full"
                  src="images/img_placeweddingc.png"
                  alt="placeweddingc"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[277px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-full"
                  src="images/img_placeweddingc_277x421.png"
                  alt="placeweddingc_One"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[26%] flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
            <Img
              className="h-44 mt-[84px] w-44"
              src="images/img_vector_red_300.svg"
              alt="vector"
            />
            <Img
              className="h-[107px]"
              src="images/img_vector_red_300_107x97.svg"
              alt="vector_One"
            />
          </div>
          <Img
            className="absolute h-[111px] left-[0] top-[0]"
            src="images/img_vector_red_300.svg"
            alt="vector_Two"
          />
          <Img
            className="absolute bottom-[0] h-16 right-[0]"
            src="images/img_settings.svg"
            alt="settings"
          />
        </div>
      </div>
    </>
  );
};

LandingPageSThreeColumnvector.defaultProps = {};

export default LandingPageSThreeColumnvector;
