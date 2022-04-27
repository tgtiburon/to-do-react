import React, { useState } from "react";

import "./style.css";

// Header component
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const loggedIn = false;
 
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
