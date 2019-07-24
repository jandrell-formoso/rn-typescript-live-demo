import { createStore, applyMiddleware } from "redux";

import reducers from "../reducers";
// import { rootMiddleware } from "./middlewares";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

// exporting a createStore function which sets up the store and saga middleware
// you can add other functions here like redux-persist and then return it with store
// Ex. return { store, persistStore };
export default () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  // run sagaMiddleware after store creation.
  sagaMiddleware.run(rootSaga);
  return store;
};
