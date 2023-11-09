import React from "react";
import { styles } from "./MainPage.styles.ts";
import Aside from "components/Aside";

const LandingPage = () => (
  <SectionSC>
    <Aside />
    {/*<h1>page</h1>*/}
  </SectionSC>
);

const { SectionSC } = styles;

export default React.memo(LandingPage);
