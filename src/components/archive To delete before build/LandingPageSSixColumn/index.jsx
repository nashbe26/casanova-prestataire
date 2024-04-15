import React from "react";

import { Img } from "components";

const LandingPageSSixColumn = (props) => {
  return (
    <>
      <div className={"absolute flex flex-col h-max inset-[0] items-center justify-center m-auto py-[77px] w-full"}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[29%] md:w-full">
            <Img
              className="h-60 md:h-auto object-cover rounded-br-[7px] w-full"
              src="images/img_jaysonhinrichs.png"
              alt="jaysonhinrichs"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[39%] md:w-full">
            <Img
              className="h-80 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
              src="images/img_vitormonthayj.png"
              alt="vitormonthayj"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[28%] md:w-full">
            <Img
              className="h-[233px] md:h-auto object-cover rounded-bl-[9px] w-full"
              src="images/img_weddingbouquet.png"
              alt="weddingbouquet"
            />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageSSixColumn.defaultProps = {};

export default LandingPageSSixColumn;
