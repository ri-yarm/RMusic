import React from "react";
import { styles } from "UI/InputRangeUI/index.styles.ts";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputRageUI = (props: RangeInputProps) => {
  return (
    <RangeInput
      className="styled-slider slider-progress"
      type={"range"}
      {...props}
    />
  );
};

const { RangeInput } = styles;

export default React.memo(InputRageUI);
