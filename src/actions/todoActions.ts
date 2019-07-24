import { actionTypes } from "./actionTypes";

export const getTodo = () => ({
  type: actionTypes.GET_TODO,
})

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo,
})
