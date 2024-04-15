import React from "react";

import { Button, Img, List, Text } from "components";
import ThreeStackcategory from "components/ThreeStackcategory";

const TwoPage = () => {
  return (
    <>
      <div className="bg-gray-900 border border-solid border-white-A700_0a flex flex-col font-plusjakartasans items-center justify-start mx-auto p-24 md:px-10 sm:px-5 shadow-bs w-full">
        <div className="flex flex-col items-start justify-start max-w-[848px] mx-auto w-full">
          <ThreeStackcategory
            className="border-b border-solid border-white-A700_14 flex flex-row sm:gap-10 items-end justify-between max-w-[848px] pb-16 w-full"
            categorytext="Warning"
          />
          <List
            className="flex flex-col gap-8 mt-24 w-[94%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_warningsquarewarning.svg"
                alt="warningsquarewa"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[120px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Square_Warning
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[152px] w-6"
                src="images/img_checkmark_white_a700_24x24.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[101px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Wavy_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[171px] w-6"
                src="images/img_profile.svg"
                alt="profile"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[110px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Wavy_Warning
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_warningcirclewarning.svg"
                alt="warningcirclewa"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[113px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Circle_Warning
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[159px] w-6"
                src="images/img_checkmark_24x24.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[122px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Octagon_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[150px] w-6"
                src="images/img_videocamera.svg"
                alt="videocamera"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[131px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Octagon_Warning
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_search_white_a700_24x24.svg"
                alt="search"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[86px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Stop_Sign
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[186px] w-6"
                src="images/img_warninginfo.svg"
                alt="warninginfo"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[47px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Info
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[225px] w-6"
                src="images/img_warningshieldwarning.svg"
                alt="warningshieldwa"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[115px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Shield_Warning
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_1.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[103px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Circle_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[169px] w-6"
                src="images/img_checkmark_2.svg"
                alt="checkmark_One"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[105px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Shield_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[167px] w-6"
                src="images/img_checkmark_3.svg"
                alt="checkmark_Two"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[111px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Square_Check
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_4.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[114px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Triangle_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[158px] w-6"
                src="images/img_videocamera_white_a700.svg"
                alt="videocamera"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[124px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Triangle_Warning
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[148px] w-6"
                src="images/img_warningcirclehelp.svg"
                alt="warningcirclehe"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[93px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Circle_Help
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_profile_white_a700.svg"
                alt="profile"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[90px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Wavy_Help
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[182px] w-6"
                src="images/img_warningsquarehelp.svg"
                alt="warningsquarehe"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[100px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Square_Help
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[172px] w-6"
                src="images/img_profile_white_a700_24x24.svg"
                alt="profile_One"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[111px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Octagon_Help
              </Button>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-8 w-[48%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_warningwarning.svg"
              alt="warningwarning"
            />
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[72px] ml-4 sm:ml-[0] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Warning
            </Button>
            <Img
              className="h-6 sm:ml-[0] ml-[200px] w-6"
              src="images/img_profile_24x24.svg"
              alt="profile"
            />
            <Button
              className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[52px] ml-4 sm:ml-[0] text-center text-xs"
              shape="round"
              color="white_A700_0a"
              size="xs"
              variant="fill"
            >
              Help
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoPage;
