import React from "react";
import DownloadIcon from "assets/icons/common/downloadIcon.svg";
import ShareIcon from "assets/icons/common/shareIcon.svg";
import PauseIcon from "assets/icons/player/pauseIcon.svg";
import { styles } from "components/BodyContent/BodyContentContainer/BCCControl/BCCCButons/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";

const BCCCButtons = () => (
  <ContainerSC>
    <ButtonImgUI
      padding={18}
      borderRadius={100}
      background={ColorsScheme.VIOLET}
      styles={{ height: "60px" }}>
      <PauseIcon />
    </ButtonImgUI>
    <ButtonImgUI
      padding={10}
      borderRadius={100}
      background={ColorsScheme.MAIN}
      styles={{ width: "40px", display: "flex" }}>
      <ShareIcon />
    </ButtonImgUI>
    <ButtonImgUI
      padding={10}
      borderRadius={100}
      background={ColorsScheme.MAIN}
      styles={{ width: "40px", display: "flex" }}>
      <DownloadIcon />
    </ButtonImgUI>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(BCCCButtons);
