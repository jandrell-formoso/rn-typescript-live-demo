import { createSelector } from "reselect";

export const todoListSelector = createSelector(
  [
    // todos state function
    // you can create a function code getTodos for cleaner code and reusability
    ({ todo }) => todo.todos,
  ],
  // combiner
  // this function combines all the states that was fetched
  // above. It is converted into ...args
  (todos: Array<any>) => {
    return todos.reverse();
  },
);
