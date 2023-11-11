import React from "react";
import AsideMenuPanel from "components/Aside/AsideMenuPanel";
import AsidePlaylistPanel from "components/Aside/AsidePlaylistPanel";
import styled from "styled-components";

const Aside = () => (
  <ContainerSC>
    <AsideMenuPanel />
    <AsidePlaylistPanel />
  </ContainerSC>
);

const ContainerSC = styled.aside``;

export default React.memo(Aside);
