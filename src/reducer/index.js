import { createStore, applyMiddleware, combineReducers } from "redux";

import sample from "./sample";

const reducer = combineReducers({
  sample
});

export default reducer;
