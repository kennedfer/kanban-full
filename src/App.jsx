import { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { NewTaskDialog } from "./components/NewTaskDialog";
import { TaskDialog } from "./components/TaskDialog";

function App() {
  const [data, setData] = useState({});
  const [board, setBoard] = useState();
  const [newTaskOpacity, setNewTaskOpacity] = useState(0);
  const [taskDialogOpacity, setTaskDialogOpacity] = useState(0);
  const [currentTask, setCurrentTask] = useState();

  const readData = () => {
    const dataString = localStorage.getItem("data");
    const data = JSON.parse(dataString);

    setData(data);
    setBoard("tarefas");
  };

  const changeStatus = (toChangeTask, currentBoard, newBoard) => {
    let taskIndex =
      data.boards[board][currentBoard].tasks.indexOf(toChangeTask);
    let task = data.boards[board][currentBoard].tasks.splice(taskIndex, 1)[0];
    task.currentBoard = newBoard;
    data.boards[board][newBoard].tasks.push(task);

    setData({ ...data });
  };

  const createTask = (newTask, status) => {
    data.boards[board][status].tasks.push(newTask);

    console.log(newTask);
    setData({ ...data });
  };

  const showNewTaskDialog = () => {
    setNewTaskOpacity(1);
  };

  const hideNewTaskDialog = () => {
    setNewTaskOpacity(0);
  };

  const showTaskDialog = () => {
    setTaskDialogOpacity(1);
  };

  const hideTaskDialog = (evt) => {
    setTaskDialogOpacity(0);
  };

  const swapTasks = (status, selectedIndex, toIndex) => {
    let selectedTask = data.boards[board][status].tasks.at(selectedIndex);
    let toSwapTask = data.boards[board][status].tasks.at(toIndex);
    data.boards[board][status].tasks.splice(selectedIndex, 1, toSwapTask);
    data.boards[board][status].tasks.splice(toIndex, 1, selectedTask);

    setData({ ...data });
  };

  // const createBoard = () => {
  //   let name = prompt("Qual o nome da task?");
  //   let newTask = {
  //     name,
  //     description: "kenis",
  //   };

  //   data.boards[board].push(newTask);

  //   console.log(data);
  //   setData(data);
  // };

  const onClickTask = (task) => {
    setCurrentTask(task);
    showTaskDialog();
  };

  const changeBoard = (evt) => {
    console.log(evt.target.value);
    setBoard(evt.target.value);
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="app">
      {/* <div className="side-bar">
        {data.boards &&
          Object.keys(data.boards).map((board, i) => (
            <button key={i} value={board}>
              {board}
            </button>
          ))}
      </div> */}
      <main>
        <header>
          <div className="header">
            <h1>{board}</h1>
            <div></div>
            <button
              className="primary-button"
              onClick={showNewTaskDialog}
            ></button>
          </div>
        </header>
        {board && (
          <Board
            swapTasks={swapTasks}
            board={data.boards[board]}
            onClickTask={onClickTask}
          />
        )}
      </main>
      {board && (
        <NewTaskDialog
          hide={hideNewTaskDialog}
          opacity={newTaskOpacity}
          options={data.boards[board]}
          create={createTask}
        />
      )}

      {currentTask && (
        <TaskDialog
          hide={hideTaskDialog}
          task={currentTask}
          options={data.boards[board]}
          changeStatus={changeStatus}
          opacity={taskDialogOpacity}
        />
      )}
    </div>
  );
}

export default App;
