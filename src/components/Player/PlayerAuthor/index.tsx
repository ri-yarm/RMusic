import React from "react";
import { styles } from "components/Player/PlayerAuthor/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import T500 from "UI/TypographyUI/TitleUI/500";

const PlayAuthor = () => (
  <ContainerSC>
    <T500>How to make your partner talk more</T500>
    <T500 color={ColorsScheme.GRAY}>Ken Adams</T500>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PlayAuthor);
