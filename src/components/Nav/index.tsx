import React, { useEffect, useState } from "react";
import "./style.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${show ? "nav__black" : ""}`}>
      <img className="nav__logo" src="/images/logo.png" alt="Netflix Logo" />
      <img className="nav__avatar" src="/images/avatar.png" alt="Netflix Logo" />
    </nav>
  );
}

export default Nav;
