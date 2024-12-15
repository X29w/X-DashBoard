import { ConditionalRender } from "@x-industry/x-react-components";
import type { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const Private: FC<PropsWithChildren> = ({ children }) => (
  <ConditionalRender condition={true} fallback={<Navigate to="/login" />}>
    {children}
  </ConditionalRender>
);

export default Private;
