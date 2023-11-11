import React from "react";
import MenuSidePanel from "components/Aside/AsideMenuPanel";
import styled from "styled-components";
import AsidePlaylistPanel from "components/Aside/AsidePlaylistPanel";

const Aside = () => (
  <ContainerSC>
    <MenuSidePanel />
    <AsidePlaylistPanel />
  </ContainerSC>
);

const ContainerSC = styled.aside``;

export default React.memo(Aside);
