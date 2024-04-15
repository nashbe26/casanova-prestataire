import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, ReactTable, Text } from "components";
import ThreeStackcategory from "components/ThreeStackcategory";

const FourPage = () => {
  const tableData = React.useRef([
    {
      rowcompass: "House_03",
      rownavigationglobe: "images/img_home.svg",
      rowglobe: "House_Remove",
      rowsearch: "images/img_home_white_a700.svg",
      rowmappin: "House_Add",
    },
    {
      rowcompass: "House_01",
      rownavigationglobe: "images/img_user_24x24.svg",
      rowglobe: "House_02",
      rowsearch: "images/img_home_white_a700.svg",
      rowmappin: "House_Close",
    },
    {
      rowcompass: "House_Check",
      rownavigationglobe: "images/img_user_1.svg",
      rowglobe: "Building_01",
      rowsearch: "images/img_user_2.svg",
      rowmappin: "Building_02",
    },
    {
      rowcompass: "Building_03",
      rownavigationglobe: "images/img_user_3.svg",
      rowglobe: "Flag",
      rowsearch: "images/img_save.svg",
      rowmappin: "Navigation",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowclock", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start pr-4 py-4 sm:w-full">
            <CheckBox
              className="mt-4"
              inputClassName="mr-[5px]"
              name="home"
              id="home"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[40px] pr-4 sm:w-full">
            <CheckBox
              className=""
              inputClassName="mr-[5px]"
              name="clock"
              id="clock"
            ></CheckBox>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowcompass", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start pr-4 py-4">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[85px] mt-4 text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[272px] md:pr-10 pr-48 sm:pr-5">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[80px] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Compass
            </Button>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rownavigationglobe", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-4 py-4">
            <Img
              className="h-6 mt-4 w-6"
              alt="home_One"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[40px] pr-4">
            <Img
              className="h-6 w-6"
              src="images/img_navigationglobe.svg"
              alt="navigationglobe"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowglobe", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-4 py-4">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[116px] mr-[140px] mt-4 text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[272px] md:pr-10 sm:pr-5 pr-[212px]">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[60px] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Globe
            </Button>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowsearch", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-4 py-4">
            <Img
              className="h-6 mt-4 w-6"
              alt="home_Two"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[40px] pr-4">
            <Img
              className="h-6 w-6"
              src="images/img_search_white_a700.svg"
              alt="search"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowmappin", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-2.5 py-2.5">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium mb-1.5 min-w-[93px] mt-[22px] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[103px] sm:pr-5 pr-7">
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[75px] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Map_Pin
            </Button>
          </div>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-900 border border-solid border-white-A700_0a flex flex-col font-plusjakartasans items-center justify-start mx-auto p-24 md:px-10 sm:px-5 shadow-bs w-full">
        <div className="flex flex-col items-start justify-start max-w-[848px] mx-auto w-full">
          <ThreeStackcategory
            className="border-b border-solid border-white-A700_14 flex flex-row sm:gap-10 items-end justify-between max-w-[848px] pb-16 w-full"
            categorytext="Navigation"
          />
          <div className="overflow-auto mt-24 w-[91%]">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-8 w-[85%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_navigationbuilding04.svg"
              alt="navigationbuild"
            />
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[95px] ml-4 md:ml-[0] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Building_04
            </Button>
            <Img
              className="h-6 md:ml-[0] ml-[177px] w-6"
              src="images/img_car.svg"
              alt="car"
            />
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[80px] ml-4 md:ml-[0] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Car_Auto
            </Button>
            <Img
              className="h-6 ml-48 md:ml-[0] w-6"
              src="images/img_thumbsup_white_a700.svg"
              alt="thumbsup"
            />
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[50px] ml-4 md:ml-[0] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Map
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourPage;
