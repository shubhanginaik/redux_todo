import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../store/reducer';

import * as actionTypes from '../store/actions';

import classes from './AddTodo.module.css';
import Button from '../UI/Button';

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: '', task: '' });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(createNote(todo));
  };

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label>Title</label>
        <input type="text" name="title" onChange={changeHandler} />
      </div>
      <div>
        <label>Task</label>
        <input type="text" name="task" onChange={changeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;