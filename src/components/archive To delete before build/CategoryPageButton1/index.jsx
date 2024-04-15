import React from "react";

import { Img, Text } from "components";

const CategoryPageButton1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-red-300 border-solid flex flex-row gap-2 items-center justify-center px-3.5 py-2 rounded-lg w-auto md:w-full">
          <Text
            className="text-red-300 text-sm w-auto"
            size="txtMontserratMedium14"
          >
            {props?.text}
          </Text>
          <Img
            className="h-5 w-5"
            src="images/img_arrowleft.svg"
            alt="arrowright_Sixteen"
          />
        </div>
      </div>
    </>
  );
};

CategoryPageButton1.defaultProps = { text: "Next" };

export default CategoryPageButton1;
