import { useState } from "react";
import Card from "./Card";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const [btn, setBtn] = useState("Registrar");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btn == "Registrar") {
      const allTasks = [...tasks, currentTask];
      setTasks(allTasks);
      setCurrentTask("");
    } else {
      const allTasks = [...tasks];
      allTasks[id] = currentTask;
      setTasks(allTasks)
      setCurrentTask("");
      setBtn("Registrar");
    }
  };

  const handleDelete = (index) => {
    const filterTasks = tasks.filter((_, i) => i !== index);
    setTasks(filterTasks);
  };

  const handleEdit = (index) => {
    setCurrentTask(tasks[index]);
    setId(index);
    setBtn("Guardar");
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingresa la tarea"
          value={currentTask}
          type="text"
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button type="submit"> {btn} </button>
      </form>

      {tasks.map((task, index) => (
        <Card
          id={index}
          title={task}
          key={index}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
