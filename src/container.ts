import { getTodo } from './actions/todoActions';

// AppContainer for react redux connect
export const mapStateToProps = state => ({
  todos: state.todo.todos,
})

export const mapDispatchToProps = {
  // add actions here.
  getTodo,
};
