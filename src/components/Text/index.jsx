import React from "react";

const sizeClasses = {
  txtCormorantBold24: "font-bold font-cormorant",
  txtCormorantBold21: "font-bold font-cormorant",
  txtCalistogaRegular14Red300: "font-calistoga font-normal",
  txtCormorantBold20: "font-bold font-cormorant",
  txtInterBold12Lightgreen600: "font-bold font-inter",
  txtMontserratMedium16WhiteA700: "font-medium font-montserrat",
  txtInterSemiBold24: "font-inter font-semibold",
  txtCormorantBold28: "font-bold font-cormorant",
  txtInterSemiBold30: "font-inter font-semibold",
  txtCormorantRegular42WhiteA700: "font-cormorant font-normal",
  txtInterRegular28: "font-inter font-normal",
  txtCormorantBold14: "font-bold font-cormorant",
  txtMontserratRegular12Gray500: "font-montserrat font-normal",
  txtCeraProMedium14WhiteA700: "font-cerapro font-medium",
  txtCormorantBold12: "font-bold font-cormorant",
  txtMontserratRegular14Black90099: "font-montserrat font-normal",
  txtMontserratRegular10: "font-montserrat font-normal",
  txtCormorantBold18: "font-bold font-cormorant",
  txtCormorantRegular20: "font-cormorant font-normal",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtCormorantBold20Red300: "font-bold font-cormorant",
  txtMontserratRomanSemiBold16Gray90002: "font-montserrat font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtPlusJakartaSansExtraBold32: "font-extrabold font-plusjakartasans",
  txtInterRegular14: "font-inter font-normal",
  txtCormorantBold18Gray40002: "font-bold font-cormorant",
  txtCormorantLight28: "font-cormorant font-light",
  txtCormorantBold48: "font-bold font-cormorant",
  txtPoppinsLight12: "font-light font-poppins",
  txtMontserratRomanMedium14Black900: "font-medium font-montserrat",
  txtCormorantBold18Red300: "font-bold font-cormorant",
  txtMontserratRomanSemiBold14: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold12: "font-montserrat font-semibold",
  txtCormorantBold40Black900: "font-bold font-cormorant",
  txtInterRegular14WhiteA7008b: "font-inter font-normal",
  txtCormorantBold40: "font-bold font-cormorant",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMontserratMedium40: "font-medium font-montserrat",
  txtCormorantBold36: "font-bold font-cormorant",
  txtCormorantBold40Gray100: "font-bold font-cormorant",
  txtCormorantBold32: "font-bold font-cormorant",
  txtCormorantBold31: "font-bold font-cormorant",
  txtCormorantBold34: "font-bold font-cormorant",
  txtMontserratRegular14Gray600: "font-montserrat font-normal",
  txtMontserratRegular16Gray800: "font-montserrat font-normal",
  txtMontserratRomanMedium13Gray90002: "font-medium font-montserrat",
  txtCormorantRegular42: "font-cormorant font-normal",
  txtMontserratRegular12Black90099: "font-montserrat font-normal",
  txtMontserratRomanRegular14Gray90002: "font-montserrat font-normal",
  txtCormorantBold21Black900c9: "font-bold font-cormorant",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtInterRegular13Bluegray300: "font-inter font-normal",
  txtMontserratRomanRegular14Bluegray300: "font-montserrat font-normal",
  txtCormorantBold64: "font-bold font-cormorant",
  txtCormorantRegular16Black900: "font-cormorant font-normal",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtGothamBook14: "font-gotham font-normal",
  txtCormorantRegular72: "font-cormorant font-normal",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtInterSemiBold12Red400: "font-inter font-semibold",
  txtGothamBook13: "font-gotham font-normal",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtInterMedium13Gray60003: "font-inter font-medium",
  txtCalistogaRegular18Red300: "font-calistoga font-normal",
  txtInterRegular12Bluegray800: "font-inter font-normal",
  txtCormorantMedium24: "font-cormorant font-medium",
  txtCormorantMedium21: "font-cormorant font-medium",
  txtCalistogaRegular20: "font-calistoga font-normal",
  txtCalistogaRegular21: "font-calistoga font-normal",
  txtCormorantBold18WhiteA700: "font-bold font-cormorant",
  txtRalewayRomanRegular20: "font-normal font-raleway",
  txtCormorantRegular60: "font-cormorant font-normal",
  txtMontserratRomanRegular14Gray60003: "font-montserrat font-normal",
  txtInterMedium13: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtMontserratRomanLight13: "font-light font-montserrat",
  txtCeraProMedium14: "font-cerapro font-medium",
  txtCormorantMedium17: "font-cormorant font-medium",
  txtCalistogaRegular20Black9004c: "font-calistoga font-normal",
  txtCormorantMedium18: "font-cormorant font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtMontserratRomanMedium13Bluegray400: "font-medium font-montserrat",
  txtCormorantRegular42Red300: "font-cormorant font-normal",
  txtCalistogaRegular16: "font-calistoga font-normal",
  txtCalistogaRegular18: "font-calistoga font-normal",
  txtCormorantMedium16: "font-cormorant font-medium",
  txtCalistogaRegular13: "font-calistoga font-normal",
  txtMontserratRomanMedium13Gray60003: "font-medium font-montserrat",
  txtCalistogaRegular15: "font-calistoga font-normal",
  txtPoppinsMedium14Gray400: "font-medium font-poppins",
  txtCormorantRegular60Black900: "font-cormorant font-normal",
  txtCalistogaRegular14: "font-calistoga font-normal",
  txtCormorantBold48Red300: "font-bold font-cormorant",
  txtInterRegular14Gray90002: "font-inter font-normal",
  txtMontserratRegular21: "font-montserrat font-normal",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtCormorantRegular14: "font-cormorant font-normal",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtCormorantRegular16: "font-cormorant font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtMontserratRegular13: "font-montserrat font-normal",
  txtInterSemiBold30Bluegray90002: "font-inter font-semibold",
  txtMontserratRegular16Gray80001: "font-montserrat font-normal",
  txtMontserratRomanMedium10: "font-medium font-montserrat",
  txtMontserratRomanMedium13: "font-medium font-montserrat",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtMontserratRegular16Black90099: "font-montserrat font-normal",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium13: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtMontserratRegular16Bluegray900: "font-montserrat font-normal",
  txtCormorantRegular86: "font-cormorant font-normal",
  txtMontserratRegular16WhiteA700: "font-montserrat font-normal",
  txtInterSemiBold16: "font-inter font-semibold",
  txtMontserratExtraLight12: "font-light font-montserrat",
  txtCormorantSemiBold2738: "font-cormorant font-semibold",
  txtMontserratRegular16Gray600: "font-montserrat font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtPlusJakartaSansExtraBold12: "font-extrabold font-plusjakartasans",
  txtCormorantBold28Black900: "font-bold font-cormorant",
  txtMontserratRomanMedium13Bluegray700: "font-medium font-montserrat",
  txtMontserratLight16: "font-light font-montserrat",
  txtInterSemiBold20Bluegray90002: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
