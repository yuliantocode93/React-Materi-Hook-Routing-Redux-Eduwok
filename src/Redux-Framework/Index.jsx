import { Provider } from "react-redux";
import CounterRedux from "./pembahasan/Counter";
import store from "./app/store";

const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </div>
  );
};

export default Redux;
