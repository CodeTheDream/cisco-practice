import React, { ChangeEvent, FormEvent, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoValue, setTodoValue] = useState(""); //typescript infers this is a string

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos((previousTodos) => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false,
      },
    ]);

    setTodoValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  return (
    <>
      <h1>Cisco To-Do List</h1>

      <TodoList todos={todos} />
      <TodoForm onSubmit={handleSubmit} onInputChange={handleChange} inputValue={todoValue} />
    </>
  );
}

export default App;
