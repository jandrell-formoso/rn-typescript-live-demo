import { connect } from "react-redux";
import AddTodo from '../screens/AddTodo';
import { addTodo } from "../../../actions/todoActions";


const mapStateToProps = ({ todo }) => ({
  todos: todo.todos,
})

const mapDispatchToProps = {
  // add actions here
  addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);