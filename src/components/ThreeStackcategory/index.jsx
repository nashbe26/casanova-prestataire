import React from "react";

import { Img, Text } from "components";

const ThreeStackcategory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[101px] md:h-[102px] inset-[0] justify-center m-auto w-full">
          {!!props?.createfromframe ? (
            <div className="border-b border-solid border-white-A700_14 h-[102px] m-auto w-full"></div>
          ) : null}
          <div className="absolute flex flex-row gap-2 items-center justify-start right-[0] top-[14%] w-auto">
            <Img className="h-2 w-2" src="images/img_close.svg" alt="close" />
            <Text
              className="text-white-A700_7a text-xs tracking-[1.20px] uppercase w-auto"
              size="txtPlusJakartaSansExtraBold12"
            >
              {props?.notificationtext}
            </Text>
          </div>
        </div>
        <Text
          className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0] w-auto"
          size="txtPlusJakartaSansExtraBold32"
        >
          {props?.categorytext}
        </Text>
      </div>
    </>
  );
};

ThreeStackcategory.defaultProps = {
  notificationtext: "New Icons",
  categorytext: "File",
};

export default ThreeStackcategory;
