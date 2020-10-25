import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { StyledDimmer } from "./components/Navbar/Navbar.styled";
import { GlobalStyles } from "./styles/global";
import { useOnClickOutside } from "./styles/hooks";

const darkTheme = {
  primaryDark: "#202020",
  primaryLight: "#ffffff",
  primaryHover: "red",
  mobile: "1366px",
};

const lightTheme = {
  primaryDark: "#ffffff",
  primaryLight: "#000000",
  primaryHover: "#555555",
  mobile: "1366px",
};

const NavContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
`;

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <StyledDimmer open={open} />
        <NavContainer ref={node}>
          {/*<button onClick={toggleTheme}>Toggle theme</button>
          <Logo />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />*/}
          <Navbar open={open} setOpen={setOpen} />
        </NavContainer>
        <GlobalStyles open={open} />
        <div className="body">
          <About />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
