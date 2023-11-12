import React from "react";
import BackIcon from "assets/icons/common/backIcon.svg";
import BellIcon from "assets/icons/common/bellIcon.svg";
import PhotoTemplate from "assets/images/AsidePlayList/BussinessImp.jpg";
import { style } from "components/BodyContent/BCHeader/BCHeader.styles.ts";
import BCHSearch from "components/BodyContent/BCHeader/BCHSearch";
import { Sizes } from "styles/Namespace/Sizes.ts";
import AvatarUI from "UI/AvatarUI";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";

const BCHeader = () => (
  <ContainerSC>
    <ButtonImgUI padding={[Sizes.DEFAULT, 20]}>
      <BackIcon />
    </ButtonImgUI>
    <BCHSearch />
    <ButtonImgUI padding={Sizes.DEFAULT}>
      <BellIcon />
    </ButtonImgUI>
    <AvatarUI image={PhotoTemplate} borderRadius={Sizes.DEFAULT} bigSize />
  </ContainerSC>
);

const { ContainerSC } = style;

export default React.memo(BCHeader);
