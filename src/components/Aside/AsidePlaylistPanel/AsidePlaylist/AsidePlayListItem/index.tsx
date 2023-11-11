import React from "react";
import { styles } from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayListItem/AsidePlayListItem.styles.ts";
import T600 from "UI/TypographyUI/TitleUI/600";
import P500 from "UI/TypographyUI/ParagraphUI";
import { AsidePlayListItemProps } from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayListItem/types.ts";

const AsidePlayListItem = ({ title, image, info }: AsidePlayListItemProps) => (
  <ContainerSC>
    <ImgSC src={image} />
    <TextContainerSC>
      <T600>{title}</T600>
      <P500>
        {info.podcasts} · by {info.author}
      </P500>
    </TextContainerSC>
  </ContainerSC>
);

const { ContainerSC, ImgSC, TextContainerSC } = styles;

export default React.memo(AsidePlayListItem);
