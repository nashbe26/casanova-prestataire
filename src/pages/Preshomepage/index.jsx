import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";
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
import { useGetUser, useGetById } from "../../utils/functions";
import { useGet } from "utils/functions";
import md5 from "md5";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { ReactTable } from "components";

const PreshomepagePage = ({ userData }) => {
  const [user] = useRecoilState(User);
  const [orders, setOrders] = useState([]);

  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();

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

  const onStoreChange = async () => {
    const data = {
      storeStatus: !userData.user.storeStatus
    }
    const response = await update(userData.user._id, data)
    if (response.status == 200) {
      window.location.reload();
    } else {
      alert("error")
    }
  };

  const handleChangeAvailability = async () => {
    const data = {
      availibity: {
        endDate: dateRange[0].endDate,
        startDate: dateRange[0].startDate
      }
    }
    const response = await update(userData.user._id, data)
    if (response.status == 200) {
    } else {
      alert("error")
    }

    setIsDatePickerVisible(!isDatePickerVisible);
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GetUser(user);
        const data = await get("Order", { owner: response.user._id });

        // Limit the data to three orders
        const limitedOrders = data.slice(0, 3);

        const ordersWithCustomerNames = await Promise.all(
          limitedOrders.map(async (order) => {
            const customer = await fetchCustomerName(order.client);
            return { ...order, customerName: customer };
          })
        );

        setOrders(ordersWithCustomerNames);
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchOrders();
  }, []);


  const fetchCustomerName = async (customerId) => {
    try {
      const data = await getById("User", { _id: customerId });
      return data;
    } catch (error) {
      console.error("Error fetching customer name:", error);
      return "Error";
    }
  };

  const shortenOrderId = (orderId) => {
    const hashedId = md5(orderId);
    return hashedId.substring(0, 8);
  };

  const table2Columns = React.useMemo(() => {
    const orders = createColumnHelper();
    return [
      orders.accessor("_id", {
        cell: (info) => (
          <Text
            className="pb-4 pt-8 text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            #{shortenOrderId(info?.getValue())}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[132px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Order
          </Text>
        ),
      }),
      orders.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[33px] text-gray-600_03 text-xs"
            size="txtInterRegular12"
          >
            {format(new Date(info?.getValue()), "MMM dd, yyyy HH:mm a")}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[232px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Date / Time
          </Text>
        ),
      }),
      orders.accessor("customerName", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()?.phone?.primary}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Customer
          </Text>
        ),
      }),
      orders.accessor("livraision", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            livraision
          </Text>
        ),
      }),

      orders.accessor("totalPrice", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[33px] text-[13px] text-gray-900_02"
            size="txtInterRegular13"
          >
            {info?.getValue()}$
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[182px] text-[13px] text-gray-600_03"
            size="txtInterMedium13Gray60003"
          >
            Total Price
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="flex m-auto w-full">
        <div className="flex m-auto w-full justify-center w-[100%]">
          <div className="bg-white-A700  w-[100%] border-solid flex flex-col items-start justify-end my-auto p-2 py-5 z-[1]">
            <div className="flex  flex-row  w-[100%] items-center justify-between w-full mb-6">
              <div className="flex md:flex-1 md:flex-col flex-row gap-[17px] h-[220px] w-[30%] items-start justify-between  md:w-full">
                <div className="bg-white-A700 border border-gray-200_01 border-solid h-[220px] w-[100%] flex flex-col pl-[5%] mr-[2%] items-center justify-start p-3 rounded-lg">
                  <div className="flex flex-col gap-3 items-center justify-start w-[100%] md:w-full">
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
                            className={`bg-${userData.user.storeStatus === true
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
                      className="leading-[24.00px] text-gray-600_04 text-xs w-full h-[100px] "
                      size="txtMontserratRomanRegular12"
                    >
                      {userData?.user?.description}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-200_01  w-[65%] h-[220px] border-solid flex md:flex-1 flex-col  items-end justify-between p-[5px] rounded-lg  md:w-full">
                <div className="flex flex-col items-start justify-start h-full pl-[2%] my-2 w-[100%] md:w-full">
                  <div className="flex flex-row gap-[52px] items-start h-full justify-start w-[95%] md:w-full">
                    <Text
                      className="mt-1 text-gray-900_02 text-lg"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Thumbnail
                    </Text>
                    <div className="flex flex-row font-inter gap-2 items-center justify-end w-auto h-full">
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
                  <div className="bg-white-A700 flex flex-col items-start justify-end pr-[3px] py-[3px] rounded-lg w-full  h-[160px]">
                    <Img
                      className="h-[100%] object-cover rounded-lg w-[100%] h-full"
                      src={
                        image
                          ? `${process.env.REACT_APP_API_BACK_IMG}/uploads/${image}`
                          : "../images/img_image13_65x258.png"
                      } // Use the uploaded image if available, otherwise fallback to the default image
                      alt="imageThirteen"
                    />
                  </div>
                </div>
              </div>



            </div>
            <div className="bg-white-A700  border border-gray-200_01 border-solid flex flex-col items-start justify-start w-[100%] pb-[72px] pl-[18px] sm:pr-5 pr-8 pt-6 rounded-lg w-full">
              <div className="flex flex-col gap-10 items-start justify-start  w-full">
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
                        Paiement en attente
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start  w-full">
                  {orders.length === 0 ? (
                    <Text
                      className="bg-white-A700 justify-center pt-1 sm:px-5 px-[35px] rounded-lg text-blue_gray-300 text-center text-sm w-auto"
                      size="txtMontserratRomanRegular14Bluegray300"
                    >
                      Aucun paiement n'a encore été effectué.
                    </Text>
                  ) : (
                    <ReactTable
                      columns={table2Columns}
                      data={orders}
                      rowClass=""
                      headerClass=""
                    />
                  )}
                </div>

              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};
export default PreshomepagePage;
