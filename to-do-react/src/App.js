import React, { Fragment } from "react";
import "./App.css";

// Import components
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    </Fragment>
  );
}

export default App;
