// combine all reducers here
import { combineReducers } from "redux";
import todoReducer from '../feature/todo/reducer';

export default combineReducers({
  todo: todoReducer
});