import React from "react";

const sizes = {
  s: "text-[34px] font-bold leading-[42px]",
  xs: "text-[21px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-cormorant ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
