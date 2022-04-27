import React, { Fragment, useState, useEffect } from "react";

const TaskEdit = ({ task }) => {
  
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.title);
  const [due_date, setDue_date] = useState(task.due_date);
  const [task_tag, setTask_tag] = useState(task.task_tag);
  const [userId, setUserId] = useState(1);

  // edit task
  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        description: description,
        due_date: due_date,
        user_id: userId,
        task_tag: [task_tag],
      };

      const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
//Used to get userinfo
  useEffect(() => {
    //TODO: Kludge
    try {
    
      let thisUser = JSON.parse(localStorage.getItem("user"));
      console.log(thisUser.id);
      console.log("thisUser", thisUser);
      if (typeof thisUser.name === undefined) {
      } else {
        console.log("thisUser.ID in taskedit", thisUser.id);
        setUserId(thisUser.id);
      }
    } catch (error) {}
  }, [userId]);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${task.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${task.id}`}
        onClick={() => {
          setDescription(task.description);
          setTitle(task.title);
          setDue_date(task.due_date);
          setTask_tag(task.task_tag);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="close"
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
            <div className="modal-body">
              <p>Title</p>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <p>Description</p>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <p>Due Date</p>
              <input
                type="text"
                className="form-control"
                value={due_date}
                onChange={(e) => setDue_date(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <p>Task Tag(s)</p>
              <input
                type="text"
                className="form-control"
                value={task_tag}
                onChange={(e) => setTask_tag(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateTask(e)}
              >
                Update Task
              </button>
              <button
                type="button"
                className="btn btn-danger"
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
