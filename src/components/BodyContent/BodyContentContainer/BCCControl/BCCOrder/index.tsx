import React from "react";
import AngleIcon from "assets/icons/common/angleSmallIcon.svg";
import SearchIcon from "assets/icons/common/searchIcon.svg";
import { styles } from "components/BodyContent/BodyContentContainer/BCCControl/BCCOrder/index.styles.ts";
import T500 from "UI/TypographyUI/TitleUI/500";

const BCCOrder = () => (
  <ContainerSC>
    <SearchIcon />
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <T500>Order by</T500>
      <AngleIcon />
    </div>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(BCCOrder);
