import React from "react";

import { SelectBox } from "components";

export default {
  title: "xsaustain_3rouset/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder5",
  variant: "FillGray100",
  className: "w-[300px]",
};
