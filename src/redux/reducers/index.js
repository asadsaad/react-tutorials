import { combineReducers } from "redux";
import Alerts from "./alert";
import authstate from "./auth";
export default combineReducers({
  auth: authstate,
  alert: Alerts,
});
