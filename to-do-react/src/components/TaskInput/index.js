import React, { Fragment, useState } from "react";
//import TaskCreate from "../TaskCreate";

const TaskInput = () => {
  const [description, setDescription] = useState("Default description");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: "Test Title",
        description: description,
        due_date: "2022, 12, 22",
        user_id: "1",
        task_tag: ["Home"],
      };
      const response = await fetch("http://localhost:3001/tasks/", {
        method: "POST",
        // mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
     
      // refresh window to show need task
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">TODO LIST</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text "
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <TaskCreate /> */}
        <button className="btn btn-success">Add Task</button>
      </form>
    </Fragment>
  );
};

export default TaskInput;
