import React from "react";
import { style } from "components/Aside/Aside.styles.ts";
import AsideMenuPanel from "components/Aside/AsideMenuPanel";
import AsidePlaylistPanel from "components/Aside/AsidePlaylistPanel";

const Aside = () => (
  <ContainerSC>
    <AsideMenuPanel />
    <AsidePlaylistPanel />
  </ContainerSC>
);

const { ContainerSC } = style;

export default React.memo(Aside);
