import React from "react";
import { useSelector } from "react-redux";


import classes from "./TodoList.module.css";

const TodoList = () => {

  const notes=useSelector(state =>state.notes);
  // const something=useSelector(state =>state.something)

  const removeHandler = (id) => {
    console.log(id, "was clicked");
  };
  const doneHandler = (id) => {
    console.log(id, "was clicked");
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {/* <h2>{something}</h2> */}
      {notes.map((note) => {
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
