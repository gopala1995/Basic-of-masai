import React, { useState, useEffect, useCallback } from "react";
import "./TaskManager.css";

const getPriorityValue = (priority) => {
  switch (priority) {
    case "High":
      return 3;
    case "Medium":
      return 2;
    case "Low":
      return 1;
    default:
      return 0;
  }
};

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");

  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const sortTasks = useCallback((currentTasks) => {
    return [...currentTasks].sort((a, b) => {
      const priorityA = getPriorityValue(a.priority);
      const priorityB = getPriorityValue(b.priority);
      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return a.id - b.id;
    });
  }, []);

  const addTask = () => {
    const trimmedTitle = newTaskTitle.trim();
    if (!trimmedTitle) {
      alert("Task title cannot be empty!");
      return;
    }

    const newTaskId = Date.now();
    const newTasksList = [
      ...tasks,
      {
        id: newTaskId,
        title: trimmedTitle,
        priority: newTaskPriority,
        completed: false,
      },
    ];
    setTasks(sortTasks(newTasksList));
    setNewTaskTitle("");
    setNewTaskPriority("Medium");
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      return sortTasks(updatedTasks);
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      const remainingTasks = prevTasks.filter((task) => task.id !== id);
      return remainingTasks;
    });
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      filterPriority === "All" || task.priority === filterPriority;

    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);

    return matchesPriority && matchesStatus;
  });

  return (
    <div className="task-manager">
      <h1>Advanced Task Manager</h1>

      <div className="add-task-section">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter new task title"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          aria-label="New task title"
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
          aria-label="New task priority"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filters-section">
        <div>
          <label htmlFor="priority-filter">Filter by Priority:</label>
          <select
            id="priority-filter"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="status-filter">Filter by Status:</label>
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </div>

      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <li className="no-tasks">
            No tasks to display based on current filters.
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`task-item
                ${task.completed ? "completed" : ""}
                ${task.priority === "High" ? "high-priority" : ""}
              `}
            >
              <div className="task-info">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  aria-label={`Mark "${task.title}" as complete`}
                />
                <span
                  className="task-title"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.title}
                </span>
                <span
                  className={`task-priority priority-${task.priority.toLowerCase()}`}
                >
                  ({task.priority})
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskManager;
