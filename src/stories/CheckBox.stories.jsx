import React from "react";
import { CheckBox } from "components";

export default {
  title: "xsaustain_3rouset/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "square",
  label: "Checkbox",
  inputClassName: "mr-1",
};
