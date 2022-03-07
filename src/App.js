import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import {initNotes} from './components/store/reducer';
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

const App = () => {
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(initNotes())
  },[])
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
