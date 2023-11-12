import React from "react";
import { styles } from "components/Aside/AsideMenuPanel/MenuSidePanel.styles.ts";
import { asideMenuMock } from "lib/mock/Aside/asideMenuMock.ts";
import T600 from "UI/TypographyUI/TitleUI/600";

const AsideMenuPanel = () => (
  <ContainerSC>
    <ListSC>
      {asideMenuMock.map((item, index) => (
        <LiSC key={index}>
          <item.icon />
          <T600>{item.title}</T600>
        </LiSC>
      ))}
    </ListSC>
  </ContainerSC>
);

const { ContainerSC, ListSC, LiSC } = styles;

export default React.memo(AsideMenuPanel);
