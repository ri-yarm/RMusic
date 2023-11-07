import LandingPage from "../page/MainPage";
import { ColorsNamespace } from "lib/Namespace/ColorsNamespace.ts";

const MainLayout = () => (
  <div style={{ background: ColorsNamespace.BACKDOOR }}>
    <LandingPage />
  </div>
);

export default MainLayout;
