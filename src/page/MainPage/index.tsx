import React from "react";
import { styles } from "./MainPage.styles.ts";

const LandingPage = () => (
  <SectionSC>
    <h1>page</h1>
  </SectionSC>
);

const { SectionSC } = styles;

export default React.memo(LandingPage);
