import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import createSagaMiddleware from "next-redux-saga";

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    return next(action);
  };

// store, reducer
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "prod"
      ? compose(applyMiddleware(...middleware))
      : composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(reducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "dev",
});

export default wrapper;
