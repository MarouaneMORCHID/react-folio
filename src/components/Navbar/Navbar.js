import React from "react";
import { StyledBurger, StyledNavbar } from "./Navbar.styled";

const Navbar = ({ open, setOpen }) => {
  return (
    <StyledNavbar open={open}>
      <div class="logo">Marouane Morchid</div>
      <ul class="nav-links">
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
