import React, { useEffect, useState } from "react";
import { Button, Img, Line, Text } from "components";
import { useGetById } from "utils/functions";
import { useParams, useNavigate } from "react-router-dom";
import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(Cart);

  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();
  const getById = useGetById();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getById("Product", id);
        console.log(response);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const addToCart = (type) => {
    const productWithCount = { ...product, count,type };
    if (!cart) {
      setCart([productWithCount]);
    } else {

      setCart([...cart, productWithCount]);
    }
    navigate(`/cart/`);
  };
  if (product) {
    return (
<div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-start mt-[46px] w-full">
   {product.image.length > 1 ? (
  <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[13%] md:w-full">
    {product.image.slice(1).map((image, index) => (
      <div key={index} className="h-[168px] relative w-full">
        <Img
          className="h-[167px] object-cover rounded-[20px] w-full"
          src={
            process.env.REACT_APP_API_BACK + "/uploads/" + image
          }
          alt={`image_${index}`}
        />
      </div>
    ))}
  </div>
) : (
  <></>
)}



        <div className="h-[530px] ml-3.5 md:ml-[0] relative w-[36%] md:w-full">
          <Img
            className="h-[530px] m-auto object-cover rounded-[20px] w-full"
            src="../images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute h-[530px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[530px] m-auto object-cover rounded-[14px] w-full"
              src={
                process.env.REACT_APP_API_BACK + "/uploads/" + product.image[0]
              }
              alt="imageEleven"
            />
            <Button
              className="absolute cursor-pointer font-medium h-[38px] leading-[normal] right-[6%] rounded-[19px] text-[15px] text-center top-[6%] w-[82px]"
              color="red_300"
              size="sm"
              variant="fill"
            >
              -40%
            </Button>
          </div>
        </div>
        <div  className="flex md:flex-1 flex-col items-start justify-start ml-10 md:ml-[0] w-[48%] md:w-full">
        
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtCormorantBold40Black900"
          >
            {product.title}
          </Text>
          <div onClick={(e)=>navigate(`/presphoto/${product.owner._id}`)} className="flex flex-row font-montserrat items-start justify-start mt-[9px] w-[64%] md:w-full">
          <Img
                className="h-[40px]  md:h-auto md:ml-[0] mr-[3%] rounded-[50%] w-[40px]"
                src={
                  product.owner?.picture
                    ? process.env.REACT_APP_API_BACK +
                      "/uploads/" +
                      product.owner?.picture
                    : "../images/defaultProfilePic.jpg"
                }
                alt="femaleSixteen"
              />
           <Text
  className="sm:text-[17px] pt-[2%] md:text-[19px] text-[20px] text-black-900 tracking-[1.05px] uppercase"
  size="txtMontserratRegular21"
>
  {product.owner.businessName}
</Text>

            <Img
              className="h-7 pt-[3%] ml-1.5 rounded-sm w-6"
              src="../images/Star.svg"
              alt="starOne"
            />
             <Img
              className="h-7 pt-[3%] ml-1.5 rounded-sm w-6"
              src="../images/Star.svg"
              alt="starOne"
            />
             <Img
              className="h-7 pt-[3%] ml-1.5 rounded-sm w-6"
              src="../images/Star.svg"
              alt="starOne"
            />
             <Img
              className="h-7 pt-[3%] ml-1.5 rounded-sm w-6"
              src="../images/Star.svg"
              alt="starOne"
            />
            <Text
              className="ml-4 pt-[1.5%] mt-[5px] text-base text-black-900"
              size="txtMontserratRegular16"
            >
              <span className="text-black-900 font-calistoga text-left font-normal">
                4.5/
              </span>
              <span className="text-red-300_d3 font-calistoga text-left font-normal">
                5
              </span>
            </Text>
          </div>
          <div className="flex flex-row font-calistoga gap-2.5 items-center justify-start mt-4 w-[19%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtCalistogaRegular20"
            >
              ${product.price}
            </Text>
          </div>
          <Text
            className="leading-[22.00px] mt-[30px] text-base text-black-900_99 w-full"
            size="txtMontserratRegular16Black90099"
          >
            {product.description}
          </Text>
          <Line className="bg-red-300_23 h-px mt-[22px] w-full" />
          <div className="bg-black-900 md:h-[50px] h-[52px] md:px-10 sm:px-5 px-[54px] py-4 relative rounded-[26px] w-[100%] sm:w-full">
            
            <div className="absolute bg-gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-full">
            <Button
          onClick={(e)=>addToCart("normal")}
          className="m-auto text-base  w-auto"
          size="txtMontserratMedium16WhiteA700"
        >
          Add to Cart 
        </Button>
            </div>

            <div className="absolute bg-red-300 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-full">
            <Button
          onClick={(e)=>addToCart("normal")}
          className="m-auto text-base text-white-A700  w-auto"
          size="txtMontserratMedium16WhiteA700"
        >
          Add to Cart 
        </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-montserrat gap-5 items-center  mt-[22px] w-full">
            
            <div className="bg-gray-100 flex sm:flex-1 flex-row items-center justify-between p-[15px] rounded-[5px] w-[29%] sm:w-full">
              <Img
                className="h-[18px] ml-[7px] w-[18px] cursor-pointer"
                src="../images/img_frame_black_900.svg"
                alt="frame"
                onClick={decreaseCount}
              />
              <Text
                className="text-base text-black-900"
                size="txtMontserratMedium16"
              >
                {count}
              </Text>
              <Img
                className="h-4 mr-2 w-4 cursor-pointer"
                src="../images/img_frame_black_900_12x12.svg"
                alt="frame_One"
                onClick={increaseCount}
              />
            </div>
            <div className="bg-black-900 md:h-[50px] h-[52px] md:px-10 sm:px-5 px-[54px] py-4 relative rounded-[26px] w-[100%] sm:w-full">
            
              <div className="absolute bg-gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-full">
              <Button 
            onClick={(e)=>addToCart("gift")}
            className="m-auto text-base  w-auto"
            size="txtMontserratMedium16WhiteA700"
          >
            Add as a gift
          </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductDetails;