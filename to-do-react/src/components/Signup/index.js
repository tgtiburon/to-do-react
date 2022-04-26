import React, { Fragment, useState, useRef } from "react";
import ReactDom from "react-dom";

import Auth from "../../utils/auth";
import "./style.css";

function Signup({ open, onClose }) {
  // sign up form
  const [signUpState, setSignUpState] = useState({
    userName: "Ringo",
    password: "pass1234",
  });

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

  // submit login form
  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      // const { data } = await login({
      //   variables: { ...logInState },
      // });
      //Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLogInState({
      userName: "",
      password: "",
    });
  };

  const handleSignUpChange = () => {};

  const handleLoginChange = () => {};

  // TODO: Fix
  let password = "pass1234";
  let username = "Test Username";

  return (
    <Fragment>
      <button
        id="login-btn"
        className="btn btn-success mx-3"
        data-toggle="modal"
        data-target="#id-signup"
      >
        Sign Up
      </button>
      <div class="modal" id="id-signup" onClick={() => {}}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Signup!</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //   onClick={() => setDescription()}
                onClick={() => {}}
              >
                &times;
              </button>
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
            {/* <div class="modal-body">
              <p>Due Date</p>
              <input
                type="text"
                className="form-control"
                value={due_date}
                // onChange={(e) => setDue_date(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <p>Task Tag(s)</p>
              <input
                type="text"
                className="form-control"
                value={task_tag}
                // onChange={(e) => setTask_tag(e.target.value)}
              />
            </div> */}

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                // onClick={(e) => createTask(e)}
              >
                Signup
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {}}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
