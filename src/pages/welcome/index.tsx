import { increment, selectCounter } from "@/lib/store/slices/counterSlice";
import { Button } from "antd";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="hidden">
        Welcome to X-DashBoard!
        {AXIOS_BASE_URL}
      </div>
      <div>
        <Button onClick={() => dispatch(increment())}>{count}</Button>
      </div>
    </>
  );
};

export default Welcome;
