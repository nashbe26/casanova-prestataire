import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PreshomepageaviabiltyPage = () => {
  const [itemonevalue, setItemonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-end justify-start mx-auto pb-[53px] md:px-10 sm:px-5 px-[53px] w-full">
        <div className="flex flex-col font-montserrat items-center max-w-[1241px] mx-auto w-full">
          <div className="flex relative w-full">
            <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start my-auto p-7 sm:px-5 rounded-[14px] w-[24%]">
              <div className="flex flex-col items-center justify-start mb-[493px] w-[94%] md:w-full">
                <div className="flex flex-col gap-[19px] justify-start w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start ml-2 md:ml-[0] w-[72%] md:w-full">
                    <div className="border border-blue_gray-100_01 border-solid flex flex-col h-[45px] items-center justify-end p-[3px] rounded-[22px] w-[45px]">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[19px] w-[37px] sm:w-full"
                        src="images/img_avatar.png"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[10px] text-gray-600_03"
                        size="txtMontserratRomanMedium10"
                      >
                        Store
                      </Text>
                      <Text
                        className="text-gray-600_01 text-sm"
                        size="txtMontserratRomanSemiBold14"
                      >
                        GORMONDISE
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-56">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Input
                        name="item"
                        placeholder="Home Page"
                        className="font-medium p-0 placeholder:text-black-900 text-[13px] text-left w-full"
                        wrapClassName="flex rounded-lg w-full"
                        prefix={
                          <div className="h-3.5 mb-0.5 mr-[19px] w-3.5 outline-gray-600_03 outline-[0.5px] outline">
                            <Img
                              className="h-3.5 my-auto"
                              src="images/img_home_gray_600_03.svg"
                              alt="home"
                            />
                          </div>
                        }
                        shape="round"
                        color="deep_orange_50"
                        size="md"
                      ></Input>
                      <div className="flex flex-row gap-4 items-center justify-start px-2 py-1.5 w-56">
                        <Img
                          className="h-5 w-5"
                          src="images/img_20pxtag.svg"
                          alt="20pxtag"
                        />
                        <Text
                          className="text-[13px] text-gray-600_03 w-auto"
                          size="txtMontserratRomanMedium13Gray60003"
                        >
                          Products
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start px-2 py-1.5 rounded-lg w-56">
                        <Img
                          className="h-5 w-5"
                          src="images/img_20pxcart.svg"
                          alt="20pxcart"
                        />
                        <Text
                          className="text-[13px] text-gray-600_03 w-auto"
                          size="txtMontserratRomanMedium13Gray60003"
                        >
                          Orders
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start px-2 py-1.5 rounded-lg w-56">
                        <Img
                          className="h-[19px] w-[19px]"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                        <Text
                          className="text-[13px] text-gray-600_03 w-auto"
                          size="txtMontserratRomanMedium13Gray60003"
                        >
                          Media
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start px-2 py-1.5 w-56">
                        <Img
                          className="h-[17px] w-[17px]"
                          src="images/img_thumbsup_gray_600_03.svg"
                          alt="thumbsup"
                        />
                        <Text
                          className="text-[13px] text-gray-600_03 w-auto"
                          size="txtMontserratRomanMedium13Gray60003"
                        >
                          Balance
                        </Text>
                      </div>
                      <Input
                        name="item_One"
                        placeholder="Settings"
                        value={itemonevalue}
                        onChange={(e) => setItemonevalue(e)}
                        className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                        wrapClassName="flex rounded-lg w-full"
                        prefix={
                          <Img
                            className="cursor-pointer h-5 mr-4 my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        }
                        suffix={
                          <CloseSVG
                            fillColor="#6b7280"
                            className="cursor-pointer h-5 my-auto"
                            onClick={() => setItemonevalue("")}
                            style={{
                              visibility:
                                itemonevalue?.length <= 0
                                  ? "hidden"
                                  : "visible",
                            }}
                            height={20}
                            width={20}
                            viewBox="0 0 20 20"
                          />
                        }
                        shape="round"
                        size="xs"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start ml-[-14px] my-auto p-3.5 w-[78%] z-[1]">
              <div className="flex flex-col gap-3.5 items-center justify-start mb-[99px] mt-0.5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-start justify-between w-[68%] md:w-full">
                    <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-center justify-start p-3 rounded-lg">
                      <div className="flex flex-col gap-3 items-center justify-start mb-[22px] w-[98%] md:w-full">
                        <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                          <Text
                            className="mb-[3px] mt-1.5 text-gray-900_02 text-lg"
                            size="txtMontserratRomanSemiBold18"
                          >
                            Gormondisze
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-end w-auto">
                            <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded-lg w-auto">
                              <div className="bg-teal-400 h-1.5 rounded-[50%] w-1.5"></div>
                              <Text
                                className="text-[13px] text-blue_gray-700 w-auto"
                                size="txtMontserratRomanMedium13Bluegray700"
                              >
                                Live Store
                              </Text>
                            </div>
                            <Button
                              className="border border-gray-200_01 border-solid flex h-8 items-center justify-center rounded-lg w-8"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-5"
                                src="images/img_20pxmorehorizontal.svg"
                                alt="20pxmorehorizon"
                              />
                            </Button>
                          </div>
                        </div>
                        <Text
                          className="leading-[24.00px] text-gray-600_04 text-xs w-full"
                          size="txtMontserratRomanRegular12"
                        >
                          The unisex Classic Bathrobe is designed to elevate the
                          joy of feeling comfortable at home or when relaxing in
                          nature. The robes are designed in a traditional and
                          unisex fit.sqdzvghfreerqsaz
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-100 h-[26px] mb-[88px] md:mt-0 mt-6 w-[1%]"></div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex md:flex-1 flex-col items-end justify-start p-[5px] rounded-lg w-[32%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-2 w-[96%] md:w-full">
                      <div className="flex flex-row gap-[52px] items-start justify-start w-[95%] md:w-full">
                        <Text
                          className="mt-1 text-gray-900_02 text-lg"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Thumbnail
                        </Text>
                        <div className="flex flex-row font-inter gap-2 items-center justify-end w-auto">
                          <Button
                            className="border border-gray-200_01 border-solid cursor-pointer font-medium min-w-[65px] rounded-lg text-center text-xs"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            Upload
                          </Button>
                          <Button
                            className="border border-gray-200_01 border-solid flex h-8 items-center justify-center rounded-lg w-8"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_20pxtrash.svg"
                              alt="20pxtrash"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-end pr-[3px] py-[3px] rounded-lg w-full">
                        <Img
                          className="h-[65px] md:h-auto mt-[9px] object-cover rounded-lg w-[96%]"
                          src="images/img_image13_65x258.png"
                          alt="imageThirteen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-start justify-start max-w-[925px] pb-[72px] pl-[18px] sm:pr-5 pr-8 pt-6 rounded-lg w-full">
                  <div className="flex flex-col gap-10 items-start justify-start max-w-4xl w-full">
                    <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="mb-[3px] mt-1.5 text-gray-900_02 text-lg"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Payment
                      </Text>
                      <div className="flex flex-col items-center justify-end w-auto">
                        <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded-lg w-auto">
                          <div className="bg-red-400 h-1.5 rounded-[50%] w-1.5"></div>
                          <Text
                            className="text-[13px] text-blue_gray-700 w-auto"
                            size="txtMontserratRomanMedium13Bluegray700"
                          >
                            Awaits payment
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start max-w-4xl w-full">
                      <Text
                        className="bg-white-A700 justify-center pt-1 sm:px-5 px-[35px] rounded-lg text-blue_gray-300 text-center text-sm w-auto"
                        size="txtMontserratRomanRegular14Bluegray300"
                      >
                        No payments have been captured yet.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="sm:h-[334px] h-[339px] md:h-[443px] relative w-full">
                  <div className="absolute bg-white-A700 border border-gray-200_01 border-solid bottom-[0] flex flex-col gap-4 inset-x-[0] items-start justify-center max-w-[925px] mx-auto pb-8 pl-[19px] sm:pr-5 pr-8 pt-6 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-end pr-1 py-1">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Rating
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-200_01 border-solid flex flex-col font-inter h-10 md:h-auto items-center justify-start max-w-[887px] pb-6 rounded-lg w-full">
                      <div className="flex flex-col items-start justify-start max-w-[887px] rounded-lg w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                          <div className="bg-gray-50 flex flex-col items-start justify-start p-2 rounded-tl-lg rounded-tr-lg w-[90%] md:w-full">
                            <div className="flex flex-col items-center justify-center ml-2 md:ml-[0] w-auto">
                              <Button
                                className="!text-blue_gray-700 border border-gray-200_01 border-solid cursor-pointer font-medium min-w-[74px] text-[13px] text-center"
                                shape="round"
                                color="white_A700"
                                size="xs"
                                variant="fill"
                              >
                                41 rates
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-end justify-start pl-0.5 py-0.5 w-full">
                              <Img
                                className="h-5"
                                src="images/img_arrowdown_gray_600_03.svg"
                                alt="arrowdown"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[325px] sm:h-[334px] md:h-[443px] inset-[0] m-auto pb-5 pl-[19px] sm:pr-5 pr-8 pt-[27px] w-[925px] md:w-full">
                    <div className="absolute bg-white-A700 border border-gray-200_01 border-solid h-[182px] inset-x-[0] mx-auto rounded-lg top-[0] w-full"></div>
                    <div className="absolute bottom-[0] flex flex-col h-[302px] md:h-auto inset-x-[0] items-center justify-start max-w-[890px] mx-auto pb-8 sm:px-5 px-8 w-full">
                      <div className="h-[302px] md:h-[411px] relative w-full">
                        <Text
                          className="absolute left-[0] text-gray-900_02 text-lg top-[2%]"
                          size="txtMontserratRomanSemiBold18"
                        >
                          Availibity
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-[49px] w-[29%] md:w-full">
                              <div className="flex flex-row font-montserrat gap-4 items-center justify-start w-[71%] md:w-full">
                                <div className="border border-gray-200_01 border-solid flex flex-col h-10 items-center justify-start p-1 rounded-lg w-10">
                                  <Button
                                    className="flex h-8 items-center justify-center rounded w-8"
                                    color="gray_100_02"
                                    size="xs"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-6"
                                      src="images/img_calendarcalendardays.svg"
                                      alt="calendarcalenda"
                                    />
                                  </Button>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-900_02 text-sm w-auto"
                                    size="txtMontserratRomanRegular14Gray90002"
                                  >
                                    Date of availibilty
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="text-gray-600_03 text-sm"
                                size="txtInterRegular14"
                              >
                                <span className="text-gray-600_03 font-montserrat text-left font-normal">
                                  Available in{" "}
                                </span>
                                <span className="text-gray-900_02 font-montserrat text-left font-medium">
                                  23/23/23
                                </span>
                                <span className="text-gray-600_03 font-montserrat text-left font-normal">
                                  {" "}
                                  out of{" "}
                                </span>
                                <span className="text-gray-900_02 font-montserrat text-left font-medium">
                                  23/23/23
                                </span>
                                <span className="text-gray-600_03 font-montserrat text-left font-normal">
                                  {" "}
                                </span>
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-2 items-end justify-start w-3/5 md:w-full">
                              <Button
                                className="border border-gray-200_01 border-solid cursor-pointer font-medium min-w-[150px] rounded-lg text-[13px] text-center"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              >
                                Change availability
                              </Button>
                              <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
                                <div className="flex sm:flex-1 flex-col items-center justify-end w-[49%] sm:w-full">
                                  <Input
                                    name="group193"
                                    placeholder="28 Décember 2023"
                                    className="!placeholder:text-gray-600_02 !text-gray-600_02 leading-[normal] p-0 text-[10px] text-left w-full"
                                    wrapClassName="border-2 border-red-300 border-solid flex rounded-lg shadow-bs4 w-full"
                                    suffix={
                                      <Img
                                        className="h-[18px] ml-[35px] my-auto"
                                        src="images/img_calendar_calendar_gray_600_02.svg"
                                        alt="Calendar / Calendar"
                                      />
                                    }
                                    shape="round"
                                    size="lg"
                                  ></Input>
                                  <div className="h-[244px] md:h-[248px] mt-1 relative w-[95%]">
                                    <Img
                                      className="h-[244px] m-auto object-cover w-full"
                                      src="images/img_3c2310e07b86d16.png"
                                      alt="3c2310e07b86dSixteen"
                                    />
                                    <div className="absolute bg-red-300_30 bottom-[26%] h-[26px] inset-x-[0] mx-auto rounded-[12px] w-[11%]"></div>
                                  </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col items-center justify-end w-[49%] sm:w-full">
                                  <Input
                                    name="group194"
                                    placeholder="28 Décember 2023"
                                    className="!placeholder:text-gray-600_02 !text-gray-600_02 leading-[normal] p-0 text-[10px] text-left w-full"
                                    wrapClassName="border-2 border-red-300 border-solid flex rounded-lg shadow-bs4 w-full"
                                    suffix={
                                      <Img
                                        className="h-[18px] ml-[35px] my-auto"
                                        src="images/img_calendar_calendar_gray_600_02.svg"
                                        alt="Calendar / Calendar"
                                      />
                                    }
                                    shape="round"
                                    size="lg"
                                  ></Input>
                                  <div className="h-[244px] md:h-[248px] mt-1 relative w-[95%]">
                                    <Img
                                      className="h-[244px] m-auto object-cover w-full"
                                      src="images/img_3c2310e07b86d16.png"
                                      alt="3c2310e07b86dSixteen_One"
                                    />
                                    <div className="absolute bg-red-300_30 bottom-[26%] h-[26px] inset-x-[0] mx-auto rounded-[12px] w-[11%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="mt-[61px] text-base text-black-900"
          size="txtPoppinsRegular16"
        >
          Propulsé par
        </Text>
        <Img
          className="h-[21px] mt-[9px]"
          src="images/img_sanstitre11.svg"
          alt="sanstitreEleven"
        />
      </div>
    </>
  );
};

export default PreshomepageaviabiltyPage;
