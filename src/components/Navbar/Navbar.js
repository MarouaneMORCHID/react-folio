import React from "react";
import { StyledBurger, StyledNavbar } from "./Navbar.styled";

const Navbar = ({ open, setOpen, toggleTheme, currentTheme }) => {
  return (
    <StyledNavbar open={open}>
      <h1 className="logo">Marouane Morchid</h1>
      <ul className="nav-links">
        <li>
          <a href="#articles" onClick={() => setOpen(false)}>
            Articles
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <button onClick={toggleTheme}>{currentTheme}</button>
        </li>
      </ul>
      <StyledBurger onClick={() => setOpen(!open)} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </StyledNavbar>
  );
};

export default Navbar;
