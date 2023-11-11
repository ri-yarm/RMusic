import React from "react";
import PhotoTemplate from "assets/images/AsidePlayList/BussinessImp.jpg";
import { styles } from "components/BodyContent/BCHeader/BCProfile/BCProfile.styles.ts";

const BCProfile = () => (
  <ContainerSC>
    <ImgSC src={PhotoTemplate} />
  </ContainerSC>
);

const { ContainerSC, ImgSC } = styles;

export default React.memo(BCProfile);
