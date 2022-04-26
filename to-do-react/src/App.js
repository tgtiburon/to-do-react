import React, { Fragment, useEffect } from "react";
import "./App.css";


// Import components
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Main from "./components/Main";

function App() {
  const checkLoginStatus = async () => {
    try {
    
        const loginUser = await fetch(`http://localhost:3001/users/loggedIn/`, {
          method: "Post",
          headers: { "Content-type": "application/json"},
          //credentials: 'include', 
        
        
        })
        .then((loginUser) => {
          loginUser.json();
          console.log(loginUser);
          //console.log(loginUser.user_id)


        });
     
      } catch (error) {
        console.error(error.message);
      }

   };
  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
  
      <Fragment>
        <div className="container">
          <Header />
          {/* <TaskInput /> */}
          <Main />
        </div>
      </Fragment>
  );
}

export default App;
