import React from "react";
import BCBanner from "components/BodyContent/BCBanner";
import BCHeader from "components/BodyContent/BCHeader";
import { style } from "components/BodyContent/BodyContent.styles.ts";
import BodyContentContainer from "components/BodyContent/BodyContentContainer";

const BodyContent = () => (
  <ContainerSC>
    <BCHeader />
    <BCBanner />
    <BodyContentContainer />
  </ContainerSC>
);

const { ContainerSC } = style;

export default React.memo(BodyContent);
