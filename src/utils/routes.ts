import { createAppContainer, createStackNavigator } from "react-navigation";

// feature imports
import TodoList from "../feature/todo/containers/TodoList";
import AddTodo from "../feature/todo/containers/AddTodo";

const TodoStack = createStackNavigator({
  Todo: {
    screen: TodoList,
    navigationOptions: {
      title: "Todo"
    }
  },
  AddTodo: {
    screen: AddTodo,
    navigationOptions: {
      title: "Add Todo"
    }
  }
});

export default createAppContainer(TodoStack);
