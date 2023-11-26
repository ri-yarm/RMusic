import React from "react";
import NextStepIcon from "assets/icons/player/nextStepIcon.svg";
import PauseIcon from "assets/icons/player/pauseIcon.svg";
import PlayIcon from "assets/icons/player/playIcon.svg";
import PrevStepIcon from "assets/icons/player/prevStepIcon.svg";
import RepeatIcon from "assets/icons/player/repeatIcon.svg";
import ShuffleIcon from "assets/icons/player/shuffleIcon.svg";
import { styles } from "components/Player/PlayerControl/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";

interface PlayerControlProps {
  isPlaying: boolean;

  handlePlayPause: () => void;
  handleStop: () => void;
}

const PlayerControl = ({
  handlePlayPause,
  handleStop,
  isPlaying,
}: PlayerControlProps) => (
  <ContainerSC>
    <ButtonImgUI padding={0}>
      <ShuffleIcon />
    </ButtonImgUI>{" "}
    <ButtonImgUI handleClick={handleStop} padding={0}>
      <PrevStepIcon />
    </ButtonImgUI>
    <ButtonImgUI
      handleClick={handlePlayPause}
      background={ColorsScheme.VIOLET}
      borderRadius={100}
      styles={{ display: "flex", alignItems: "center" }}
      padding={15}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
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
