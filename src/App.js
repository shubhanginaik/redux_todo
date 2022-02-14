import React from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
