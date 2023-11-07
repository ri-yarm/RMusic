import LandingPage from "../../page/MainPage";
import { styles } from "layout/MainLayout/MainLayout.styles.ts";

const MainLayout = () => (
  <LayoutSC>
    <LandingPage />
  </LayoutSC>
);

const { LayoutSC } = styles;

export default MainLayout;
