import React from "react";
import { styles } from "components/Player/PlayerRange/PRDuration/index.styles.ts";
import { InputRangeProps } from "components/Player/PlayerRange/types.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import InputRageUI from "UI/InputRangeUI";
import T500 from "UI/TypographyUI/TitleUI/500";

const PRDuration = ({ value, onChange }: InputRangeProps) => (
  <ContainerSC>
    <T500>03:41</T500>
    <InputRageUI
      value={value}
      onChange={onChange}
      min={0}
      max={1}
      step={0.01}
    />
    <T500 color={ColorsScheme.GRAY}>12:11</T500>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PRDuration);
