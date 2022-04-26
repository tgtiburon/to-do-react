import React, { Fragment, useEffect, useState } from "react";
import Auth from "../../utils/auth";
import TaskCreate from "../TaskCreate";
import TaskInput from "../TaskInput";
import TaskEdit from "../TaskEdit";
import Login from "../Login";
import Signup from "../Signup";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const deleteTask = async (id) => {
    try {
      const deleteTask = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });
    
      // Update task state
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTasks = async () => {
    try {
      // will need to get user id from session tasks/:id
      const response = await fetch("http://localhost:3001/tasks/1");
      const jsonData = await response.json();

  
      // update the state with jsondata
      setTasks(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };


  // TODO: Could do a string concat to make into one function
  const sortTitleA = async () => {
    // fetch to sort title
    try {
      // will need to get user id from session tasks/:id
      const response = await fetch("http://localhost:3001/tasks/title_a/1");
      const jsonData = await response.json();

      
      // update the state with jsondata
      setTasks(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const sortTitleD = async () => {
    // fetch to sort title
    try {
      // will need to get user id from session tasks/:id
      const response = await fetch("http://localhost:3001/tasks/title_d/1");
      const jsonData = await response.json();

    
      // update the state with jsondata
      setTasks(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };


    // TODO: Could do a string concat to make into one function
    const sortDateA = async () => {
      // fetch to sort title
      try {
        // will need to get user id from session tasks/:id
        const response = await fetch("http://localhost:3001/tasks/date_a/1");
        const jsonData = await response.json();
  
       
        // update the state with jsondata
        setTasks(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    const sortDateD = async () => {
      // fetch to sort title
      try {
        // will need to get user id from session tasks/:id
        const response = await fetch("http://localhost:3001/tasks/date_d/1");
        const jsonData = await response.json();
  
     
        // update the state with jsondata
        setTasks(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

  

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Fragment>
      {!isLoggedIn ? (

         <Login />
       
      ) : (
        <>
          <TaskInput />
          <table class="table table-bordered mt-5 text-center">
            <thead>
              <tr>
                <th>
                  <button
                    className="btn mx-2"
                    onClick={() => {
                      sortTitleA();
                    }}
                  >
                    ↑
                  </button>
                  Title
                  <button
                    className="btn mx-2"
                    onClick={() => {
                      sortTitleD();
                    }}
                  >
                    	↓
                  </button>
                </th>
                <th>Description</th>
                <th>
                  <button
                    className="btn mx-2"
                    onClick={() => {
                      sortDateA();
                    }}
                  >
                    ↑
                  </button>
                  Due Date
                  <button
                    className="btn mx-2"
                    onClick={() => {
                      sortDateD();
                    }}
                  >
                    	↓
                  </button>
                </th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.due_date}</td>
                  <td>{task.task_tag}</td>
                  <td>
                    <TaskEdit task={task} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Fragment>
  );
};

export default TaskList;
