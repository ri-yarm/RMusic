import React from "react";
import ListMusicIcon from "assets/icons/common/listMusicIcon.svg";
import SearchIcon from "assets/icons/common/searchIcon.svg";
import PlucIcon from "assets/icons/common/plusIcon.svg";
import T600 from "UI/TypographyUI/TitleUI/600";
import { styles } from "components/Aside/AsidePlaylistPanel/AsideTopContainer/AsideTopContainer.styles.ts";

const TopContainer = () => (
  <ContainerSC>
    <ListSC gap={16}>
      <ListMusicIcon />
      <T600>Your playlist (9)</T600>
    </ListSC>
    <ListSC gap={14}>
      <SearchIcon />
      <PlucIcon />
    </ListSC>
  </ContainerSC>
);

const { ContainerSC, ListSC } = styles;

export default React.memo(TopContainer);
