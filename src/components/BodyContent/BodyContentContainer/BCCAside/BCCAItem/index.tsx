import React from "react";
import PlayIcon from "assets/icons/player/playIcon.svg";
import { styles } from "components/BodyContent/BodyContentContainer/BCCAside/BCCAItem/index.styles.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import T500 from "UI/TypographyUI/TitleUI/500";

interface BCCAItemsProps {
  title: string;
  img: string;
}

const BCCAItems = ({ title, img }: BCCAItemsProps) => (
  <ContainerSC>
    <ImgSC src={img} alt={title} />
    <TextContainerSC>
      <ButtonImgUI
        padding={7}
        background={ColorsScheme.VIOLET}
        styles={{ width: "30px", height: "30px" }}>
        <PlayIcon />
      </ButtonImgUI>
      <T500 fontSize={14}>{title}</T500>
    </TextContainerSC>
  </ContainerSC>
);

const { ContainerSC, ImgSC, TextContainerSC } = styles;

export default React.memo(BCCAItems);
