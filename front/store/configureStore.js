import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers/index";

// store, reducer
const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "boogiup",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "dev",
});

export default wrapper;
