import { RootState } from "@/lib/store";
import type { FC } from "react";
import { useSelector } from "react-redux";

interface ChildrenAProps {}

const ChildrenA: FC<ChildrenAProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <div>Children A </div>

      <div>Count: {count}</div>
    </>
  );
};

export default ChildrenA;
