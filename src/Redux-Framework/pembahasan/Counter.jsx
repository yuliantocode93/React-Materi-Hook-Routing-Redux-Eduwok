import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, incrementWithCheckingAction } from "../app/Features/Counter/action";

const CounterRedux = () => {
  let count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button> <span>{count}</span> <button onClick={() => dispatch(incrementWithCheckingAction(1))}>+</button>
    </div>
  );
};

export default CounterRedux;
