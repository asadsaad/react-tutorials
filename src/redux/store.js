import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootreducer from "./reducers";
const middleware = [thunk];
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
