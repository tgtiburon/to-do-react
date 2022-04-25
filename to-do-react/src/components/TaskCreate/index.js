import React, { Fragment, useState } from "react";

const TaskCreate = () => {
 
  const [description, setDescription] = useState("Test desc");
  const [title, setTitle] = useState("Test title");
  const [due_date, setDue_date] = useState("2022,12,1");
  const [task_tag, setTask_tag] = useState("tag");

  const task = {
    title: title,
    description: description,
    due_date: due_date,
    user_id: 1,
    task_tag: task_tag,
  };


  const createTask = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        description: description,
        due_date: due_date,
        user_id: "1",
        task_tag: [task_tag]
      };
     
      const response = await fetch(`http://localhost:3001/tasks/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#id-create"
      >
        New Task
      </button>

      <div
        class="modal"
        id="id-create"
        onClick={() => {
          setDescription(task.description);
          setTitle(task.title);
          setDue_date(task.due_date);
          setTask_tag(task.task_tag);
        }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">New Task</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //   onClick={() => setDescription()}
                onClick={() => {
                  setDescription(task.description);
                  setTitle(task.title);
                  setDue_date(task.due_date);
                  setTask_tag(task.task_tag);
                }}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Title</p>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div class="modal-body">
              <p>Description</p>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <p>Due Date</p>
              <input
                type="text"
                className="form-control"
                value={due_date}
                onChange={(e) => setDue_date(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <p>Task Tag(s)</p>
              <input
                type="text"
                className="form-control"
                value={task_tag}
                onChange={(e) => setTask_tag(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => createTask(e)}
              >
                Update Task
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setDescription(task.description);
                  setTitle(task.title);
                  setDue_date(task.due_date);
                  setTask_tag(task.task_tag);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskCreate;
