import React, { Fragment, useState, useEffect } from "react";
import "./style.css"

const TaskCreate = () => {
 
  const [description, setDescription] = useState("Test desc");
  const [title, setTitle] = useState("Test title");
  const [due_date, setDue_date] = useState("2022,12,1");
  const [task_tag, setTask_tag] = useState("tag");
  const [userId, setUserId] = useState(1);

  const task = {
    title: title,
    description: description,
    due_date: due_date,
    user_id: userId,
    task_tag: task_tag,
  };


  const createTask = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        description: description,
        due_date: due_date,
        user_id: userId,
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

  useEffect(() => {
    //TODO: Kludge
    try {
      // sessionStorage.setItem('key', 'value);
      let thisUser = JSON.parse(localStorage.getItem("user"));
      console.log(thisUser.id);
      console.log("thisUser", thisUser);
      if (typeof thisUser.name === undefined)
      {
       // setIsLoggedIn(false);
      }
      else {
        //setIsLoggedIn(true);
        console.log("thisUser.ID in createTask", thisUser.id);
       // setUserId(thisUser.id);
       
       setUserId(thisUser.id);
      //setUserId(3);

        
      }
      
    } catch (error) {
      
    } 
  }, [userId]);

  
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#id-create"
        id="btnNewTask"
      >
        New Task
      </button>

      <div
        className="modal"
        id="id-create"
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
              <h4 className="modal-title">New Task</h4>
              <button
                type="button"
                className="close"
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
                onClick={(e) => createTask(e)}
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

export default TaskCreate;
