import { Queue } from "./Queue";

export const Board = ({ board, onClickTask, swapTasks }) => {
  return (
    <div className="board">
      {board.map((queue, i) => (
        <Queue
          swapTasks={swapTasks}
          onClickTask={onClickTask}
          key={i}
          name={queue.name}
          tasks={queue.tasks}
          currentBoard={i}
        />
      ))}
      <div style={{ height: "100px" }}></div>
    </div>
  );
};
