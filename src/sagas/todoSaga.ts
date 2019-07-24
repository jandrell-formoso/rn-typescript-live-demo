import { call, put, takeLatest, select } from "redux-saga/effects";
import { actionTypes } from "../actions/actionTypes";

function* addTodo(action: any) {
  const todos: Array<any> = yield select(({ todo }) => todo.todos);
  const lastTodoId = todos.length + 1;
  const payload = action.payload;
  yield put({
    type: actionTypes.SAVE_TODO,
    todos: [
      ...todos,
      {
        id: lastTodoId,
        title: payload.title,
        content: payload.content,
      },
    ],
  });
}

export function* watchTodoSaga() {
  yield takeLatest(actionTypes.ADD_TODO, addTodo);
}
