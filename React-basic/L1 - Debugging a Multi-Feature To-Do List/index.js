import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fix 1: Ensure only non-empty tasks can be added.
  const addTask = () => {
    const trimmedTask = newTask.trim(); // Trim whitespace from the input

    if (trimmedTask) {
      // Check if the trimmed task is not empty
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: trimmedTask,
          completed: false,
        },
      ]);
      setNewTask("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              className={`todo-text ${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(task.id)} // Allow clicking text to toggle
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
