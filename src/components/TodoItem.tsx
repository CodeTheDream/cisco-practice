import React from "react";
import { Todo } from "../types/Todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
   return (
      <li>{todo.task}</li> // idea: add checkbox to mark as finished. If todo.finished, put a check mark
   )
}

export default TodoItem;