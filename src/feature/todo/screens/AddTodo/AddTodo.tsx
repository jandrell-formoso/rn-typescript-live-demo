import React, { Fragment, useState, useEffect } from "react";
import { FAB, Button } from "react-native-paper";
import { NavigationInjectedProps } from "react-navigation";
import {
  TextInput,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { Surface } from "react-native";

interface IProps {
  addTodo: (todo: any) => void,
}

const AddTodo = ({ navigation, addTodo }: NavigationInjectedProps & IProps) => {
  const { todo, setTitle, setContent } = useAddTodoInput();
  return (
    <Fragment>
      <TextInput
        label="Title"
        value={todo.title}
        onChangeText={val => setTitle(val)}
      />
      <TextInput 
        label="Content"
        value={todo.content}
        onChangeText={val => setContent(val)} />
      <Button
        onPress={() => {
          addTodo(todo)
          // go back to previous route
          navigation.pop()
        }}
      >
        Add Todo
      </Button>
    </Fragment>
  );
};

// can be moved to a separate file and folder (ex: hooks/inputHooks)
// use hooks if you need a ui state change that can be shared in other components
// use local state if it's only used in one component
const useAddTodoInput = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const todo = {
    title,
    content,
  }

  return {
    todo,
    setTitle,
    setContent,
  }
}

export default AddTodo;
