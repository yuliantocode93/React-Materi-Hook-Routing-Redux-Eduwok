import { useDispatch, useSelector } from "react-redux";

const CounterRedux = () => {
  let count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "DEC", value: 1 })}>-</button> <span>{count}</span> <button onClick={() => dispatch({ type: "INC", value: 1 })}>+</button>
    </div>
  );
};

export default CounterRedux;
