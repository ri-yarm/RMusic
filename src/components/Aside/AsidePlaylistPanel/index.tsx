import React from "react";
import TopContainer from "components/Aside/AsidePlaylistPanel/AsideTopContainer";
import { styles } from "components/Aside/AsidePlaylistPanel/index.styles.ts";

const AsideTopContainer = () => {
  return (
    <ContainerSC>
      <TopContainer />
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(AsideTopContainer);
