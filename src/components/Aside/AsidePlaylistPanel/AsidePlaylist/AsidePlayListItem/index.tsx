import React from "react";
import { styles } from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayListItem/AsidePlayListItem.styles.ts";
import { AsidePlayListItemProps } from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayListItem/types.ts";
import AvatarUI from "UI/AvatarUI";
import P500 from "UI/TypographyUI/ParagraphUI";
import T600 from "UI/TypographyUI/TitleUI/600";

const AsidePlayListItem = ({ title, image, info }: AsidePlayListItemProps) => (
  <ContainerSC>
    <AvatarUI
      image={image}
      borderRadius={10}
      styles={{ marginRight: "10px" }}
    />
    <TextContainerSC>
      <T600>{title}</T600>
      <P500>
        {info.podcasts} · by {info.author}
      </P500>
    </TextContainerSC>
  </ContainerSC>
);

const { ContainerSC, TextContainerSC } = styles;

export default React.memo(AsidePlayListItem);
