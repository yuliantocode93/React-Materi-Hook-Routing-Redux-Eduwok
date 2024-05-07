import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/Features/Counter/action";

const CounterRedux = () => {
  let count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement(1))}>-</button> <span>{count}</span> <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default CounterRedux;
