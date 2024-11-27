import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { tasks } from "./data/tasks";

function App() {
  console.log(tasks);

  return (
    <div className="App">
      <h1>Task Manager</h1>
    </div>
  );
}
export default App;
