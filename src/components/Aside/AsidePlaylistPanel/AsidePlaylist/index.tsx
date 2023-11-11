import React from "react";
import { styles } from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayList.styles.ts";
import AsidePlayListItem from "components/Aside/AsidePlaylistPanel/AsidePlaylist/AsidePlayListItem";
import { asidePlaylistMock } from "lib/mock/Aside/asidePlaylistMock.ts";

const AsidePlayList = () => (
  <ContainerSC>
    {asidePlaylistMock.map((item, index) => (
      <AsidePlayListItem {...item} key={index} />
    ))}
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(AsidePlayList);
