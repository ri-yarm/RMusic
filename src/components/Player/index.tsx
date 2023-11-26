import React from "react";
import NextStepIcon from "assets/icons/player/nextStepIcon.svg";
// import PauseIcon from "assets/icons/player/pauseIcon.svg";
import PlayIcon from "assets/icons/player/playIcon.svg";
import PrevStepIcon from "assets/icons/player/prevStepIcon.svg";
import RepeatIcon from "assets/icons/player/repeatIcon.svg";
import ShuffleIcon from "assets/icons/player/shuffleIcon.svg";
import VolumeIcon from "assets/icons/player/volumeIcon.svg";
import CreateBusinessImg from "assets/images/BodyContent/BCAside/CreateBusiness.jpg";
import { styles } from "components/Player/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import InputRageUI from "UI/InputRangeUI";
import T500 from "UI/TypographyUI/TitleUI/500";

const Player = () => (
  <ContainerSC>
    <ImgSC src={CreateBusinessImg} />
    <InfoContainerSC>
      <TextContainerSC>
        <T500>How to make your partner talk more</T500>
        <T500 color={ColorsScheme.GRAY}>Ken Adams</T500>
      </TextContainerSC>
      <ControlContainerSC>
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
      </ControlContainerSC>
      <DurationContainerSC>
        <T500>03:41</T500>
        <InputRageUI />
        <T500 color={ColorsScheme.GRAY}>12:11</T500>
      </DurationContainerSC>
      <VolumeContainerSC>
        <ButtonImgUI padding={0}>
          <VolumeIcon />
        </ButtonImgUI>
        <InputRageUI style={{ width: "50%" }} />
      </VolumeContainerSC>
    </InfoContainerSC>
  </ContainerSC>
);

const {
  ContainerSC,
  ImgSC,
  InfoContainerSC,
  TextContainerSC,
  ControlContainerSC,
  DurationContainerSC,
  VolumeContainerSC,
} = styles;

export default React.memo(Player);
