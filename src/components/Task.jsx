import React from "react";
import "./Task.css";
import useList from "../../hooks/useList";

const Task = ({ state, title }) => {
  const delTask = useList((store) => store.delTask);
  const setDraggedTask = useList((store) => store.setDraggedTask);

  return (
    <div
      className="taskWrapper"
      draggable
      onDragStart={() => setDraggedTask(title)}
    >
      <div className="">{title}</div>
      <div className="states">
        <button onClick={() => delTask(title)}>del</button>
        <div className={state}>{state}</div>
      </div>
    </div>
  );
};

export default Task;
