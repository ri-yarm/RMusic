import LandingPage from "../page/MainPage";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const MainLayout = () => (
  <div style={{ background: ColorsScheme.BACKDOOR }}>
    <LandingPage />
  </div>
);

export default MainLayout;
