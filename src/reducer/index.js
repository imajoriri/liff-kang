import { createStore, applyMiddleware, combineReducers } from "redux";

import votePage from "./votePage";

const reducer = combineReducers({
  votePage
});

export default reducer;
