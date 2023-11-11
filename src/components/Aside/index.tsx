import React from "react";
import MenuSidePanel from "components/Aside/AsideMenuPanel";
import styled from "styled-components";

const Aside = () => (
  <ContainerSC>
    <MenuSidePanel />
  </ContainerSC>
);

const ContainerSC = styled.aside``;

export default React.memo(Aside);