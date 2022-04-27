import React, { Fragment, useEffect } from "react";
import "./App.css";


// Import components
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Main from "./components/Main";

function App() {
  const checkLoginStatus = async () => {
    try {
    
        // const response = await fetch(`http://localhost:3001/users/loggedIn/`, {
        //   method: "Post",
        //   headers: { "Content-type": "application/json"},
        //   //credentials: 'include', 
        // });
        // const jsonData = await response.json();

         //console.log("jsonData  BELOW_________________")
        //console.log(jsonData) 
        
       //;
        // if (typeof jsonData.username === 'undefined'){
        //   console.log(jsonData) ;
        //   console.log("NOT LOGGED IN");
        // } else {
        //   console.log(jsonData);
        //   const thisUser = {
        //     name: jsonData.user.username,
        //     id: jsonData.user.id
        //   };
        //   localStorage.setItem("user", JSON.stringify(thisUser));
        // }

        // TODO: Kludge LocalStorage
        let thisUser = localStorage.getItem("user");
        console.log(thisUser);

        // setGlobalState to loggedIn
        

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
    
          <Main />
        </div>
      </Fragment>
  );
}

export default App;
