import React, { useState } from "react";



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
    <section className="top d-flex justify-content-center ">
      <header className="h-title-container">
        <a href="/">
          <h1 className="h-title">To Do React</h1>
        </a>
      </header>
     
    </section>
  );
}

export default Header;
