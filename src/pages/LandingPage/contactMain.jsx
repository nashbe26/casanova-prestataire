import React from "react";

import { Button, Img, Line, Text, Input } from "components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";
import { contact } from "service/api";

const ContactMain = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (!data || !data.Nom || !data.tel || !data.email || !data.Description) {
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Data missing"
            title="Error"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );
    } else {
      try {
        const resposne = await contact(data);
        console.log(resposne);
        toast.custom(
          (t) => (
            <CustomToast
              data={t}
              message={resposne?.message}
              title="Info"
            ></CustomToast>
          ),
          {
            duration: 3000,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (     
    <>
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto  relative ">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2.3%]">
          <div className="flex">
            
            <div className="h-[1005px] md:h-[966px] m-auto fullScreen postion2">
            <div className="absolute flex flex-col h-full  items-center justify-end left-[7%] my-auto pt-[28px] md:px-10 sm:px-5 px-[49px] w-[7%]">
                          <Line className="bg-black-900 h-[795px] mt-[172px] w-px" />
                        </div>
              <Img
                className="absolute h-[100px] inset-x-[0] mx-auto top-[16%]"
                src="images/img_maskgroup_black_900_100x1440.svg"
                alt="maskgroup"
              />
                <Img
              className="absolute h-[100px] inset-x-[0] mx-auto bottom-[6.7%]"
              src="images/img_maskgroup_black_900_100x1440.svg"
              alt="maskgroup"
            />
              <div className="absolute bottom-[14%] flex flex-row gap-[10%] items-start  justify-start right-[5%] w-[80%]">
              <div className="transform -translate-y-[8%]">
              <Img
                src="images/3rouss.svg"
                alt="maskgroup"
                className="pt-[10%]"
              />
            </div>
                <div className=" transform -translate-y-[5%]">
                
                <Text className="sm:text-[32px] md:text-[38px] text-[22px] text-gray-500 uppercase w-full">
                  Prêt à entrer en contact ?{" "}
                </Text>
                <br></br>
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                  size="txtCormorantRegular42Red300"
                >
                  nous construisons votre rève autour de vous{" "}
                </Text>

                <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
               
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                    <Input
                      register={register}
                      name="Nom"
                      placeholder="Nom complet"
                      className="w-full "
                      color="gray_100"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                    <Input
                      register={register}
                      name="tel"
                      color="gray_100"
                      placeholder="Téléphone"
                      className="w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                    <Input
                      register={register}
                      name="email"
                      color="gray_100"
                      placeholder="email"
                      className="w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                    <Input
                      register={register}
                      name="Description"
                      color="gray_100"
                      placeholder="Description"
                      className="w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <Button
                    className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                    color="red_300"
                    size="md"
                    variant="fill"
                  >
                    ENVOYER
                  </Button>
                </form>


                </div>
               
              </div>
              <Text className="absolute bottom-[-35%] text-[70%] leading-[25.00px] left-[-45%] rotate-[90deg] text-base text-black-900 tracking-[5.00px] uppercase w-[100%] sm:w-full">
              Nous créons. Vous célébrez
            </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
