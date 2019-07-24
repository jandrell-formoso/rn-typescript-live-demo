import React, { Fragment } from "react";
import { FAB, Button } from "react-native-paper";
import { NavigationInjectedProps, FlatList } from "react-navigation";
import styles from "./styles";
import { SafeAreaView, NativeModules } from "react-native";
import { TodoItem } from "../../components/TodoItem";

interface IProps {
  todos: any
}

const TodoList = ({ navigation, todos }: NavigationInjectedProps & IProps) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={({ item, index }: any) => (
            <TodoItem title={item.title} content={item.content} />
          )}
        />
        <Button
          style={styles.addButton}
          onPress={() => navigation.navigate("AddTodo")}
        >
          New Todo
        </Button>
      </SafeAreaView>
    </Fragment>
  );
};

export default TodoList;
