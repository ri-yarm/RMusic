import LandingPage from "../page/MainPage";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import styled from "styled-components";
import { Fonts } from "styles/Namespace/Fonts.ts";

const MainLayout = () => (
  <LayoutSC>
    <LandingPage />
  </LayoutSC>
);

const LayoutSC = styled.div`
  width: 100%;
  height: 100%;

  font-family: ${Fonts.MAIN};

  background: ${ColorsScheme.BACKDOOR};
`;

export default MainLayout;
