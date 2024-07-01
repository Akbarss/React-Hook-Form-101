// src/App.js
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    if (currentTask !== null) {
      updateTask(currentTask.index, task);
    } else {
      setTasks([...tasks, task]);
    }
    setCurrentTask(null);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setCurrentTask({ ...tasks[index], index });
  };

  return (
    <div className="App">
      <TaskForm onSubmit={addTask} defaultValues={currentTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.taskName}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
