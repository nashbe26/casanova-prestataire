import React from "react";

import { Button, Img, List, Text } from "components";
import ThreeStackcategory from "components/ThreeStackcategory";

const ThreePage = () => {
  return (
    <>
      <div className="bg-gray-900 border border-solid border-white-A700_0a flex flex-col font-plusjakartasans items-center justify-start mx-auto p-[95px] md:px-10 sm:px-5 shadow-bs w-full">
        <div className="flex flex-col md:gap-10 gap-24 items-start justify-start max-w-[848px] mx-auto w-full">
          <ThreeStackcategory className="h-[102px] pb-16 relative w-[848px] md:w-full" />
          <List className="flex flex-col gap-8 w-[95%]" orientation="vertical">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_filecloud.svg"
                alt="filecloud"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[60px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[212px] w-6"
                src="images/img_television.svg"
                alt="television"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[87px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Off
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[185px] w-6"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[105px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Check
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_close_white_a700.svg"
                alt="close"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[101px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Close
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[171px] w-6"
                src="images/img_fileclouddownload.svg"
                alt="fileclouddownlo"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[126px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Download
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[146px] w-6"
                src="images/img_fileclouddownload.svg"
                alt="filecloudupload"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[109px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Upload
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[93%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_filecloudremove.svg"
                alt="filecloudremove"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[114px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Remove
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[158px] w-6"
                src="images/img_filecloudadd.svg"
                alt="filecloudadd"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[91px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Cloud_Add
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[181px] w-6"
                src="images/img_file.svg"
                alt="file"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[84px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Blank
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_file_white_a700.svg"
                alt="file"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[90px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Check
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[182px] w-6"
                src="images/img_filefileclose.svg"
                alt="filefileclose"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[86px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Close
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[186px] w-6"
                src="images/img_filefiledownload.svg"
                alt="filefiledownloa"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[111px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Download
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[92%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_file_white_a700_24x24.svg"
                alt="file"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[94px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Upload
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[178px] w-6"
                src="images/img_file_24x24.svg"
                alt="file_One"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[99px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Remove
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[173px] w-6"
                src="images/img_filefileclose.svg"
                alt="filefileadd"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[76px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Add
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
              <Img className="h-6 w-6" src="images/img_file_1.svg" alt="file" />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[84px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Code
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[188px] w-6"
                src="images/img_file_2.svg"
                alt="file_One"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[113px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Document
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[159px] w-6"
                src="images/img_file_3.svg"
                alt="file_Two"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[92px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Search
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[93%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_forward.svg"
                alt="forward"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[75px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                File_Edit
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[197px] w-6"
                src="images/img_filefiles.svg"
                alt="filefiles"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[51px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Files
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[221px] w-6"
                src="images/img_edit.svg"
                alt="edit"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[83px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Note_Edit
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[90%] md:w-full">
              <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[101px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Note_Search
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[171px] w-6"
                src="images/img_filenotebook.svg"
                alt="filenotebook"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[83px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Notebook
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[189px] w-6"
                src="images/img_upload.svg"
                alt="upload"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[53px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Note
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_folder.svg"
                alt="folder"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[62px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[210px] w-6"
                src="images/img_filefolderopen.svg"
                alt="filefolderopen"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[102px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Open
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[170px] w-6"
                src="images/img_checkmark_white_a700.svg"
                alt="checkmark"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[107px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Check
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_close_white_a700_24x24.svg"
                alt="close"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[103px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Close
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[169px] w-6"
                src="images/img_lightbulb.svg"
                alt="lightbulb"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[128px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Download
              </Button>
              <Img
                className="h-6 ml-36 md:ml-[0] w-6"
                src="images/img_lightbulb.svg"
                alt="lightbulb_One"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[111px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Upload
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_folder_white_a700.svg"
                alt="folder"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[116px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Remove
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[156px] w-6"
                src="images/img_close_white_a700_24x24.svg"
                alt="close"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[93px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Add
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[179px] w-6"
                src="images/img_user_white_a700.svg"
                alt="user"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[102px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Code
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
              <Img className="h-6 w-6" src="images/img_file_4.svg" alt="file" />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[130px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Document
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[142px] w-6"
                src="images/img_user_white_a700_24x24.svg"
                alt="user"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[109px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Search
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[163px] w-6"
                src="images/img_television_white_a700.svg"
                alt="television"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[92px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folder_Edit
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_trophy.svg"
                alt="trophy"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[68px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Folders
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[204px] w-6"
                src="images/img_filearchive.svg"
                alt="filearchive"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[67px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Archive
              </Button>
              <Img
                className="h-6 md:ml-[0] ml-[205px] w-6"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <Button
                className="border border-solid border-white-A700_0a cursor-pointer font-medium min-w-[141px] ml-4 md:ml-[0] text-center text-xs"
                shape="round"
                color="white_A700_0a"
                size="xs"
                variant="fill"
              >
                Download_Package
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ThreePage;
