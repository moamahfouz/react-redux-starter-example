import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
// we could have another reducer which is testReducer for example

const reducers = combineReducers({
  account: accountReducer
});

export default reducers;
