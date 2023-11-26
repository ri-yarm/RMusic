import React from "react";
import VolumeIcon from "assets/icons/player/volumeIcon.svg";
import { styles } from "components/Player/PlayerRange/PRVolume/index.styles.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import InputRageUI from "UI/InputRangeUI";

const PRVolume = () => (
  <ContainerSC>
    <ButtonImgUI padding={0}>
      <VolumeIcon />
    </ButtonImgUI>
    <InputRageUI style={{ width: "50%" }} />
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PRVolume);
