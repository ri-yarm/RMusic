import React from "react";
import VolumeIcon from "assets/icons/player/volumeIcon.svg";
import { styles } from "components/Player/PlayerRange/PRVolume/index.styles.ts";
import { InputRangeProps } from "components/Player/PlayerRange/types.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import InputRageUI from "UI/InputRangeUI";

const PRVolume = ({ value, onChange }: InputRangeProps) => (
  <ContainerSC>
    <ButtonImgUI padding={0}>
      <VolumeIcon />
    </ButtonImgUI>
    <InputRageUI
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={onChange}
      style={{ width: "50%" }}
    />
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PRVolume);
