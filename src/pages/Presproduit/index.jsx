import React, { useEffect, useState } from "react";
import { Text, Img, Line, List, Button } from "components";
import { useDelete, useGet } from "utils/functions";
import { useGetUser, useGetById } from "../../utils/functions";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";

const PresproduitPage = ({ onItemClick }) => {
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
        const data = await get("Product", { owner: response.user._id });
        setProducts(data);
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
          <div className="absolute top-[-25px] left-[20%] flex m-auto w-full justify-center">
            <div className="bg-white-A700    items-start justify-end my-auto p-7 sm:px-5 z-[1]">
              <div className="bg-white-A700  flex flex-col font-inter items-center justify-end ml-[-12%] my-auto pt-[13px] h-[120%] w-[110%] z-[1]">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                    <Text
                      className="text-gray-900_02 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Product list
                    </Text>
                    <div className="bg-gray-50 flex flex-row gap-7 items-start justify-center md:ml-[0] ml-[468px] p-[3px] rounded-lg w-[18%] md:w-full">
                      <div className="flex flex-col items-center justify-start ml-[23px] mt-[3px] w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-[13px] text-gray-900_02 w-auto"
                            size="txtInterMedium13"
                          >
                            Catégorie
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-8 items-center justify-start mb-0.5 mr-1 p-1 rounded-lg w-8">
                        <Button
                          className="flex h-6 items-center justify-center rounded w-6"
                          color="gray_100_02"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="../images/img_arrowdown_gray_600_03_24x24.svg"
                            alt="arrowdown"
                          />
                        </Button>
                      </div>
                    </div>
                    <div
                      onClick={() => handleItemClick("PresCreateProduitPage")}
                      className="bg-gray-50 flex flex-col items-start justify-start md:ml-[0] ml-[7px] pl-1 pr-4 py-1 rounded-lg w-auto"
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
                            Add Product
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-end p-2.5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] w-[96%] md:w-full">
                      <Text
                        className="text-[13px] text-gray-600_03"
                        size="txtMontserratRomanMedium13Gray60003"
                      >
                        Item
                      </Text>

                      <Text
                        className="md:ml-[0] ml-[129px] text-gray-600_03 text-xs"
                        size="txtInterSemiBold12"
                      >
                        Description
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[219px] text-[13px] text-gray-600_03"
                        size="txtInterMedium13Gray60003"
                      >
                        Prix
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[117px] text-[13px] text-gray-600_03"
                        size="txtMontserratRomanMedium13Gray60003"
                      >
                        Supprimé
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[9.5px] items-center w-[94%]"
                      orientation="vertical"
                    >
                      {products.map((product, index) => (
                        <>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Img
                              className="md:flex-1 h-10 sm:h-auto object-cover rounded w-[4%] md:w-full"
                              src={
                                process.env.REACT_APP_API_BACK + "/uploads/" + product.image[0]
                              }                              alt="rectangle1665"
                            />
                            <div className="ml-4 md:ml-[0] text-[13px] text-gray-900_02">
                              {product.name}
                            </div>

                            <div className="md:ml-[0] ml-[116px] text-[13px] text-gray-900_02 text-right">
                              {product.description}
                            </div>
                            <div className="md:ml-[0] ml-[115px]"></div>

                            <div className="md:ml-[0] ml-[124px] text-[13px] text-gray-900_02 text-right">
                              {product.price}
                            </div>
                            <Img
                            onClick={(e)=>{Delete("Product",product._id) ;window.location.reload();}}
                              className="h-6 md:ml-[0] ml-[136px] w-6"
                              src="../images/img_thumbsup_red_300_24x24.svg"
                              alt="thumbsup"
                            />
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            {/* Empty div for spacing */}
                            <div className="md:w-[4%]"></div>
                            <div className="md:ml-[0] ml-[93px] text-[13px] text-gray-900_02">
                              {product.trazsh}
                            </div>

                            {/* Empty div for spacing */}
                            <div className="md:ml-[0] ml-[124px]"></div>
                            {/* Empty div for spacing */}
                            <div className="md:ml-[0] ml-[136px]"></div>
                          </div>
                          <Line className="self-center h-px bg-gray-200_01 w-full" />
                        </>
                      ))}
                    </List>
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

export default PresproduitPage;
