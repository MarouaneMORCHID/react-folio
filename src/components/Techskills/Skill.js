import React from "react";
import { StyledSkill } from "./Techskills.styled";

const Skill = (props) => {
  return <StyledSkill>{props.children}</StyledSkill>;
};

export default Skill;
