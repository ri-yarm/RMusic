import React from "react";
import BCCPTableBody from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableBody";
import BCCPTableHead from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableHead";
import { styles } from "components/BodyContent/BodyContentContainer/BCCPlayList/index.styles.ts";
import { BDPlaylistMock } from "lib/mock/BodyContent/BDPlaylistMock.ts";
import { BDPTableHeadMock } from "lib/mock/BodyContent/BDPTableHead.ts";

const BCCPlayList = () => (
  <>
    <ContainerSC>
      <BCCPTableHead content={BDPTableHeadMock} />
      <BCCPTableBody content={BDPlaylistMock} />
    </ContainerSC>
  </>
);

const { ContainerSC } = styles;

export default React.memo(BCCPlayList);
