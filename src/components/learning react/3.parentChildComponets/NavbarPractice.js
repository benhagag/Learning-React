import React from "react";
import "./NavbarPractice.css";

function NavbarPractice() {
  return (
    <header>
      <nav>
        <ul className="ul-navbar-practice">
          <li className="li-navbar-practice">
            <a href="#home">Home</a>
          </li>
          <li className="li-navbar-practice">
            <a href="#news">News</a>
          </li>
          <li className="li-navbar-practice">
            <a href="#contact">Contact</a>
          </li>
          <li className="li-navbar-practice">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarPractice;
