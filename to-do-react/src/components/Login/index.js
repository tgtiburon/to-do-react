import React, { Fragment, useState } from "react";

import "./style.css";

const Login = (props) => {
  const [isNewAccount, setIsNewAccount] = useState();
  // sign up form
  const [signUpState, setSignUpState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

  // login form filled in for testing
  // TODO: set to ""
  const [logInState, setLogInState] = useState({
    username: "Ringo",
    password: "pass1234",
  });


  const handleCreateAccount = async () => {
    try {
      const body = signUpState;
      console.log("Inside create account");
      console.log(body);
      const response = await fetch(`http://localhost:3001/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      const thisUser = {
        name: jsonData.user.username,
        id: jsonData.user.id,
      };
      localStorage.setItem("user", JSON.stringify(thisUser));


    } catch (error) {
      console.error(error.message);
    }

    setIsLoggedIn(true);
    window.location= "/";
  };
  // handle login form changes based on input
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLogInState({
      ...logInState,
      [name]: value,
    });
  };

  const handleCreateChange = (event) => {
    const { name, value } = event.target;
    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      let body = logInState;

      const response = await fetch(`http://localhost:3001/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      const thisUser = {
        name: jsonData.user.username,
        id: jsonData.user.id,
      };
      localStorage.setItem("user", JSON.stringify(thisUser));
    } catch (e) {
      console.error(e);
    }

    setIsLoggedIn(true);
    window.location= "/";
  };

  return (
    <Fragment>
      {!isNewAccount ? (
        <>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Welcome Back!</h4>
              </div>
              <div className="modal-body">
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={logInState.username}
                  onChange={handleLoginChange}
                />
              </div>

              <div className="modal-body">
                <p>Password:</p>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={logInState.password}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => {
                    setIsNewAccount(true);
                  }}
                >
                  Create Account
                </button>
                Or
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create a new account!</h4>
              </div>
              <div className="modal-body">
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={signUpState.username}
                  onChange={handleCreateChange}
                />
              </div>
              <div className="modal-body">
                <p>Email:</p>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={signUpState.email}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="modal-body">
                <p>Password:</p>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={signUpState.password}
                  onChange={handleCreateChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => setIsNewAccount(false)}
                >
                  Back to Login
                </button>
                <button
                  type="button"
                  className="btn btn-success"
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
