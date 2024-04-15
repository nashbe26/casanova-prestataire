// GeneralInformation.js
import React,{useRef,useState} from "react";
import { Button, Img,  List, Text } from "components";
import { useCreateImage } from "../../utils/functions";

const Media = ({ userData, filesList, setFilesList}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);  const CreateIamge = useCreateImage();

  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/mpeg",
    ];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );
    formData.append(`file`, newFiles[0]);

    await formData.append("userId", userData.user._id);
    await formData.append("type", "ProductImage");

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    try {
      const response = await CreateIamge(formData);
      if (response && response.file && response.file.filename) {
        setFilesList((prevFilesList) => [
          ...prevFilesList,
          response.file.filename,
        ]);
      }
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file, index) => index !== indexToRemove)
    );
  };
  return (
    <>
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
                  src="../images/img_20pxminus.svg"
                  alt="20pxminus"
                />
              </Button>
            </div>
            <Text
              className="mt-1 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
              Used to represent your product during checkout, social sharing and
              more.
            </Text>
            <div className="border border-blue_gray-100_01 border-dashed flex flex-col font-inter gap-[5px] items-center justify-end mt-[25px] p-[19px] rounded-lg w-full">
              <Text
                className="text-center text-gray-600_03 text-sm"
                size="txtInterRegular14"
              >
                <span className="text-gray-600_03 font-inter font-normal">
                  Drop your file here, or{" "}
                </span>
                <span
                  className="text-red-300 font-inter font-medium cursor-pointer"
                  onClick={handleBrowseClick}
                >
                  click to browse
                </span>
              </Text>
              <input
                type="file"
                ref={fileInputRef}
                name="input_One"
                className="hidden"
                size="lg"
                onChange={(e) => {
                  handleFileChange(e);
                }}
              ></input>

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
              You can have as many files as you want. We even support GIF and
              video.
            </Text>
            <List
              className="flex flex-col font-inter gap-6 items-start mt-[25px] w-auto"
              orientation="vertical"
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                    <Button
                      className="flex h-8 items-center justify-center rounded-lg w-8"
                      size="xs"
                    >
                      <Img
                        className="h-5"
                        src="../images/img_20pxgrip.svg"
                        alt="20pxgrip"
                      />
                    </Button>
                    <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] px-2 w-16">
                      <Img
                        className="h-16 md:h-auto object-cover rounded-lg w-full"
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                      <Text
                        className="text-gray-900_02 text-sm"
                        size="txtInterRegular14Gray90002"
                      >
                        {file.name}
                      </Text>
                      <Text
                        className="text-gray-600_03 text-sm"
                        size="txtInterRegular14"
                      >
                        {file.size} bytes
                      </Text>
                    </div>
                    <Button
                      className="flex h-8 items-center justify-center md:ml-[0] ml-[150px] rounded-lg w-8"
                      size="xs"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <Img
                        className="h-5"
                        src="../images/img_arrowright_gray_600_03.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </List>
            <br></br>
    </>
  );
};

export default Media;
