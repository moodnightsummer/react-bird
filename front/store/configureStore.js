import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

// store, reducer
const configureStore = () => {
  const middleware = [];
  const enhancer =
    process.env.NODE_ENV === "prod"
      ? compose(applyMiddleware(...middleware))
      : composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(reducer, enhancer);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "dev",
});

export default wrapper;
