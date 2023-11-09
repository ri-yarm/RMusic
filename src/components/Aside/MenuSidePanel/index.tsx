import React from "react";
import { styles } from "components/Aside/MenuSidePanel/MenuSidePanel.styles.ts";
import { asideMock } from "lib/mock/Aside/asideMock.ts";

const MenuSidePanel = () => (
  <ContainerSC>
    <ListSC>
      {asideMock.map((item, index) => (
        <LiSC key={index}>
          <item.icon />
          <TitleSC>{item.title}</TitleSC>
        </LiSC>
      ))}
    </ListSC>
  </ContainerSC>
);

const { ContainerSC, ListSC, LiSC, TitleSC } = styles;

export default React.memo(MenuSidePanel);
