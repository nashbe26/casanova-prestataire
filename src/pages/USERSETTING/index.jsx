import React, { useState, useRef, useEffect } from "react";
import { useCreateImage, useUpdate } from "../../utils/functions";
import { useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const USERSETTINGPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  const CreateIamge = useCreateImage();

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(userData?.user?.picture || null);
  const [newImage, setImageChanged] = useState(null);

  const update = useUpdate();
  
  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );

    await formData.append("userId", userData.user._id);
    await formData.append("type", "images");
    await formData.append("utility", "profilePic");
    await formData.append("file", newFiles[0]);

    try {
      const response = await CreateIamge(formData);
      setImageChanged(response.file.filename);
      window.location.reload()
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const handleBrowseClick = () => {

    fileInputRef.current.click();
  };
  const onSubmit = async (data) => {
    if (data.email != data.confirmEmail) {
      toast.custom((t) => (
        <CustomToast data={t} message="Confirm email invalide" title="Error" ></CustomToast>
      ), {
        duration: 3000,
      });
    } else {
      if (data.password !== data.confirmPassword) {
        toast.custom((t) => (
          <CustomToast data={t} message="Confirm password invalide" title="Error" ></CustomToast>
        ), {
          duration: 3000,
        });
      } else {
        data.email = {
          primary: data.email,
        };

        const response = await update(userData.user._id, data);
        if (response.status === 200) {
          window.location.reload();
        } else {
          toast.custom((t) => (
            <CustomToast data={t} message="Error" title="Error" ></CustomToast>
          ), {
            duration: 3000,
          });
          }
      }
    }
  };

  if (userData) {
    return (
      <>
                      <NavBar></NavBar>

        <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto pt-[37px] w-full">
          <div className="flex flex-col md:gap-10 gap-[151px] items-center justify-start w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-start justify-start max-w-[1241px] mx-auto md:px-5 w-full">
                <Text
                  className="mt-16 sm:text-[23.38px] md:text-[25.38px] text-[27.38px] text-red-300"
                  size="txtCormorantSemiBold2738"
                >
                  PARAMÈTRES
                </Text>
                <div className="bg-gray-600_01 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-8 sm:px-5 px-[30px] w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtCormorantBold18WhiteA700"
                  >
                    IMAGE DE PROFILE{" "}
                  </Text>
                  <Line className="bg-white-A700 h-[61px] md:h-px md:ml-[0] ml-[271px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[42px] text-lg text-white-A700"
                    size="txtCormorantBold18WhiteA700"
                  >
                    INFORMATIONS DE BASE
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Line className="bg-gray-400_03 h-[671px] md:h-px md:w-full w-px" />
                  <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start md:ml-[0] ml-[86px] md:mt-0 mt-44 w-1/4 md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-[51%] md:w-full">
                      <div className="h-[151px] relative w-[151px]">
                        <div className="bg-white-A700 gray_600_01_blue_gray_900_63_border h-[150px] m-auto outline outline-[3px] rounded-[50%] w-[150px]"></div>
                        <Img
                          className="absolute h-[151px] inset-[0] justify-center m-auto rounded-[50%] w-[151px]"
                          src={
                            userData?.user?.picture && !newImage
                              ? `${process.env.REACT_APP_API_BACK}/uploads/${userData?.user?.picture}`
                              : newImage?
                               `${process.env.REACT_APP_API_BACK}/uploads/${newImage}`
                              : "../images/img_httpswwwpex.png"
                          }
                          alt="profile_picture"
                        />
                      </div>
                      <Text
                        className="sm:text-[27px] md:text-[29px] text-[31px] text-black-900"
                        size="txtCormorantBold31"
                      >
                        {userData.user.name ? (
                          <>{userData.user.name + " " }</>
                        ) : (
                          <>{userData.user.name}</>
                        )}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Button
                      type="button"
                        className="cursor-pointer leading-[normal] min-w-[298px] rounded-[9px] text-center text-lg"
                        color="red_300"
                        size="sm"
                        variant="fill"
                        onClick={handleBrowseClick}
                      >
                        CHANGER L’IMAGE
                      </Button>
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

                  <div className="h-[671px] md:ml-[0] ml-[75px] relative w-[63%] md:w-full">
                    <div className="absolute bg-gray-600_01 bottom-[41%] flex flex-col gap-[15px] inset-x-[0] justify-start mx-auto pb-[22px] w-full">
                      <Line className="bg-gray-400_03 h-px w-full" />
                      <Text
                        className="md:ml-[0] ml-[43px] text-lg text-white-A700"
                        size="txtCormorantBold18WhiteA700"
                      >
                        SÉCURITÉ
                      </Text>
                    </div>
                    <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[83%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtCormorantRegular14"
                      >
                        NOUVEAU MOT DE PASSE
                      </Text>
                      <Input
                        register={register}
                        name="password"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[35px] mt-4 w-full"
                        shape="round"
                        color="gray_300_01"
                        type="password"
                        variant="outline"
                      ></Input>
                      <Text
                        className="mt-[25px] text-black-900 text-sm"
                        size="txtCormorantRegular14"
                      >
                        CONFIRMER LE MOT DE PASSE
                      </Text>
                      <Input
                        register={register}
                        type="password"
                        name="confirmPassword"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[35px] mt-4 w-full"
                        shape="round"
                        color="gray_300_01"
                        variant="outline"
                      ></Input>
                      <Text
                        className="mt-[13px] text-gray-500 text-xs"
                        size="txtPoppinsLight12"
                      >
                        8 caractères ou plus. Combinez des lettres majuscules et
                        minuscules ainsi que des chiffres.
                      </Text>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[83%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[77%] md:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtCormorantRegular14"
                          >
                            PRÉNOM
                          </Text>
                          <Text
                            className="text-black-900 text-sm pl-[2%]"
                            size="txtCormorantRegular14"
                          >
                            NOM DE FAMILLE
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-4 w-full">
                          <Input
                            name="famillyName"
                            register={register}
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex sm:flex-1 h-[35px] sm:w-full"
                            shape="round"
                            color="gray_300_01"
                            variant="outline"
                          ></Input>
                          <Input
                            name="name"
                            register={register}
                            placeholder=""
                            className="pl-[85px] w-full"
                            wrapClassName="flex sm:flex-1 h-[35px]  sm:w-full"
                            shape="round"
                            color="gray_300_01"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[25px] text-black-900 text-sm"
                          size="txtCormorantRegular14"
                        >
                          EMAIL
                        </Text>
                        <Input
                          name="email"
                          register={register}
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="flex h-[35px] mt-4 w-full"
                          shape="round"
                          color="gray_300_01"
                          variant="outline"
                        ></Input>
                        <Text
                          className="mt-[25px] text-black-900 text-sm"
                          size="txtCormorantRegular14"
                        >
                          CONFIRMER EMAIL
                        </Text>
                        <Input
                          name="confirmEmail"
                          register={register}
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="flex h-[35px] mt-4 w-full"
                          shape="round"
                          color="gray_300_01"
                          variant="outline"
                        ></Input>
                      </div>
                    </div>
                    <Line className="absolute bg-gray-400_03 h-[671px] inset-y-[0] left-[0] my-auto w-px" />
                  </div>
                  <Line className="bg-gray-400_03 h-[671px] md:h-px md:w-full w-px" />
                </div>
                <Line className="bg-gray-400_03 h-px w-full" />
                <div className="flex flex-row gap-[9px] items-center justify-end md:ml-[0] ml-[957px] mt-[37px] w-[23%] md:w-full">
                  <Button
                  type="button"
                    className="cursor-pointer font-poppins leading-[normal] min-w-[137px] rounded-md text-center text-xs"
                    color="black_900_3d"
                    size="sm"
                    variant="outline"
                    onClick={(e)=>navigate("/category")}
                  >
                    ANNULER
                  </Button>
                  <Button
                    className="bg-red-300 h-10 justify-center pl-[34px] pr-[22px] sm:px-5 py-3 rounded-md text-white-A700 text-xs w-[137px]"
                    type="submit"
                    size="sm"
                    variant="outline"
                  >
                    ENREGISTRER
                  </Button>
                </div>
              </div>
            </form>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default USERSETTINGPage;
