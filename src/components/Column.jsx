import React, { useState } from "react";
import "./Column.css";
import Task from "./Task";
import useList from "../../hooks/useList";
import { shallow } from "zustand/shallow";

const Column = ({ state }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [drop, setDrop] = useState(false);

  const tasks = useList(
    (store) => store.tasks.filter((d) => d?.state == state),
    shallow
  );
  const addTask = useList((store) => store.addTask);
  const setDraggedTask = useList((store) => store.setDraggedTask);
  const draggedTask = useList((store) => store.draggedTask);
  const moveTask = useList((store) => store.moveTask);

  return (
    <>
      <div
        className={`columnsWrapper ${drop && "drop"}`}
        onDragOver={(e) => {
          setDrop(true);
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          setDrop(false);
          e.preventDefault();
        }}
        onDrop={() => {
          setDrop(false);
          moveTask(draggedTask, state);
          setDraggedTask(null);
        }}
      >
        <div className="header">
          <div>{state}</div>
          <button onClick={() => setOpen(true)}>Add</button>
        </div>
        {tasks?.map((d) => {
          return <Task key={d?.title} state={d?.state} title={d?.title} />;
        })}
      </div>
      {open && (
        <div className="Modal">
          <div className="contentModal">
            <input
              type="text"
              placeholder="tes"
              onChange={(e) => setText(e?.target?.value)}
              value={text}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setOpen(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Column;
