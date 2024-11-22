import React, { useState, useEffect } from "react";
import PrescreatproduitPage from "pages/Prescreatproduit";
import { Button, Img, Text, Sidebar } from "components";
import PresorderPage from "pages/Presorder";
import PresMediaPage from "pages/PresMedia";
import PresSettings from "pages/PresSettings";
import { useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import PreshomepagePage from "pages/Preshomepage";
import PresbalancePage from "pages/Presbalance";
import PresproduitPage from "pages/Presproduit";
import { useNavigate } from "react-router-dom";
import PrescreatPackPage from "pages/PrescreatePack";
import PrespackPage from "pages/PresPack";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Homepage");
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [user] = useRecoilState(User);
  const [userData, setUser] = useState();
  const GetUser = useGetUser();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await GetUser(user);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchUser();
  }, []);

  // Render the selected component based on the selectedItem state
  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "PresProduitPage":
        return <PresproduitPage onItemClick={handleItemClick} />;
      case "PresCreateProduitPage":
        return <PrescreatproduitPage onItemClick={handleItemClick} userData={userData} />;
      case "presPack":
        return <PrespackPage onItemClick={handleItemClick} userData={userData} />;
      case "presCreatePack":
        return <PrescreatPackPage onItemClick={handleItemClick} userData={userData} />;
      case "PresorderPage":
        return <PresorderPage />;
      case "PresMediaPage":
        return <PresMediaPage />;
      case "Homepage":
        return <PreshomepagePage userData={userData} />;
      case "Balence":
        return <PresbalancePage userData={userData} />;

      case "Settings":
        return userData ? <PresSettings userData={userData} /> : <></>;
      default:
        return null;
    }
  };
  if (userData) {
    return (
      <>
        <div
          onClick={(e) => {
            navigate("/category");
          }}
          className="px-[62px] w-[90%] bg-white-A700 border border-black-900_0f border-solid flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[17px] top-[0] w-full"
        >
          <Button
            className="common-pointer border border-gray-200_01 border-solid flex h-8 items-center justify-center ml-[3px] rounded-lg w-8"
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
          <div className="flex flex-col items-start justify-start w-auto"></div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start mx-auto pb-[62px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col font-montserrat items-center w-[90%] mx-auto w-full">
            <div className=" relative w-full">
              <div className="flex m-auto w-full justify-between">
                <Sidebar userData={userData} onItemClick={handleItemClick} />
                <div className="bg-white-A700  flex flex-col items-center justify-start ml-[-1px] mt-[0%] my-auto  w-[100%] z-[1] w-[73%]">
                  {renderSelectedComponent()}
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
  } else {
    return <></>;
  }
};
export default Dashboard;
