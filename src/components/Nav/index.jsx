import React, { useEffect, useState } from "react";
import "./style.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleShow(window.scrollY > 100);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav className={`nav ${show ? "nav__black" : ""}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Logo"
      />
    </nav>
  );
}

export default Nav;
