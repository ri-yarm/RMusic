import React from "react";
import VolumeIcon from "assets/icons/player/volumeIcon.svg";
import VolumeLowIcon from "assets/icons/player/volumeLowIcon.svg";
import VolumeMuteIcon from "assets/icons/player/volumeMuteIcon.svg";
import { styles } from "components/Player/PlayerRange/PRVolume/index.styles.ts";
import { InputRangeVolumeProps } from "components/Player/PlayerRange/types.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import InputRageUI from "UI/InputRangeUI";

const coefficient = 0.5;

const PRVolume = ({ value, onChange, handleMute }: InputRangeVolumeProps) => {
  const volumeIcon =
    value > coefficient ? (
      <VolumeIcon />
    ) : value > 0 ? (
      <VolumeLowIcon />
    ) : (
      <VolumeMuteIcon />
    );

  return (
    <ContainerSC>
      <ButtonImgUI padding={0} handleClick={handleMute}>
        {volumeIcon}
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
};

const { ContainerSC } = styles;

export default React.memo(PRVolume);
