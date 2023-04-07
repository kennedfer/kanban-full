import { useRef } from "react";
import { Subtask } from "./Subtask";

export const TaskDialog = ({ task, options, changeStatus, opacity, hide }) => {
  const statusRef = useRef();
  const pointerEvents = opacity == 0 ? "none" : "auto";

  const onStatusChange = () => {
    changeStatus(task, task.currentBoard, statusRef.current.value);
    // console.log(console.log(task.currentBoard));
  };

  const clickOnBack = (evt) => {
    console.log(evt);

    if (evt.target.id == "dialog-back") hide();
  };

  return (
    <div
      style={{
        opacity,
        pointerEvents,
      }}
      className="full-page-absolute"
      id="dialog-back"
      onClick={clickOnBack}
    >
      <div className="task-dialog">
        <div>
          <h1>{task.name}</h1>
          <span></span>
          <button>|</button>
        </div>
        <textarea disabled className="input">
          {task.description}
        </textarea>
        <div>
          <label>Subtarefas</label>
          <div className="subtasks-container">
            {task.subtasks.map((subtask) => (
              <Subtask subtask={subtask} />
            ))}
          </div>
        </div>
        <div>
          <div>status</div>
          <select
            className="input"
            onChange={onStatusChange}
            ref={statusRef}
            name=""
            id=""
          >
            {options.map((opt, i) => (
              <option key={i} value={i}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
