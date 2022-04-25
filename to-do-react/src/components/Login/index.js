import React, { Fragment, useState, useRef } from "react";
import ReactDom from "react-dom";

import Auth from "../../utils/auth";
import "./style.css";

function Login() {
  // sign up form
  const [signUpState, setSignUpState] = useState({
    userName: "Ringo",
    password: "pass1234",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // submit sign up form
  const handleFormSubmitNewUser = async (event) => {
    event.preventDefault();

    try {
    } catch (e) {
      console.error(e);
    }
  };

  // login form
  const [logInState, setLogInState] = useState({
    userName: "Ringo",
    password: "pass1234",
  });

  const handleCreateAccount = () => {
    console.log("HandleFormSubmitLogin was clicked");
    setIsLoggedIn(true);
   
  };

  const handleLogin = () => {
    console.log("HandleFormSubmitLogin was clicked");
    setIsLoggedIn(true);
   
  };

  // submit login form
  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      // const { data } = await login({
      //   variables: { ...logInState },
      // });
      //Auth.login(data.login.token);
      const loginUser = await fetch(`http://localhost:3001/users/login`, {
        userName: "Ringo",
        password: "pass1234",
      });

      console.log(loginUser);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    // setLogInState({
    //   userName: "",
    //   password: "",
    // });
  };

  // TODO: Fix
  let password = "pass1234";
  let username = "Test Username";

  return (
    <>
    {/* <div class="modal" id="id-login" onClick={() => {}}> */}
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Welcome!</h4>
        </div>
        <div class="modal-body">
          <p>Username:</p>
          <input
            type="text"
            className="form-control"
            value={username}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="modal-body">
          <p>Password:</p>
          <input
            type="text"
            className="form-control"
            value={password}
            // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning"
            data-dismiss="modal"
             onClick={()=> handleCreateAccount()}
           //onClick={()=> setIsLoggedIn(true)}  
          >
            Create Account
          </button>
          <button
            type="button"
            class="btn btn-success"
            data-dismiss="modal"
             onClick={()=> handleLogin()}
           //onClick={()=> setIsLoggedIn(true)}  
          >
            Login
          </button>
        </div>
      </div>
    </div>
    {/* </div> */}
  </>
  );
}

export default Login;
