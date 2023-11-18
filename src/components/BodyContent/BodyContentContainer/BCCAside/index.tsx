import React from "react";
import BCCAItems from "components/BodyContent/BodyContentContainer/BCCAside/BCCAItem";
import { styles } from "components/BodyContent/BodyContentContainer/BCCAside/index.styles.ts";
import { BDAsideMock } from "lib/mock/BodyContent/BDAsideMock.ts";
import T500 from "UI/TypographyUI/TitleUI/500";

const BCCAside = () => (
  <ContainerSC>
    <T500 style={{ marginBottom: "16px" }}>{BDAsideMock.title}</T500>

    <ListSC>
      {BDAsideMock.content.map((item, index) => (
        <li>
          <BCCAItems key={index} {...item} />
        </li>
      ))}
    </ListSC>
  </ContainerSC>
);

const { ContainerSC, ListSC } = styles;

export default React.memo(BCCAside);
