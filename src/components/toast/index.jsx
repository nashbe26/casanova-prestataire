import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Img, Text } from "components";

const CustomToast = ({ data , message,title}) => {
    if (!data || typeof data.visible === "undefined") {
        // If not, return null or any fallback component
        return null;
      }  
  return (
    <div
      className={`${
        data.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex flex-row-reverse ring-black mr-[-75%] `}
      style={{ backgroundColor: 'white', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} // Set background color to white and adjust margins
    >
          <div className="flex-1 w-0 p-4 mt-[0%]">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="../images/img_icon.png"
                alt="icon"
              />
            </div>
            <div className="flex flex-col pl-[2%] pb-[2%] gap-1 h-[62px] md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="capitalize text-black-900 text-sm w-auto"
                  size="txtInterSemiBold14"
                >
                  {title}
                </Text>
              </div>
              <Text
                className="leading-[160.00%] max-w-[314px] md:max-w-full text-blue_gray-800 text-xs"
                size="txtInterRegular12Bluegray800"
              >
                {message}
              </Text>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CustomToast;
