import React from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
   return (
      <ul>
         {todos.map((todo) => (
            <TodoItem
               todo={{
                  task: todo.task,
                  finished: todo.finished,
               }}
            />
         ))}
      </ul>
   )
}

export default TodoList;