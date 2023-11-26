import React from "react";
import Aside from "components/Aside";
import BodyContent from "components/BodyContent";

import Player from "../../components/Player/index.tsx";

import { styles } from "./MainPage.styles.ts";

const LandingPage = () => (
  <>
    <SectionSC>
      <Aside />
      <BodyContent />
    </SectionSC>
    <Player />
  </>
);

const { SectionSC } = styles;

export default React.memo(LandingPage);
