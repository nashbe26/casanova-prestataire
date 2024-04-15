import React from "react";

import { Img, Line, Text } from "components";

const PresCard = ({user}) => {
  return (
    <>
      <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-[19px] rounded-[12px]">
        <div className="flex flex-col gap-[37px] items-end justify-start mb-6 mt-10 w-[97%] md:w-full">
          <div className="flex flex-row gap-[27px] items-center justify-between w-full">
            <Img
              className="h-[97px] md:h-auto rounded-[50%] w-[97px]"
              src={process.env.REACT_APP_API_BACK + "/uploads/" + user.picture}
              alt="ellipseTwentyThree"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row font-cormorant gap-[11px] items-center justify-start w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtCormorantBold20"
                >
                  {user.businessName}
                </Text>
                <Img
                  className="h-3.5 md:h-auto object-cover w-[12%]"
                  src="../images/img_rectangle301.png"
                  alt="rectangle301"
                />
              </div>
              <Text
                className="leading-[140.00%] mt-[7px] text-[13px] text-gray-500 w-full"
                size="txtMontserratRegular13"
              >
                Architect with years of experience on various projectsin BIM and
                3D
              </Text>
              <div className="flex flex-row font-calistoga items-start justify-start mt-[9px] w-[88%] md:w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_Four"
                />
                <Text
                  className="ml-1 text-[13px] text-black-900"
                  size="txtCalistogaRegular13"
                >
                  4.8
                </Text>
                <Text
                  className="ml-1 text-[13px] text-black-900"
                  size="txtCalistogaRegular13"
                >
                  (47 reviews)
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-row items-start justify-start mt-[21px] w-full">
              <Img
                className="h-[15px]"
                src="../images/img_linkedin.svg"
                alt="linkedin"
              />
              <Text
                className="ml-3 mt-0.5 text-[13px] text-gray-500"
                size="txtGothamBook13"
              >
                From
              </Text>
              <Text
                className="ml-[205px] text-black-900  text-left text-sm"
                size="txtMontserratRomanMedium14Black900"
              >
                TUNISIE
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start mt-4 w-full">
              <Img
                className="h-[18px]"
                src="../images/img_lock_red_300.svg"
                alt="lock"
              />
              <Text
                className="ml-3 text-gray-500 text-sm"
                size="txtGothamBook14"
              >
                Member since
              </Text>
              <Text
                className="ml-[154px] text-[13px] text-black-900 text-right"
                size="txtMontserratRomanMedium13"
              >
                Feb 2017
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between mt-[23px] w-full">
              <div className="flex flex-row font-gotham gap-[13px] items-start justify-start">
                <Img
                  className="h-3 w-[13px]"
                  src="../images/img_save_red_300.svg"
                  alt="save"
                />
                <Text className="text-gray-500 text-sm" size="txtGothamBook14">
                  Last Delivery
                </Text>
              </div>
              <Text
                className="text-[13px] text-black-900 pr-[11%] text-left"
                size="txtMontserratRomanMedium13"
              >
                1 DAY
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresCard;
