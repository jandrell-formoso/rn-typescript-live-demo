import { connect } from "react-redux";
import TodoList from '../screens/TodoList';
import { todoListSelector } from "../selectors/todoSelector";

const mapStateToProps = ({ todo }) => ({
  // you can add selectors here if you have extra functions
  // to execute while getting the state
  todos: todoListSelector({ todo }),
})


const mapDispatchToProps = {
  // add actions here
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);