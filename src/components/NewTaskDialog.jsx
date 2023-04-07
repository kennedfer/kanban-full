import { useRef, useState } from "react";
import { Subtask } from "./Subtask";

export const NewTaskDialog = ({ create, options, opacity, hide }) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const statusRef = useRef();
  const [subtasks, setSubtasks] = useState([]);
  const pointerEvents = opacity == 0 ? "none" : "auto";

  const createSubtask = () => {
    let subtaskName = prompt("Nova subtarefa");
    let newSubtask = {
      name: subtaskName,
      done: false,
    };

    subtasks.push(newSubtask);
    setSubtasks([...subtasks]);
  };

  const createTask = () => {
    let newTask = {
      name: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      subtasks,
    };

    console.log(statusRef.current.value);
    create(newTask, statusRef.current.value);
    hide();
  };

  return (
    <div
      style={{
        opacity,
        pointerEvents,
      }}
      className="dialog-container"
    >
      <h1>Nova Tarefa</h1>
      <div>
        <label>Título</label>
        <input
          placeholder="Ex: Estudar inglês"
          className="input"
          ref={titleInputRef}
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <label>Descrição</label>
        <textarea
          placeholder="Ex: Estudar o verbo to-be"
          ref={descriptionInputRef}
          className="input"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div>
        <label>Subtarefas</label>
        <div className="subtasks-container">
          {subtasks.map((subtask) => (
            <Subtask subtask={subtask} />
          ))}
        </div>
        <button className="secondary-button" onClick={createSubtask}>
          Nova subtarefa
        </button>
      </div>
      <div>
        <label>Status</label>
        <select className="input" ref={statusRef} name="" id="">
          {options.map((opt, i) => (
            <option key={i} value={i}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <button className="primary-button" onClick={createTask}>
        Criar Tarefa
      </button>
    </div>
  );
};
