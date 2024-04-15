import React from "react";

import { Img } from "components";

const LandingPageSEightColumnlogothirtyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[120px] h-[121px] relative w-full">
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <Img
                className="h-[50px]"
                src="images/img_vector_black_900_50x101.svg"
                alt="vector_Two"
              />
              <Img
                className="h-[49px] ml-1 md:ml-[0]"
                src="images/img_vector_black_900_49x101.svg"
                alt="vector_Three"
              />
            </div>
          </div>
          <Img
            className="absolute h-[29px] inset-y-[0] my-auto object-cover right-[31%] w-[31%]"
            src="images/img_logo31_29x32.png"
            alt="logoThirtyOne"
          />
          <div className="absolute border border-black-900 border-solid h-[100px] inset-[0] justify-center m-auto rounded-[50%] w-[100px]"></div>
        </div>
      </div>
    </>
  );
};

LandingPageSEightColumnlogothirtyone.defaultProps = {};

export default LandingPageSEightColumnlogothirtyone;
