import type { FC } from "react";
import RoutesConfig from "./lib/router";
import ProviderConfig from "./components/config/ProviderConfig";

const App: FC<unknown> = () => (
  <ProviderConfig>
    <RoutesConfig />
  </ProviderConfig>
);

export default App;
