import React, { useEffect, useRef } from "react";

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
      <div className="bg-gray-100 panel fixedd font-montserrat h-[1032px] mx-auto relative">
        <div className="h-[1005px] md:h-[966px] m-auto md:px-5 fullScreen transform -translate-y-[2%]">
          <div
            className="flex ite ms-center"
            style={{ marginTop: "13%", border: "1px black solid" }}
          >
            <div
              className={`flex md:flex-1 h-[100%] w-[8%] flex-col items-center justify-start`}
            >
              <Text className="text-[84%] pr-[38%] texto text-base text-black-900 tracking-[5.00px] uppercase w-[100%] pt-[100%] sm:w-full">
                La fête de mariage
              </Text> 
            </div>
            <div
              className={`flex md:flex-1 h-[100%] w-[38%] flex-col items-center justify-start`}
              style={{ borderLeft: "1px black solid" }}
            >
               <br /><br /><br /><br />
               <Img
                className={`md:h-auto object-cover h-[25%] w-[48%] rounded-br-7px w-full`}
                src="images/3rouss.svg"
                alt={"images/img_weddingbouquet.png"}
              />
            

             
              <br />

            </div>
            <div className="flex flex-col items-start w-[50%] justify-start pt-[4%]">
            
              <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
               
               <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                 <Input
                   register={register}
                   name="Nom"
                   placeholder="Nom complet"
                   className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
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
                   className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                   />
                 <div className="h-px w-full bg-gray-300" />
               </div>
               <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                 <Input
                   register={register}
                   name="email"
                   color="gray_100"
                   placeholder="email"
                   className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                   />
                 <div className="h-px w-full bg-gray-300" />
               </div>
               <div className="flex flex-col items-start justify-start  w-[87%] mt-[40px] gap-[100%]">
                 <Input
                   register={register}
                   name="Description"
                   color="gray_100"
                   placeholder="Description"
                   className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                   />
                 <div className="h-px w-full bg-gray-300" />
               </div>
               <Button
                className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[10%] min-h-[5%] mt-[5%] rounded-[5px] text-center text-[10px] uppercase"
                color="red_300"
                size="md"
                variant="fill"
              >
                Envoyer
              </Button>
             </form>
              
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
