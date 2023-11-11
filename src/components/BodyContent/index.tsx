import React from "react";
import BCHeader from "components/BodyContent/BCHeader";
import { style } from "components/BodyContent/BodyContent.styles.ts";
import T600 from "UI/TypographyUI/TitleUI/600";

const BodyContent = () => (
  <ContainerSC>
    <BCHeader />
    <T600>fdfdf</T600>
  </ContainerSC>
);

const { ContainerSC } = style;

export default React.memo(BodyContent);
