import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  todos: [
    { id: 1, title: "First Todo", content: "Content"},
  ]
}


export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_TODO:
    return {
      ...state,
      todos: action.todos,
    }
    default:
      return state
  }
}