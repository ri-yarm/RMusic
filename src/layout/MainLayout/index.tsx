import LandingPage from "../../page/MainPage";
import { styles } from "layout/MainLayout/MainLayout.styles.ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/styles.ts";

const MainLayout = () => (
  <LayoutSC>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  </LayoutSC>
);

const { LayoutSC } = styles;

export default MainLayout;
