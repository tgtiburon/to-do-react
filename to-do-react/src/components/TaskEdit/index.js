import React, { Fragment, useState } from "react";

const TaskEdit = ({ task }) => {
  // console.log(task);
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.title);
  const [due_date, setDue_date] = useState(task.due_date);
  const [task_tag, setTask_tag] = useState(task.task_tag);

  // edit description
  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        description: description,
        due_date: due_date,
        user_id: "1",
        task_tag: task_tag,
      };
      console.log("------------------------");
      console.log(body);
      const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: "PUT",
        // mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
      //window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${task.id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${task.id}`}
        // onClick={() => setDescription(task.description)}
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
              <h4 class="modal-title">Edit Task</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                // onClick={() => setDescription(task.description)}
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
                onClick={(e) => updateTask(e)}
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

export default TaskEdit;
