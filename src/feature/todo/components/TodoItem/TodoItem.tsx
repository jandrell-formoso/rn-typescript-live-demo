import React, { Fragment } from "react";
import { Card } from "react-native-paper";

const TodoItem = ({ title, content }) => {
  return (
    <Fragment>
      <Card>
        <Card.Title title={title} subtitle={content} />
      </Card>
    </Fragment>
  );
};

export default TodoItem;
