import LandingPage from "../page/MainPage";
import { ColorsNamespace } from "styles/Namespace/ColorsNamespace.ts";

const MainLayout = () => (
  <div style={{ background: ColorsNamespace.BACKDOOR }}>
    <LandingPage />
  </div>
);

export default MainLayout;
