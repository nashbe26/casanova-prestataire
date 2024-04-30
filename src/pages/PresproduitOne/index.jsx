import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PresproduitOnePage = () => {
  const navigate = useNavigate();

  const [itemvalue, setItemvalue] = React.useState("");

  return (
    <>
       <div className="px-[62px] w-[90%] bg-white-A700 border border-black-900_0f border-solid flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[17px] top-[0] w-full">
              <Button
                className="common-pointer border border-gray-200_01 border-solid flex h-8 items-center justify-center ml-[3px] rounded-lg w-8"
                onClick={() => navigate(-1)}
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-3"
                  src="images/img_close_gray_600_03.svg"
                  alt="close"
                />
              </Button>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border border-gray-200_01 border-solid cursor-pointer font-medium min-w-[115px] rounded-lg text-[13px] text-center"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Save changes
                </Button>
              </div>
            </div>
      <div className="bg-white-A700 flex flex-col items-end justify-start mx-auto pb-[62px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col font-montserrat items-center w-[90%] mx-auto w-full">
          <div className=" relative w-full">
            <div className="flex m-auto w-full">
              <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start p-9 sm:px-5 w-[24%]">
                <div className="flex flex-col items-center justify-start  mt-[67px] w-full">
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
                        <div className="bg-white-A700 flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full">
                          <Img
                            className="h-3.5 ml-1 w-3.5"
                            src="images/img_home_gray_600_03.svg"
                            alt="home"
                          />
                          <Text
                            className="mt-[3px] text-[13px] text-gray-600_03"
                            size="txtMontserratRomanMedium13Gray60003"
                          >
                            Homepage
                          </Text>
                        </div>
                        <div className="bg-red-300_2b flex flex-row gap-4 items-center justify-start px-2 py-1.5 rounded-lg w-56">
                          <Img
                            className="h-5 w-5"
                            src="images/img_20pxtag.svg"
                            alt="20pxtag"
                          />
                          <Text
                            className="text-[13px] text-gray-900_02 w-auto"
                            size="txtMontserratRomanMedium13Gray90002"
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
                          name="item"
                          placeholder="Settings"
                          value={itemvalue}
                          onChange={(e) => setItemvalue(e)}
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
                              onClick={() => setItemvalue("")}
                              style={{
                                visibility:
                                  itemvalue?.length <= 0 ? "hidden" : "visible",
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
              <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start ml-[-15px] my-auto p-[58px] md:px-10 sm:px-5 w-[78%] z-[1]">
                <div className="flex flex-col items-start justify-start mb-[43px] w-[84%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtMontserratRomanSemiBold24"
                  >
                    Create new product
                  </Text>
                  <div className="flex flex-col font-montserrat items-start justify-start mt-3 pr-1 py-1 w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-900_02 w-auto"
                        size="txtMontserratRomanSemiBold16Gray90002"
                      >
                        General information
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-4 text-gray-600_03 text-sm"
                    size="txtMontserratRomanRegular14Gray60003"
                  >
                    To start selling, all you need is a name and a price.
                  </Text>
                  <Text
                    className="mt-[35px] text-gray-600_03 text-xs"
                    size="txtInterSemiBold12"
                  >
                    <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                      Title
                    </span>
                    <span className="text-red-400 font-montserrat text-left font-semibold">
                      *
                    </span>
                  </Text>
                  <Input
                    name="input"
                    placeholder="Gateau"
                    className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                    wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                    shape="round"
                    color="gray_50"
                    size="lg"
                  ></Input>
                  <Text
                    className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
                    size="txtMontserratRomanRegular14Gray60003"
                  >
                    <>
                      Give your product a short and clear title. <br />
                      50-60 characters is the recommended length for search
                      engines.
                    </>
                  </Text>
                  <div className="flex flex-row font-montserrat sm:gap-10 items-center justify-between mt-6 w-[77%] md:w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Prix
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_16pxinfo.svg"
                        alt="16pxinfo"
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Produit sous description
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_16pxinfo.svg"
                        alt="16pxinfo_One"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-inter gap-6 items-center justify-between mt-2 w-full">
                    <Input
                      name="dtCounter"
                      placeholder="2000 DT"
                      className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                      wrapClassName="border border-gray-200_01 border-solid sm:flex-1 rounded-lg sm:w-full"
                      shape="round"
                      color="gray_50"
                      size="lg"
                    ></Input>
                    <Input
                      name="input_One"
                      placeholder="1K/ 7 piéce"
                      className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                      wrapClassName="border border-gray-200_01 border-solid sm:flex-1 rounded-lg sm:w-full"
                      shape="round"
                      color="gray_50"
                      size="lg"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[35px] text-gray-600_03 text-xs"
                    size="txtInterSemiBold12"
                  >
                    <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                      Description
                    </span>
                    <span className="text-red-400 font-montserrat text-left font-semibold">
                      *
                    </span>
                  </Text>
                  <Input
                    name="input_Two"
                    placeholder="Gateaux"
                    className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                    wrapClassName="border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full"
                    shape="round"
                    color="gray_50"
                    size="lg"
                  ></Input>
                  <Text
                    className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
                    size="txtMontserratRomanRegular14Gray60003"
                  >
                    <>
                      Give your product a short and clear description.
                      <br />
                      120-160 characters is the recommended length for search
                      engines.
                    </>
                  </Text>
                  <div className="flex flex-row font-inter sm:gap-10 items-center justify-between mt-[43px] w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-900_02 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Media
                      </Text>
                    </div>
                    <Button
                      className="flex h-8 items-center justify-center rounded-lg w-8"
                      size="xs"
                    >
                      <Img
                        className="h-5"
                        src="images/img_20pxminus.svg"
                        alt="20pxminus"
                      />
                    </Button>
                  </div>
                  <Text
                    className="mt-1 text-gray-600_03 text-sm"
                    size="txtMontserratRomanRegular14Gray60003"
                  >
                    Used to represent your product during checkout, social
                    sharing and more.
                  </Text>
                  <div className="border border-blue_gray-100_01 border-dashed flex flex-col font-inter gap-[5px] items-center justify-end mt-[25px] p-[19px] rounded-lg w-full">
                    <Text
                      className="text-center text-gray-600_03 text-sm"
                      size="txtInterRegular14"
                    >
                      <span className="text-gray-600_03 font-inter font-normal">
                        Drop your file here, or{" "}
                      </span>
                      <span className="text-red-300 font-inter font-medium">
                        click to browse
                      </span>
                    </Text>
                    <Text
                      className="text-center text-gray-600_03 text-sm"
                      size="txtInterRegular14"
                    >
                      1200 x 1600 (3:4) recommended
                    </Text>
                  </div>
                  <Text
                    className="mt-[60px] text-gray-600_03 text-sm"
                    size="txtMontserratRomanRegular14Gray60003"
                  >
                    You can have as many files as you want. We even support GIF
                    and video.
                  </Text>
                  <List
                    className="flex flex-col font-inter gap-6 items-start mt-[25px] w-auto"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                        <Button
                          className="flex h-8 items-center justify-center rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_20pxgrip.svg"
                            alt="20pxgrip"
                          />
                        </Button>
                        <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] px-2 w-16">
                          <Img
                            className="h-16 md:h-auto object-cover rounded-lg w-full"
                            src="images/img_rectangle1655.png"
                            alt="rectangle1655"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtInterRegular14Gray90002"
                          >
                            bathrobe-white01.jpg
                          </Text>
                          <Text
                            className="text-gray-600_03 text-sm"
                            size="txtInterRegular14"
                          >
                            163.38 KB
                          </Text>
                        </div>
                        <Button
                          className="flex h-8 items-center justify-center md:ml-[0] ml-[374px] rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_arrowright_gray_600_03.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                        <Button
                          className="flex h-8 items-center justify-center rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_20pxgrip.svg"
                            alt="20pxgrip"
                          />
                        </Button>
                        <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] px-2 w-16">
                          <Img
                            className="h-16 md:h-auto object-cover rounded-lg w-full"
                            src="images/img_rectangle1656.png"
                            alt="rectangle1656"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtInterRegular14Gray90002"
                          >
                            bathrobe-white01.jpg
                          </Text>
                          <Text
                            className="text-gray-600_03 text-sm"
                            size="txtInterRegular14"
                          >
                            163.38 KB
                          </Text>
                        </div>
                        <Button
                          className="flex h-8 items-center justify-center md:ml-[0] ml-[374px] rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_arrowright_gray_600_03.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                        <Button
                          className="flex h-8 items-center justify-center rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_20pxgrip.svg"
                            alt="20pxgrip"
                          />
                        </Button>
                        <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] py-3 w-16">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                            src="images/img_image10.png"
                            alt="imageTen"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtInterRegular14Gray90002"
                          >
                            bathrobe-white01.jpg
                          </Text>
                          <Text
                            className="text-gray-600_03 text-sm"
                            size="txtInterRegular14"
                          >
                            163.38 KB
                          </Text>
                        </div>
                        <Button
                          className="flex h-8 items-center justify-center md:ml-[0] ml-[374px] rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_arrowright_gray_600_03.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                        <Button
                          className="flex h-8 items-center justify-center rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_20pxgrip.svg"
                            alt="20pxgrip"
                          />
                        </Button>
                        <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] py-[7px] w-16">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                            src="images/img_image14_50x64.png"
                            alt="imageFourteen"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtInterRegular14Gray90002"
                          >
                            bathrobe-white01.jpg
                          </Text>
                          <Text
                            className="text-gray-600_03 text-sm"
                            size="txtInterRegular14"
                          >
                            163.38 KB
                          </Text>
                        </div>
                        <Button
                          className="flex h-8 items-center justify-center md:ml-[0] ml-[374px] rounded-lg w-8"
                          size="xs"
                        >
                          <Img
                            className="h-5"
                            src="images/img_arrowright_gray_600_03.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <Text
          className="mt-[47px] text-base text-black-900"
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

export default PresproduitOnePage;
