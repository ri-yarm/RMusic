import React from "react";
import NextStepIcon from "assets/icons/player/nextStepIcon.svg";
import PlayIcon from "assets/icons/player/playIcon.svg";
import PrevStepIcon from "assets/icons/player/prevStepIcon.svg";
import RepeatIcon from "assets/icons/player/repeatIcon.svg";
import ShuffleIcon from "assets/icons/player/shuffleIcon.svg";
import { styles } from "components/Player/PlayerControl/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";

const PlayerControl = () => (
  <ContainerSC>
    <ButtonImgUI padding={0}>
      <ShuffleIcon />
    </ButtonImgUI>{" "}
    <ButtonImgUI padding={0}>
      <PrevStepIcon />
    </ButtonImgUI>
    <ButtonImgUI
      background={ColorsScheme.VIOLET}
      borderRadius={100}
      styles={{ display: "flex", alignItems: "center" }}
      padding={15}>
      <PlayIcon />
    </ButtonImgUI>
    <ButtonImgUI padding={0}>
      <NextStepIcon />
    </ButtonImgUI>
    <ButtonImgUI padding={0}>
      <RepeatIcon />
    </ButtonImgUI>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PlayerControl);
