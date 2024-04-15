import React,{useState,useEffect} from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import PresCard from "./presCard";
import PresDescription from "./presDescription";
import PresPortforilo from "./presPortforilo";
import ClientsFeedBacks from "./clientFeedBacks";
import { useGetById } from "utils/functions";
import { useRecoilState } from "recoil";
import { User } from "utils/recoil/atoms";
import { useParams } from 'react-router-dom';

const PresPHOTOPage = () => {
  const [user,setUser]=useState()
  const [token]= useRecoilState(User)
  const { id } = useParams();

  const getUser=useGetById()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser("User", id);
        console.log(userData);
        setUser(userData);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchUser();
  }, []);
  if(user){
    return (
      <>
                    <NavBar></NavBar>

        <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[122px] items-center justify-start mt-9 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1241px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-[75px] w-full">
                <PresCard user={user} ></PresCard>
                <Img
                  className="h-[352px] md:h-auto object-cover rounded-[12px]"
                  src="../images/img_rectangle302.png"
                  alt="rectangle302"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[22px] w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[74px] items-start justify-start w-[33%] md:w-full">
                  <PresDescription></PresDescription>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-red-300"
                    size="txtCormorantBold28"
                  >
                    CLIENT FEED BACK
                  </Text>
                </div>
                <PresPortforilo user={user}></PresPortforilo>
              </div>
              <ClientsFeedBacks></ClientsFeedBacks>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }else{
    return(
      <></>
    )
  }
 
};

export default PresPHOTOPage;
