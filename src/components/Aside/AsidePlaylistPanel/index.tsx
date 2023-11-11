import React from "react";
import AsidePlaylist from "components/Aside/AsidePlaylistPanel/AsidePlaylist";
import TopContainer from "components/Aside/AsidePlaylistPanel/AsideTopContainer";
import { styles } from "components/Aside/AsidePlaylistPanel/index.styles.ts";

const AsideTopContainer = () => {
  return (
    <ContainerSC>
      <TopContainer />
      <AsidePlaylist />
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(AsideTopContainer);
