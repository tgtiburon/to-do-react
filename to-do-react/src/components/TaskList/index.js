import React, { Fragment, useEffect, useState } from "react";

import TaskEdit from "../TaskEdit";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
      try {
          const deleteTask  = await fetch(`http://localhost:3001/tasks/${id}`, {
              method: "DELETE"
          });
          console.log(deleteTask);
          // Update task state
          setTasks(tasks.filter(task => task.id !== id));

      } catch (error) {
          console.log(error.message);
          
      }
  }

  const getTasks = async () => {
    try {
      // will need to get user id from session tasks/:id
      const response = await fetch("http://localhost:3001/tasks/1");
      const jsonData = await response.json();

      console.log(jsonData);
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
      <table class="table table-bordered mt-5 text-center">
        <thead>
          <tr>
              <th>Title Sort</th>
            <th>Description</th>
            <th>Date Sort</th>
            <th>Tags</th>
            {/* <th>Edit</th> */}
            {/* <th>Delete</th> */}
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
                <TaskEdit task={task}/>
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
    </Fragment>
  );
};

export default TaskList;
