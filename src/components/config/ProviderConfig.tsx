import { store } from "@/store";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ProviderConfigProps extends PropsWithChildren {}

const ProviderConfig: FC<ProviderConfigProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderConfig;
