import React from "react";
import { Span, StyledAbout, Subtitle, Title } from "./About.styled";

const About = () => {
  return (
    <StyledAbout onClick={() => console.log("clicked div")} id="about">
      <Title>I'm Marouane!</Title>
      <Subtitle>
        I'm a <Span color="tertiary">full-stack web developer</Span>
      </Subtitle>
    </StyledAbout>
  );
};

export default About;
