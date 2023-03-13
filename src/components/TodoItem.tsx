import React from "react";
import { Todo } from "../types/Todo";
import styled from 'styled-components';

const TodoItem = ({ todo }: { todo: Todo }) => {

   const ItemText = styled.li`
      font-size: 1.5em;
      color: purple;
      `;

   return (
      <ItemText>{todo.task}</ItemText> // idea: add checkbox to mark as finished. If todo.finished, put a check mark
   )
}

export default TodoItem;