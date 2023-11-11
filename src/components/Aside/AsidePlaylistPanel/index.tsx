import React from "react";
import TopContainer from "components/Aside/AsidePlaylistPanel/AsideTopContainer";
import { styles } from "components/Aside/AsidePlaylistPanel/index.styles.ts";
import AsidePlaylist from "components/Aside/AsidePlaylistPanel/AsidePlaylist";

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
