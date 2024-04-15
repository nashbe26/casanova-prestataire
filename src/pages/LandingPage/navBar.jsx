import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { Img, Line, Text } from "components";
import "./style.css";

const NavBar = () => {
  const navBar = useRef([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const navbar = navBar.current;

    
    if (navbar) {
      gsap.fromTo(
        navbar,
        { y: "-200%" },
        { duration: 10, y: "8%", ease: "power3.out" }
      );
     
    
    
    }
  }, []);
  const handleContactClick = () => {
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 2; 
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    setScrollPercentage(targetScroll / document.body.scrollHeight * 100);
  };
  const handleHomeClick = () => {
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 0; 
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    setScrollPercentage(targetScroll / document.body.scrollHeight * 100);
  };

  const handlePlanClick = () => {
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 1.5; 
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    setScrollPercentage(targetScroll / document.body.scrollHeight * 100);
  };
  return (
      <div className="navbar-position-top transformToY" ref={navBar}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            onClick={handleHomeClick}
            className="ml-[2%] text-base text-black-900"
            size="txtMontserratRegular16"
          >
            HOME
          </Text>
          <div className=" ml-[2%] flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[23px] mt-[13px] w-[99%] md:w-full">
            <Text
              className="text-base text-black-900"
              size="txtMontserratRegular16"
            >
              ABOUT
            </Text>
            <Img
              className=" ml-[2%] h-7 mr-[2%] md:h-auto object-cover"
              src="images/img_logo22.png"
              alt="logoTwentyTwo"
            />
          </div>
          <Text
            className=" ml-[2%] md:ml-[0] ml-[3px] mt-[11px] text-base text-black-900"
            size="txtMontserratRegular16"
            onClick={handleContactClick}
            

          >
            CONTACT
          </Text>
          <Text
                      onClick={handlePlanClick}

            className=" ml-[2%] md:ml-[0] ml-[3px] mt-[15px] text-base text-black-900"
            size="txtMontserratRegular16"
          >
            WEDDING PLANNER
          </Text>
        </div>
        
      </div>

  );
};
export default NavBar;
