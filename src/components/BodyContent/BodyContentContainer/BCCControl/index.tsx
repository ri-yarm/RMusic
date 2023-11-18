import React from "react";
import BCCCButtons from "components/BodyContent/BodyContentContainer/BCCControl/BCCCButons";
import BCCOrder from "components/BodyContent/BodyContentContainer/BCCControl/BCCOrder";
import { styles } from "components/BodyContent/BodyContentContainer/BCCControl/index.styles.ts";

const BCCControl = () => (
  <ContainerSC>
    <BCCCButtons />
    <BCCOrder />
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(BCCControl);
