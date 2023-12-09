import React from "react";
import { styles } from "components/Player/PlayerRange/PRDuration/index.styles.ts";
import { InputRangeProgressProps } from "components/Player/PlayerRange/types.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import InputRageUI from "UI/InputRangeUI";
import T500 from "UI/TypographyUI/TitleUI/500";

const PRDuration = ({
  value,
  onChange,
  duration,
  currentTime,
}: InputRangeProgressProps) => (
  <ContainerSC>
    <TimeContainerSC>
      <T500 style={{ width: "100%" }}>{currentTime}</T500>
    </TimeContainerSC>
    <InputRageUI
      value={value}
      onChange={onChange}
      min={0}
      max={1}
      step={0.01}
    />
    <TimeContainerSC>
      <T500 style={{ width: "100%" }} color={ColorsScheme.GRAY}>
        {duration}
      </T500>
    </TimeContainerSC>
  </ContainerSC>
);

const { ContainerSC, TimeContainerSC } = styles;

export default React.memo(PRDuration);
