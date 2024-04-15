import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP
import LandingpagesThree from "../../../pages/LandingpagesThree";
import NavBar from "./navBar";
import { Img, Line, Text } from "components";
import "./style.css"
import LandingpagesFourPage from "pages/LandingpagesFour";
import LandingPageSFourColumn from "components/archive To delete before build/LandingPageSFourColumn";
import LandingpageContactPage from "pages/LandingpageContact";
import LandingpagesSixPage from "pages/LandingpagesSix";
import LandingPageSTwoDesktop12 from "./index_2";
const LandingPageSTwoDesktop11 = (props) => {
  const [showLandingpagesThree,setShowLandingpagesThree]=useState(false)
  const landingPageRef = useRef(null);
  const landingPageThreeRef = useRef(null);

  
  useEffect(() => {
    // GSAP animation to rotate the text
    gsap.to(".textCercle", {
      rotation: 360,
      duration: 8,
      repeat: -1, // Infinite repeat
      ease: "none" // Linear easing
    });
    gsap.registerPlugin(ScrollTrigger);

  const landingPageElement = landingPageRef.current;
  const landingPageThreeElement = landingPageThreeRef.current;

  if (landingPageElement) {
   

    gsap.to(landingPageElement, {
      opacity: 1,
      duration:3.5,
      ease: "power1.out"
    })
  }


  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const landingPageElement = landingPageRef.current;
    const landingPageThreeElement = landingPageThreeRef.current;
  

    if (landingPageElement) {
      const sections = gsap.utils.toArray(".panel");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: landingPageElement,
        pin: true,
        scrub: 0.1,
        start:"top top",
        end: () => `+=${landingPageRef.current.offsetWidth}`,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
      }
    });

    return () => {
      scrollTween.kill(); // Clean up GSAP animation on unmount
    };
    }
    /*if (landingPageElement) {
      // Timeline for initial opacity animation
      const initialTimeline = gsap.timeline({ defaults: { opacity: 0 } });
      initialTimeline.to(landingPageElement, {
        opacity: 1,
        duration: 3.5,
        ease: "power1.out",
      });
  
      // Timeline for ScrollTrigger to reveal the next component
      const scrollTimeline = gsap.timeline({ paused: true });
      scrollTimeline.fromTo(
        landingPageThreeElement,
        { x: "-100%" },
        { x: 0, opacity: 1,       duration:2.5,
          ease: "power1.out" }
      );
      // ScrollTrigger for revealing the next component
      ScrollTrigger.create({
        trigger: landingPageElement,
        start: "top end", // Adjust this value based on your layout
        end: "bottom end", // Adjust this value based on your layout
        onEnter: () => {
          scrollTimeline.play();
          setShowLandingpagesThree(true);
        },
        onLeaveBack: () => {
          scrollTimeline.reverse();
          setShowLandingpagesThree(false);
        },
        markers: true, // Remove this in production, it's just for debugging
      });
    }*/
  }, []);
  
  return (
    <>
               <NavBar></NavBar>

      <div style={{opacity:0}} className={props.className} ref={landingPageRef}>
     
        
              
              <LandingPageSTwoDesktop12 props={defaultProps}/>
              <LandingpagesFourPage/>
              <LandingpagesSixPage/>
              <LandingpagesThree/>


      

       
      </div>

    </>
  );
};

const defaultProps = {
  hometext: "HOME",
  abouttext: "ABOUT",
  contacttext: "CONTACT",
 
  aboutmenublogThree: "",
};

export default LandingPageSTwoDesktop11;

/** 
 * 
 *  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[96%] md:w-full">
            <div className="flex flex-col gap-[18px] justify-start mb-[11px] md:mt-0 mt-[37px] w-[11%] md:w-full">
              <Text
                className="md:ml-[0] ml-[61px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                {props?.hometext}
              </Text>
              <div className="flex flex-row gap-[23px] items-center justify-between w-full">
                <Line className="bg-black-900 h-px my-[9px] w-[43%]" />
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRegular16"
                >
                  {props?.abouttext}
                </Text>
              </div>
            </div>
            <Img
              className="h-[107px] md:ml-[0] ml-[528px]"
              src="images/img_maskgroup.svg"
              alt="maskgroup"
            />
            <Img
              className="h-7 sm:h-auto mb-2 md:ml-[0] ml-[402px] md:mt-0 mt-[71px] object-cover w-[15%] md:w-full"
              src="images/img_logo22.png"
              alt="logoTwentyTwo"
            />
    </div>
*/
