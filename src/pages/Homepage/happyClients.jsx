import React from "react";
import { Button, Img, Line, Text, RatingBar, List } from "components";

const HappyClients = () => {
  // Sample data for happy clients
  const happyClients = [
    {
      name: "Sarah M.",
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    // Add more clients as needed
  ];

  return (
    <>
      <div className="flex flex-col font-cormorant gap-12 items-center sm:justify-center md:mb-[0%] justify-start max-w-[1241px] sm:mt-[15%]  sm:ml-[0%] ml-[8%] mt-[137px]  md:px-5 w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-center  justify-between w-full">
          <Text
            className="text-5xl sm:text-[200%] sm:text-center md:text-[44px] text-red-300"
            size="txtCormorantBold48Red300"
          >
            OUR HAPPY CUSTOMERS
          </Text>
         
        </div>
        <List
          className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          {happyClients.map((client, index) => (
            <div
              key={index}
              className="border border-black-900_42 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full"
            >
              <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
                <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtCormorantBold20"
                  >
                    {client.name}
                  </Text>
                  <RatingBar
                    className="flex justify-between mb-[3px] mt-2 w-[78px]"
                    value={client.rating}
                    starCount={5}
                    activeColor="#a57761"
                    size={13}
                  />
                </div>
                <Text
                  className="leading-[22.00px] text-base text-black-900 w-full"
                  size="txtMontserratRegular16"
                >
                  {client.review}
                </Text>
              </div>
            </div>
          ))}
        </List>
      </div>
    </>
  );
};

export default HappyClients;
