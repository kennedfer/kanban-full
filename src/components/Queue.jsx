import { Task } from "./Task";

export const Queue = ({
  tasks,
  name,
  onClickTask,
  currentBoard,
  swapTasks,
}) => {
  return (
    <div className="queue">
      <div className="queue-title">{`${name.toUpperCase()} (${
        tasks.length
      })`}</div>
      {tasks.map((task, i) => (
        <Task
          swapTasks={swapTasks}
          index={i}
          onClickTask={onClickTask}
          key={i}
          task={task}
          currentBoard={currentBoard}
        />
      ))}
    </div>
  );
};
