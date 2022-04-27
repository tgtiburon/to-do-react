import React, { Fragment, useEffect } from "react";
import "./App.css";


// Import components
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Main from "./components/Main";

function App() {
 

  return (
  
      <Fragment>
        <div className="container">
          <Header />
    
          <Main />
        </div>
      </Fragment>
  );
}

export default App;
