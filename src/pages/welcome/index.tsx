import { increment, selectCounter } from "@/store/slices/counterSlice";
import { Button } from "antd";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <>
      Welcome to X-DashBoard!
      <div>
        <Button onClick={() => dispatch(increment())}>{count}</Button>
      </div>
    </>
  );
};

export default Welcome;
