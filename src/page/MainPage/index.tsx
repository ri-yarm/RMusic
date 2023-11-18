import React from "react";
import Aside from "components/Aside";
import BodyContent from "components/BodyContent";

import { styles } from "./MainPage.styles.ts";

const LandingPage = () => (
  <SectionSC>
    <Aside />
    <BodyContent />
  </SectionSC>
);

const { SectionSC } = styles;

export default React.memo(LandingPage);
