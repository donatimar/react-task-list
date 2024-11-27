import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Assicurati di importare il file CSS
import { tasks } from "./data/tasks";

function App() {
  const currentTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <div className="App container">
      <header className="header-bg mb-4">
        <h1>Task Manager</h1>
      </header>

      <div className="mb-4">
        <h2>Current Tasks</h2>
        <div>
          {currentTasks.map((task) => (
            <div key={task.id} className="mb-3">
              <strong>{task.title}</strong>
              <div>
                Priority: {task.priority} <br />
                Estimated time: {task.estimatedTime}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div>
        <h2>Completed Tasks</h2>
        <div>
          {completedTasks.map((task) => (
            <div key={task.id} className="mb-3">
              <strong>{task.title}</strong>
              <div>
                Priority: {task.priority} <br />
                Estimated time: {task.estimatedTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
