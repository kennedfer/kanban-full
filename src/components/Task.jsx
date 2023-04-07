import { useEffect, useState } from "react";

export const Task = ({ task, onClickTask, currentBoard, index, swapTasks }) => {
  const [subtasksDone, setSubtasksDone] = useState();
  task.currentBoard = currentBoard;

  useEffect(() => {
    if (task.subtasks) {
      let numSubstacksDone = task.subtasks.filter((sub) => sub.done).length;
      setSubtasksDone(numSubstacksDone);
    }
  }, []);

  const drag = (evt) => {
    console.log(index);
    evt.dataTransfer.setData("index", index);
  };

  const drop = (evt) => {
    let selectedIndex = evt.dataTransfer.getData("index");

    swapTasks(currentBoard, selectedIndex, index);
  };

  const allowDrop = (evt) => {
    evt.preventDefault();
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={drop}
      onDragStart={drag}
      draggable
      onClick={() => onClickTask(task)}
      className="task"
    >
      <h3>{task.name}</h3>

      {task.subtasks && (
        <div className="text-small">
          {subtasksDone} of {task.subtasks.length} subtasks
        </div>
      )}
    </div>
  );
};
