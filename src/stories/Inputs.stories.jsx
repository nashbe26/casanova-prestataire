import React from "react";

import { Input } from "components";

export default {
  title: "xsaustain_3rouset/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder7",
  color: "white_A700",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
