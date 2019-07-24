import { createStore, applyMiddleware } from "redux";

import reducers from "../reducers";
// import { rootMiddleware } from "./middlewares";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    reducers,
    // TODO: SAGA - add root saga middleware
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
