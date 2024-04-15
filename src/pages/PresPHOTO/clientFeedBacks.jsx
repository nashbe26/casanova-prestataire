import React from "react";

import { List, RatingBar, Text } from "components";

const ClientsFeedBacks = () => {
  return (
    <>
      <List
        className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[55px] w-full"
        orientation="horizontal"
      >
        <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
            <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtCormorantBold20"
              >
                Sarah M.
              </Text>
              <RatingBar
                className="flex justify-between mb-[3px] mt-2 w-[78px]"
                value={5}
                starCount={5}
                activeColor="#a57761"
                size={13}
              ></RatingBar>
            </div>
            <Text
              className="leading-[22.00px] text-base text-black-900 w-full"
              size="txtMontserratRegular16"
            >
              <>
                &quot;I&#39;m blown away by the quality and style of the clothes
                I received from Shop.co. From casual wear to elegant dresses,
                every piece I&#39;ve bought has exceeded my expectations.”
              </>
            </Text>
          </div>
        </div>
        <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
            <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtCormorantBold20"
              >
                Sarah M.
              </Text>
              <RatingBar
                className="flex justify-between mb-[3px] mt-2 w-[78px]"
                value={5}
                starCount={5}
                activeColor="#a57761"
                size={13}
              ></RatingBar>
            </div>
            <Text
              className="leading-[22.00px] text-base text-black-900 w-full"
              size="txtMontserratRegular16"
            >
              <>
                &quot;I&#39;m blown away by the quality and style of the clothes
                I received from Shop.co. From casual wear to elegant dresses,
                every piece I&#39;ve bought has exceeded my expectations.”
              </>
            </Text>
          </div>
        </div>
        <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
            <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtCormorantBold20"
              >
                Sarah M.
              </Text>
              <RatingBar
                className="flex justify-between mb-[3px] mt-2 w-[78px]"
                value={5}
                starCount={5}
                activeColor="#a57761"
                size={13}
              ></RatingBar>
            </div>
            <Text
              className="leading-[22.00px] text-base text-black-900 w-full"
              size="txtMontserratRegular16"
            >
              <>
                &quot;I&#39;m blown away by the quality and style of the clothes
                I received from Shop.co. From casual wear to elegant dresses,
                every piece I&#39;ve bought has exceeded my expectations.”
              </>
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

export default ClientsFeedBacks;
