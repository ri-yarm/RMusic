import React from "react";
import BCCAside from "components/BodyContent/BodyContentContainer/BCCAside";
import BCCControl from "components/BodyContent/BodyContentContainer/BCCControl";
import BCCPlayList from "components/BodyContent/BodyContentContainer/BCCPlayList";
import { styles } from "components/BodyContent/BodyContentContainer/index.styles.ts";

const BodyContentContainer = () => (
  <ContainerSC>
    <FlexContainerSC>
      <BCCControl />
      <BCCPlayList />
    </FlexContainerSC>
    <BCCAside />
  </ContainerSC>
);

const { ContainerSC, FlexContainerSC } = styles;

export default React.memo(BodyContentContainer);
