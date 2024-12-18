import React, { useEffect, useState } from "react";
import { Text, Img, Line, List, Button } from "components";
import { useDelete, useGet } from "utils/functions";
import { useGetUser, useGetById } from "../../utils/functions";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";
import NavBar from "components/NavBar";
import customAxios from "../../axios/custom";

const PrespackPage = ({ onItemClick }) => {

  const get = useGet();
  const GetUser = useGetUser();
  const Delete = useDelete()
  const [itemvalue, setItemvalue] = React.useState("");
  const [user] = useRecoilState(User);
  const [products, setProducts] = useState([]);
  const handleItemClick = (item) => {
    setItemvalue(item);
    onItemClick(item);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await GetUser(user);
        const data = await customAxios.get("/pack");
        console.log(data);
        
        setProducts(data.data.gigs);
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchProducts();
  }, []);
  
  if (products) {
    return (
      <>
        <div className="flex m-auto w-full">
          <div className="flex m-auto w-full justify-center">
            <div className="bg-white-A700 w-[100%]   items-start justify-end my-auto p-2 py-5 z-[1]">
              <div className="bg-white-A700  flex flex-col font-inter items-center justify-end  pt-[13px] h-[120%] w-[100%] z-[1]">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[100%] md:w-full">
                    <Text
                      className="text-gray-900_02 text-xl w-[50%]"
                      size="txtInterSemiBold20"
                    >
                      Liste des packs
                    </Text>
                    <div className="w-[50%] flex justify-end gap-[5px]">

                   
                      <div
                        onClick={() => handleItemClick("presCreatePack")}
                        className="bg-gray-50 flex flex-col items-start justify-start md:ml-[0] ml-[7px] pl-1 pr-4 py-1 rounded-lg w-auto w-[35%]"
                      >
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-8 items-center justify-start p-1 rounded-lg w-8">
                            <div className="bg-gray-100_02 flex flex-col h-6 items-center justify-start rounded w-6">
                              <Img
                                className="h-6 rounded w-6"
                                src="../images/img_editaddplus.svg"
                                alt="editaddplus"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[13px] text-gray-900_02 w-auto"
                              size="txtInterMedium13"
                            >
                              Ajouter un pack
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-end p-2.5 w-full">
                    <table border={""}>
                      <thead>
                        <tr style={{height:"50px"}}>
                          <th className="w-[10%] text-[13px] text-left text-gray-600_03">Item</th>
                          <th className=" w-[20%] text-gray-600_03 text-xs">Titre</th>
                          <th className=" w-[20%] text-gray-600_03 text-xs">Description</th>
                          <th className="w-[20%] text-[13px] text-gray-600_03">NB service</th>
                          <th className=" w-[10%] text-[13px] text-gray-600_03">Supprimé</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <React.Fragment key={index}>
                            <tr style={{ borderBottom: "1px solid black",height:"50px" }}>
                              <td  className="text-left w-[20%] text-[13px] text-gray-900_02">
                                <img
                                  className="w-[100%] h-[55px] sm:h-auto object-contain md:object-contain rounded text-left"
                                  src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + product.images[0]}
                                  alt="rectangle1665"
                                />
                              </td>
                              <td className="text-center w-[20%] text-[13px] text-gray-900_02  md:text-[18px]">{product.title}</td>
                              <td className="text-center w-[20%] text-[13px] text-gray-900_02">{product.description}</td>
                              <td className="text-center w-[20%]  text-[13px] text-gray-900_02">{product.packs?.length || 0}</td>
                              <td>
                                <img
                                  onClick={(e) => {
                                    Delete("Product", product._id);
                                    window.location.reload();
                                  }}
                                  className="h-6 text-center w-[20%] w-6 mx-auto"
                                  src="../images/img_thumbsup_red_300_24x24.svg"
                                  alt="thumbsup"
                                />
                              </td>
                            </tr>

                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <>Loading...</>;
  }
};

export default PrespackPage;
