import React, { Fragment, useState, useRef } from "react";
import ReactDom from "react-dom";

import Auth from "../../utils/auth";
import "./style.css";

const Login = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  // sign up form
  const [signUpState, setSignUpState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // login form
  const [logInState, setLogInState] = useState({
    username: "",
    password: "",
  });

  const handleCreateAccount = async () => {
    try {
      const body = signUpState;
      const loginUser = await fetch(`http://localhost:3001/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }

    setIsLoggedIn(true);
  };
  // handle login form changes based on input
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);

    setLogInState({
      ...logInState,
      [name]: value,
    });
  };

  const handleCreateChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);

    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      let body = logInState;
      console.log(body);
      const loginUser = await fetch(`http://localhost:3001/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.error(e);
    }

    setIsLoggedIn(true);
  };

  return (
    <Fragment>
      {!isNewAccount ? (
        <>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Welcome Back!</h4>
              </div>
              <div class="modal-body">
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={logInState.username}
                  onChange={handleLoginChange}
                />
              </div>

              <div class="modal-body">
                <p>Password:</p>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={logInState.password}
                  onChange={handleLoginChange}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => {
                    setIsNewAccount(true);
                  }}
                  //onClick={()=> setIsLoggedIn(true)}
                >
                  Create Account
                </button>
                Or
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={() => {
                    handleLogin();
                  }}
                  //onClick={()=> setIsLoggedIn(true)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Create a new account!</h4>
              </div>
              <div class="modal-body">
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={signUpState.username}
                  onChange={handleCreateChange}
                />
              </div>
              <div class="modal-body">
                <p>Email:</p>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={signUpState.email}
                  onChange={handleCreateChange}
                />
              </div>

              <div class="modal-body">
                <p>Password:</p>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={signUpState.password}
                  onChange={handleCreateChange}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => setIsNewAccount(false)}
                >
                  Back to Login
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={() => handleCreateAccount()}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Login;
