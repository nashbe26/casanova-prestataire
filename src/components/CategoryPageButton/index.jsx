import React from "react";

import { Img, Text } from "components";

const CategoryPageButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-red-300 border-solid flex flex-row gap-2 items-center justify-center px-3.5 py-2 rounded-lg w-auto md:w-full">
          <Img
            className="h-5 w-5"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <Text
            className="text-red-300 text-sm w-auto"
            size="txtMontserratMedium14"
          >
            {props?.previoustext}
          </Text>
        </div>
      </div>
    </>
  );
};

CategoryPageButton.defaultProps = { previoustext: "Previous" };

export default CategoryPageButton;
