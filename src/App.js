import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Articles from "./components/Articles/Articles";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import { StyledDimmer } from "./components/Navbar/Navbar.styled";
import { GlobalStyles } from "./styles/global";
import { useOnClickOutside } from "./styles/hooks";

const darkTheme = {
  primaryDark: "#202020",
  primaryLight: "#ffffff",
  primaryHover: "rgba(255,50,50,0.7)",
  mobile: "1366px",
};

const lightTheme = {
  primaryDark: "#ffffff",
  primaryLight: "#303030",
  primaryHover: "rgba(255,50,50,0.7)",
  mobile: "1366px",
};

const NavContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
`;

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("Light");
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  return (
    <ThemeProvider theme={theme === "Light" ? lightTheme : darkTheme}>
      <>
        <StyledDimmer open={open} />
        <NavContainer ref={node}>
          {/*
          <Logo />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />*/}
          <Navbar
            open={open}
            setOpen={setOpen}
            toggleTheme={toggleTheme}
            currentTheme={theme}
          />
        </NavContainer>
        <GlobalStyles open={open} />
        <div className="body">
          <Landing />
          <Articles />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
