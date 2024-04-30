import React from "react";

import { Img, Line, Text } from "components";

const PresDescription = ({user}) => {
  return (
    <>
      <div className="border border-gray-300 border-solid flex flex-col gap-[13px] items-start justify-center p-[33px] sm:px-5 rounded-[14px] w-full">
        <Text
          className="mt-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
          size="txtCormorantBold21"
        >
          DESCRIPTION
        </Text>
        <Text
          className="leading-[150.00%] mb-[15px] text-gray-500 text-xs w-full"
          size="txtMontserratRegular12Gray500"
        >
          {user?.description || "Pas de Description disponible."}
        </Text>
      </div>
    </>
  );
};

export default PresDescription;
