import React, { useState } from "react";
import Login from "../Login";
import Signup from "../Signup";

import Auth from "../../utils/auth";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //const loggedIn = Auth.loggedIn();
  const loggedIn = false;
 
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <section className="top d-flex justify-content-around">
      <header className="h-title-container">
        <a href="/">
          <h1 className="h-title">To Do React</h1>
        </a>
      </header>
      <div className="blur-head">
        <div className="auth-btn-container">
          {loggedIn && (
            <button id="logout-btn" className="auth-btns" onClick={logout}>
              Log Out
            </button>
          )}
          {!loggedIn && (
            <>
           
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
