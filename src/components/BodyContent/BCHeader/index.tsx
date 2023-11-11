import React from "react";
import BackIcon from "assets/icons/common/backIcon.svg";
import BellIcon from "assets/icons/common/bellIcon.svg";
import { style } from "components/BodyContent/BCHeader/BCHeader.styles.ts";
import BCHSearch from "components/BodyContent/BCHeader/BCHSearch";
import BCProfile from "components/BodyContent/BCHeader/BCProfile";
import { Sizes } from "styles/Namespace/Sizes.ts";
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
    <BCProfile />
  </ContainerSC>
);

const { ContainerSC } = style;

export default React.memo(BCHeader);
