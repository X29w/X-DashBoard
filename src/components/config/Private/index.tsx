import type { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { ConditionalRender } from "x-react-components-lib";

const Private: FC<PropsWithChildren> = ({ children }) => (
  <ConditionalRender
    condition={true}
    fallback={<Navigate to="/login" />}
  >
    {children}
  </ConditionalRender>
);

export default Private;
