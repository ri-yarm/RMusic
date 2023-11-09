import React from "react";
import { styles } from "components/Aside/MenuSidePanel/MenuSidePanel.styles.ts";
import { asideMock } from "lib/mock/Aside/asideMock.ts";
import T600 from "UI/TypographyUI/600";

const MenuSidePanel = () => (
  <ContainerSC>
    <ListSC>
      {asideMock.map((item, index) => (
        <LiSC key={index}>
          <item.icon />
          <T600>{item.title}</T600>
        </LiSC>
      ))}
    </ListSC>
  </ContainerSC>
);

const { ContainerSC, ListSC, LiSC } = styles;

export default React.memo(MenuSidePanel);
