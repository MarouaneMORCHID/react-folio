import React from "react";
import { Span, StyledLanding, Subtitle, Title } from "./Landing.styled";
import Socials from "./Socials";

const Landing = () => {
  return (
    <StyledLanding onClick={() => console.log("clicked div")} id="about">
      <Title>I'm Marouane!</Title>
      <Subtitle>
        I'm a <Span>full-stack web developer</Span>
      </Subtitle>
      <Socials />
    </StyledLanding>
  );
};

export default Landing;
