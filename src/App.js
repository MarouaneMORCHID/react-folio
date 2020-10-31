import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Articles from "./components/Articles/Articles";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import { StyledDimmer } from "./components/Navbar/Navbar.styled";
import Projects from "./components/Projects/Projects";
import Techskills from "./components/Techskills/Techskills";
import { GlobalStyles } from "./styles/global";
import { useOnClickOutside } from "./styles/hooks";

const darkTheme = {
  primaryDark: "#202020",
  primaryLight: "#ffffff",
  primaryShadow: "rgba(0,0,0,0.1)",
  primaryHover: "rgba(5,150,250,0.5)",
  mobile: "900px",
};

const lightTheme = {
  primaryDark: "#ffffff",
  primaryLight: "#303030",
  primaryShadow: "rgba(255,255,255,0.1)",
  primaryHover: "rgba(5,150,250,0.5)",
  mobile: "900px",
};

const NavContainer = styled.div`
  background: transparent;
`;

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("Dark");
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
      <div style={{ margin: "0 auto", maxWidth: "62.5rem" }}>
        <StyledDimmer open={open} />
        <NavContainer ref={node}>
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
          <SectionTitle>Latest Articles</SectionTitle>
          <Articles id="articles" />
          <SectionTitle>About me</SectionTitle>
          <About id="about" />
          <SectionTitle>Tech Skills</SectionTitle>
          <Techskills />
          <SectionTitle>Projects</SectionTitle>
          <Projects />
          <SectionTitle>Projects</SectionTitle>
          <SectionTitle>Projects</SectionTitle>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;

const SectionTitle = styled.h2`
  margin: 0px auto;
  max-width: 62.5rem;
  padding-bottom: 60px;
  padding-top: 40px;
  padding-left: 30px;
  font-size: 28px;
  color: ${({ theme }) => theme.primaryDark};
`;
