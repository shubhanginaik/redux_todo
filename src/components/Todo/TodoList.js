import React, {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import * as actionTypes from '../store/actions';

import classes from "./TodoList.module.css";


const TodoList = () => {
  
  const notes=useSelector(state =>state.notes);
  const [filteredValue,setFiteredValue]=useState();
  const [filterList, setFilterList] = useState(notes)

  const dispatch=useDispatch();
  

  const removeHandler = (id) => {
    console.log(id, "was clicked");
     dispatch({
      type:actionTypes.REMOVE_TODO,
      payload:id
    });
  };

 
  const doneHandler = (id) => {
    console.log(id, "was clicked");
    dispatch({
      type:actionTypes.DONE_NOTE,
      payload:id,
    });
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <select name="done" defaultValue="all" onChange={filterHandler}>
        <option>Done</option>
        <option>Not Done</option>
        <option value="">All</option>
      </select>
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
