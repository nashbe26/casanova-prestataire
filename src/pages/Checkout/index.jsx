import React, { useState, useEffect } from "react";
import { Img, Button, Text, Heading, Input } from "../../components";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreate, useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";
import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";

export default function ChekoutsurplacePage() {
  const [cart, setCart] = useRecoilState(Cart);

  const Create = useCreate();
  const GetUser = useGetUser();
  const [user] = useRecoilState(User);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("surPlace");
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
  const [hasGift,setHasGift]= useState(false)
  const {  deliveryType } = location.state;
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data = { ...data, date: date };
    console.log(cart);
    const response = await GetUser(user);
    const body = {
      modelName: "Order",
      cart,
      user: response.user,
      livraision: deliveryType,
      adresse: data?.adresse,
      phone: data.phone,
      date: data.date,
    };
    try {
      const response = await Create(body);
      navigate(`/category`);
      toast.custom((t) => (
        <CustomToast data={t} message="Order Created" title="Info" ></CustomToast>
      ), {
        duration: 3000,
      });

      setCart([])
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
     const x = cart.some(product => product.type === "gift");
      setHasGift(x)
  }, []);

  return (
    <div className="background-container">
      <div className="flex justify-center items-center h-screen overflow-hidden custom-bg-color">
        <div className="flex justify-center items-center h-screen">
          <div className="h-[976px] w-full px-[1074px] relative max-w-[3588px]">
            <div className="flex flex-col items-end justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
             
              <div className="flex flex-row justify-center w-full mt-[-152px]">
                <div className="flex flex-row justify-start w-full gap-[47px]">
                  <div className="h-[922px] w-[49%] relative"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center w-full bottom-0 right-0 left-0 m-auto absolute">
              <Img
                src="../images/img_91231_converti_922x685.png"
                alt="91231converti"
                className="w-[48%] object-cover"
              />
              <Img
                src="../images/img_91231_converti_854x1440.png"
                alt="91231converti"
                className="w-full ml-[-685px] object-cover"
              />
            </div>

            <div className="flex flex-row justify-start items-start  h-full left-[30%] bottom-0 top-0 m-auto absolute">
              <Img
                src="../images/img_91231_converti_976x384.png"
                alt="91231converti"
                className="w-[30%] opacity-0.74 object-cover"
              />
              <div className="flex flex-row justify-end  mt-[77px] ml-[-231px] p-[45px] bg-white-A700 rounded-sm">
                <div className="flex flex-col items-center justify-start w-[98%] mb-[52px] mr-1 gap-[47px]">
                  {hasGift? <>  <Heading
                    size="s"
                    as="h1"
                    className="!text-red-300 tracking-[2.72px]"
                  >
                    ENVOYER UN CADEAUX
                  </Heading></>: <>  <Heading
                    size="s"
                    as="h1"
                    className="!text-red-300 tracking-[2.72px]"
                  >
                    CHECK OUT
                  </Heading></>}
                
                  <div className="flex flex-row justify-start w-[53%] gap-5">
                    <Button
                      className={`gap-[11px] tracking-[0.96px] min-w-[260px] flex items-center justify-center text-center cursor-pointer rounded-sm h-[33px] px-[35px] text-xs ${
                        selectedOption === "surPlace"
                          ? "text-white-A700 bg-red-300"
                          : "text-gray-600_01 bg-gray-100"
                      }`}
                      onClick={() => setSelectedOption("surPlace")}
                    >
                      <Img
                        className="mr-2"
                        src="../images/img_icon.svg"
                        alt="Icon"
                      />
                      Paiement sur place
                    </Button>
                    <Button
                      className={`gap-[7px] tracking-[0.96px] min-w-[260px] flex items-center justify-center text-center cursor-pointer rounded-sm h-[33px] px-[35px] text-xs ${
                        selectedOption === "livraison"
                          ? "text-white-A700 bg-red-300"
                          : "text-gray-600_01 bg-gray-100"
                      }`}
                      onClick={() => setSelectedOption("livraison")}
                    >
                      <Img
                        className={`mr-2 ${
                          selectedOption === "livraison" ? "white-svg" : ""
                        }`}
                        src="../images/img_delivery.svg"
                        alt="delivery"
                      />{" "}
                      Paiement à la livraison
                    </Button>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start mt-[0%] w-[99%] gap-[13px]">
                        <Input
                          register={register}
                          name="email"
                          placeholder="Email"
                          className="w-[100%]"
                        />
                        <div className="h-px w-full bg-gray-300" />
                      </div>{" "}
                      <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] gap-[100%]">
                        <Input
                          register={register}
                          name="nom"
                          placeholder="Nom & Prenom"
                          className="w-full"
                        />
                        <div className="h-px w-full bg-gray-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] gap-[100%]">
                        <Input
                          register={register}
                          name="phone"
                          placeholder="Phone Number"
                          type="Number"
                          className="w-full"
                        />
                        <div className="h-px w-full bg-gray-300" />
                      </div>
                      {selectedOption === "livraison" && (
                        <>
                          <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] gap-[100%]">
                            <Input
                              register={register}
                              name="adresse"
                              placeholder="Adresse"
                              className="w-full"
                            />
                            <div className="h-px w-full bg-gray-300" />
                          </div>
                        </>
                      )}
                      <Text as="p" className="mt-[53px] tracking-[1.12px]">
                        <span>
                          {selectedOption === "livraison"
                            ? "Date"
                            : "Pick up Date"}
                        </span>
                      </Text>
                      <DatePicker
                      value={new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                        selected={startDate}
                        onChange={(date) => {
                          setDate(date.toISOString());
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText={
                          selectedOption === "livraison"
                            ? "Date"
                            : "Pick up Date"
                        }
                      />
                      <div className="h-px w-[99%] mt-[11px] bg-gray-300" />
                      <div className="flex flex-row justify-between items-center w-[99%] mt-10">
                        <Heading as="h2">TOTAL</Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!text-black-900 !font-calistoga text-right"
                        >
                          $467
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start mt-[43px] gap-5">
                        <Button
                          size="sm"
                          variant="outline"
                          className="mb-0.5 tracking-[1.12px] font-medium min-w-[493px] rounded-[5px] flex items-center justify-center text-center cursor-pointer rounded-sm h-[47px] px-[35px] text-sm border-gray-600 border border-solid text-gray-600"
                        >
                          Back
                        </Button>
                        <Button
                          color="red_300"
                          size="sm"
                          className="tracking-[1.12px] font-medium min-w-[508px] rounded-[5px] flex items-center justify-center text-center cursor-pointer rounded-sm h-[47px] px-[35px] text-sm bg-red-300 text-white-A700"
                          type="Submit"
                        >
                          Envoyer
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
