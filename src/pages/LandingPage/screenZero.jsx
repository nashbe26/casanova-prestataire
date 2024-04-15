import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactComponent as Shab } from "../../assets/images/shabbbb.svg";
import { Text, Img } from "components";
import "./style.css";
import NavBar from "./navBar";
import { ReactComponent as Tiktok } from "../../assets/images/Tiktok.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as ScrollVector } from "../../assets/images/scrollVector.svg";


const ScreenZero = () => {
  const divRef = useRef(null);
  const elementsRef = useRef([]);
  const navBar = useRef([]);

  
  useEffect(() => {
    const divEle = divRef.current;
    const elements = elementsRef.current;
    const navbar = navBar.current;

    
    if (divEle && elements && navbar) {
      gsap.fromTo(
        divEle,
        { y: "0%", scaleX: "200%", scaleY: "200%" }, // Starting position
        { duration: 10,scaleY:"250%",scaleX:"550%", y: "-28%", ease: "power3.out" }
      );
     
      gsap.fromTo(
        elements,
        { opacity: -10 },
        { duration: 4, opacity: 1, ease: "power3.out" }
      );
    
    }
  }, []);

  return (
    <>
      <div  >
      <NavBar  />

      </div>
      <div className="flex panel flex-col items-start justify-start  fullScreen" style={{backgroundImage: 'url("images/aaaaaaaaaaaaaaaa.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <div className="md:h-[846px] mt-0.5 relative fullScreen">
          <div className="absolute flex flex-col h-[747px] md:h-auto inset-x-[0] items-center justify-center mx-auto pt-[5%] w-[100%]">
          <div  ref={(el) => elementsRef.current.push(el)} className="flex-col pt-[8%] item-center z-[999]  justify-center ">
          <Text
            className="sm:text-[32px] text-center md:text-[38px] text-[42px] z-[999] text-red-300 uppercase w-full"
            size="txtCormorantRegular42Red300"
          >
            discover
          </Text>
          <br></br>
          <Text                

            className="text-black-900 text-center text-6xl uppercase"
            size="txtCormorantRegular60Black900"
          >
            Embark on a journey of love, where <br /> dreams come true on
            your special day.
          </Text>
      
        </div>  
            <div className=" h-[100%] sm:h-[319px] md:h-[343px] sm:mt-0 mt-6 relative w-[100%]  sm:w-full">
              <Text                 className=" absolute bottom-[8%] left-[49%] z-[999] w-[100%]"
>Scroll</Text>
              <ScrollVector   ref={(el) => elementsRef.current.push(el)}
                className=" absolute bottom-[-60%] right-[-0%] z-[999] w-[100%]"/>
              <Tiktok
                ref={(el) => elementsRef.current.push(el)}
                className=" absolute bottom-[-50%] left-[-48%] z-[999] w-[100%]"
              />
              <Facebook
                ref={(el) => elementsRef.current.push(el)}
                className=" absolute bottom-[-50%] left-[-46%] z-[999] w-[100%]"
              />
              <Instagram
                ref={(el) => elementsRef.current.push(el)}
                className=" absolute bottom-[-51%] left-[-44%] z-[999] w-[100%]"
              />
            </div>

          </div>
        </div>
        <Shab className="absolute z-[-1] h-[100%] w-[100%]" ref={divRef} />
      </div>

    </>
  );
};

export default ScreenZero;
