import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import counterReducer from "./Features/Counter/reducer";
import { thunk } from "redux-thunk";

let rootReducers = combineReducers({
  counter: counterReducer,
});

let composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(rootReducers, composeEnhanchers(applyMiddleware(thunk)));
export default store;
