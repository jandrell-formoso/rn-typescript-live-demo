import { all } from "redux-saga/effects";
import { watchTodoSaga } from "./todoSaga";

export function* rootSaga() {
  yield all([watchTodoSaga()]);
}
