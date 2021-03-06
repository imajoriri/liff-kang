import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/";

// store
const myMiddleware = store => next => act => {
  act.then(res => {
    next(res);
  });
};

const store = createStore(reducer, applyMiddleware(myMiddleware));
//const store = createStore(reducer);
export default store;
