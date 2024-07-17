import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaListCheck } from "react-icons/fa6";
import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./Interfaces";
import "./styles/styles.css";

function App() {
  const [task, setTask] = useState<string>("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addtask(): void {
    if (task === "") {
      toast.error("Por favor adicione uma task!");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);

      const newTask = { id: idRandom(1000000000), nameTask: task };
      console.log("id: " + idRandom(10));

      setTodoList([...todoList, newTask]);
      setTask("");

      toast.success("Task adicionada com sucesso!!");
    }
  }

  function deleteTask(DeleteTaskById: number): void {
    setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById));
  }

  return (
    <div className="App">
      <ToastContainer />

      <header>
        <h2>
          <FaListCheck size={40} className="list-btn" /> Minhas Tasks
        </h2>
        <input
          type="text"
          autoComplete="off"
          placeholder="Adicione uma Task..."
          name="task"
          className="input"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit" onClick={addtask} className="btn-header">
          Adicionar Task
        </button>
      </header>

      <div className="line"></div>

      {todoList.map((task, key) => (
        <TodoTask key={key} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
