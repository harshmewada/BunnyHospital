import { combineReducers } from "redux";
import users from "./users";
import util from "./utils";

//decide to leave it for demostration
const reducers = combineReducers({
  user: users,
  util,
});

export default reducers;
