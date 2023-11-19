import React from "react";
import BCCPTableBody from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableBody";
import BCCPTableHead from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableHead";
import { styles } from "components/BodyContent/BodyContentContainer/BCCPlayList/index.styles.ts";
import { BDPTableHeadMock } from "lib/mock/BodyContent/BDPTableHead.ts";

const BCCPlayList = () => (
  <>
    <ContainerSC>
      <BCCPTableHead content={BDPTableHeadMock} />
      <BCCPTableBody />
    </ContainerSC>
  </>
);

const { ContainerSC } = styles;

export default React.memo(BCCPlayList);
