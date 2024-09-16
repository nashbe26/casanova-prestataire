import { Text } from "components"
import React from "react"


export const FeedbackCard = ({feedback}) =>{
    return(
<div className="border border-black-900_49 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
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
    className="leading-[22.00px] text-base text-black-900_99 w-full"
    size="txtMontserratRegular16Black90099"
  >
   
  </Text>
</div>
</div>
    )
}
