import React from "react";
import BCCAside from "components/BodyContent/BodyContentContainer/BCCAside";
import BCCControl from "components/BodyContent/BodyContentContainer/BCCControl";
import BCCPlayList from "components/BodyContent/BodyContentContainer/BCCPlayList";
import { styles } from "components/BodyContent/BodyContentContainer/index.styles.ts";

const BodyContentContainer = () => (
  <ContainerSC>
    <BCCControl />
    <BCCPlayList />
    <BCCAside />
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(BodyContentContainer);
