import React, { Fragment, useState } from "react";
import TaskCreate from "../TaskCreate";
import "./style.css";


const TaskInput = () => {
  
  return (
    <Fragment>
    
      <div>
        <TaskCreate />
      </div>

      {/* </form> */}
    </Fragment>
  );
};

export default TaskInput;
