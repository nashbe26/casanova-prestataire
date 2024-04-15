import React, { useState, useRef } from "react";

import { Button, Img, Input, List, Text } from "components";
import { useCreateImage, useUpdate } from "../../utils/functions";
import { HiMiniLockClosed } from "react-icons/hi2";
import { FaCaretSquareRight } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { CloseSVG } from "../../assets/images";
import "./style.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CustomToast from "components/toast";

const PreshomepagePage = ({ userData }) => {
  const navigate = useNavigate(); 
  const [itemonevalue, setItemonevalue] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(userData?.user?.thumbnail || null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false); // State to track date picker visibility
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(), // Default start date (today)
      endDate: new Date(), // Default end date (today)
      key: "selection",
    },
  ]);


  const CreateIamge = useCreateImage();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const Ratings = [
    "aaa",
    "bbbb",
    "ccc",
  ];
  const handleBrowseClick = () => {
    
    
   
    

    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png"];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );

    await formData.append("userId", userData.user._id);
    await formData.append("type", "images");
    await formData.append("utility", "thumbnail");
    await formData.append("file", newFiles[0]);

    try {
      const response = await CreateIamge(formData);
      setImage(response.file.filename);
      toast.custom((t) => (
        <CustomToast data={t} message="Image Uploaded" title="Info" ></CustomToast>
      ), {
        duration: 3000,
      });
      
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const update = useUpdate()

  const onStoreChange =async () => {
      const data={
        storeStatus:!userData.user.storeStatus
      }
      const response = await update(userData.user._id,data)
      if(response.status==200){
        window.location.reload(); 
      }else{
        alert("error")
      }
  };
  
  const handleChangeAvailability = async () => {
    const data={
      availibity:{
        endDate:dateRange[0].endDate,
        startDate:dateRange[0].startDate
      }
    }
    const response = await update(userData.user._id,data)
    if(response.status==200){
    }else{
      alert("error")
    }

    setIsDatePickerVisible(!isDatePickerVisible);
  };

  
  return (
    <>
      <div className="flex m-auto w-full">
        <div className="absolute top-0 left-[20%] flex m-auto w-full justify-center">
          <div className="bg-white-A700   border-solid flex flex-col items-start justify-end my-auto p-7 sm:px-5 z-[1]">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-start justify-between  md:w-full">
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col pl-[5%] ml-[2%] mr-[2%] items-center justify-start p-3 rounded-lg">
                  <div className="flex flex-col gap-3 items-center justify-start mb-[22px] w-[98%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="mb-[3px] mt-1.5 text-gray-900_02 text-lg"
                        size="txtMontserratRomanSemiBold18"
                      >
                        {userData.user.businessName}
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-end w-auto">
                        <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded-lg w-auto">
                          <div
                            className={`bg-${
                              userData.user.storeStatus === true
                                ? "teal"
                                : "red"
                            }-400 h-1.5 rounded-[50%] w-1.5`}
                          ></div>
                          <Text
                            className="text-[13px] text-blue_gray-700 w-auto"
                            size="txtMontserratRomanMedium13Bluegray700"
                          >
                            {userData.user.storeStatus
                              ? "Live Store"
                              : "Closed Store"}
                          </Text>
                        </div>
                        <Button
                          className="border border-gray-200_01 border-solid flex h-8 items-center justify-center rounded-lg w-8"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                          onClick={onStoreChange}

                        >
                          {userData.user.storeStatus ? (
                            <HiMiniLockClosed />
                          ) : (
                            <FaCaretSquareRight />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="leading-[24.00px] text-gray-600_04 text-xs w-full"
                      size="txtMontserratRomanRegular12"
                    >
                      The unisex Classic Bathrobe is designed to elevate the
                      <br></br>
                      joy of feeling comfortable at home or when relaxing in
                      <br></br>
                      nature. The robes are designed in a traditional and unisex
                      fit.sqdzvghfreerqsaz
                    </Text>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>

              <div className="bg-white-A700 border border-gray-200_01 border-solid flex md:flex-1 flex-col  items-end justify-start ml-[2%] p-[5px] rounded-lg  md:w-full">
                <div className="flex flex-col items-start justify-start pl-[2%] ml-[2%] my-2 w-[100%] md:w-full">
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
                        onClick={handleBrowseClick}
                      >
                        Upload
                      </Button>
                      <div className="pr-[13%]">
                        <Button
                          className="border border-gray-200_01 pr-[2%] border-solid flex h-8 items-center justify-center rounded-lg w-8"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="../images/img_20pxtrash.svg"
                            alt="20pxtrash"
                          />
                        </Button>
                      </div>
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
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-end pr-[3px] py-[3px] rounded-lg w-full">
                    <Img
                      className="h-[65px] md:h-auto mt-[9px] object-cover rounded-lg w-[96%]"
                      src={
                        image
                          ? `${process.env.REACT_APP_API_BACK}/uploads/${image}`
                          : "../images/img_image13_65x258.png"
                      } // Use the uploaded image if available, otherwise fallback to the default image
                      alt="imageThirteen"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
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
            <br></br>
            <br></br>
            <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-start justify-start max-w-[925px] pb-5 pl-[19px] sm:pr-5 pr-8 pt-[27px] rounded-lg w-full">
              <div className="flex flex-col h-[135px] md:h-auto items-start justify-start max-w-[890px] pb-8 sm:px-5 px-8 w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <div className="font-montserrat md:h-[187px] h-[89px] relative w-full">
                    <Text
                      className="absolute left-[0] text-gray-900_02 text-lg top-[6%]"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Availibity
                    </Text>
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] pt-[4%] pl-[60%] items-center justify-center m-auto w-full">
                      <div className="border border-gray-200_01 border-solid flex flex-col h-10 items-center justify-start md:mt-0 mt-[20px] p-1 rounded-lg w-10">
                        <Button
                          className="flex h-8 items-center justify-center rounded w-8"
                          color="gray_100_02"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="../images/img_calendarcalendardays.svg"
                            alt="calendarcalenda"
                          />
                        </Button>
                      </div>
                      <div className="flex mt-[11%] flex-col items-start justify-start ml-4 md:ml-[0] w-auto">
                        <Text
                          className="text-gray-900_02 text-sm w-auto"
                          size="txtMontserratRomanRegular14Gray90002"
                        >
                          Date of availibilty
                        </Text>
                      </div>
                      <div className="position-absolute pr-[150%]">
                        <Button
                          className="border border-gray-200_01 border-solid cursor-pointer font-medium mb-[57px] min-w-[150px] md:ml-[0] ml-[400px] rounded-lg text-[13px] text-center"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                          onClick={handleChangeAvailability} 
                        >
                          Change availability
                        </Button>
                      </div>
                      
                    </div>
                  </div>
                  {isDatePickerVisible && (
              <div className="position-absolute top-20 right-20 z-[1]">
                <DateRangePicker
          ranges={dateRange}
          onChange={(ranges) => setDateRange([ranges.selection])}
        />
              </div>
            )}
                  <Text
        className="text-gray-600_03 text-sm"
        size="txtInterRegular14"
      >
        <span className="text-gray-600_03 font-montserrat text-left font-normal">
          Available from{" "}
        </span>
        <span className="text-gray-900_02 font-montserrat text-left font-medium">
          {dateRange[0].startDate.toLocaleDateString()}
        </span>
        <span className="text-gray-600_03 font-montserrat text-left font-normal">
          {" "}
          to{" "}
        </span>
        <span className="text-gray-900_02 font-montserrat text-left font-medium">
          {dateRange[0].endDate.toLocaleDateString()}
        </span>
        <span className="text-gray-600_03 font-montserrat text-left font-normal">
          {" "}
        </span>
      </Text>
                </div>
              </div>
            </div>
            <br></br>
            <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-4 items-start justify-start max-w-[925px] pb-8 pl-[19px] sm:pr-5 pr-8 pt-6 rounded-lg w-full">
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
                          onClick={toggleDropdown}
                        >
                          {Ratings.length} rates
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-end justify-start pl-0.5 py-0.5 w-full">
                        <Img
                          className="h-5 cursor-pointer"
                          src="../images/img_arrowdown_gray_600_03.svg"
                          alt="arrowdown"
                          onClick={toggleDropdown}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dropdown list */}
              {isDropdownOpen && (
                <div className="">
                  {/* Dropdown items */}
                  <div className="p-2">
                    <List>
                      {Ratings.map((rating, index) => (
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
                                className="h-16 md:h-auto object-cover rounded w-full"
                                src="../images/img_rectangle1655.png"
                                alt={"image"}
                              />
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                              <Text
                                className="text-gray-900_02 text-sm"
                                size="txtInterRegular14Gray90002"
                              >
                                {rating}
                              </Text>
                            </div>
                            <Button
                              className="flex h-8 items-center justify-center md:ml-[0] ml-[150px] rounded-lg w-8"
                              size="xs"
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreshomepagePage;