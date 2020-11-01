import React, { useState } from "react";
import Skill from "./Skill";
import { SkillsContainer } from "./Techskills.styled";

const Techskills = () => {
  const [skills, setSkills] = useState([
    "React",
    "Java",
    "NodeJS",
    "Spring Boot",
    "NodeJS",
  ]);

  return (
    <SkillsContainer>
      {skills.map((item, index) => (
        <Skill key={index}>{item}</Skill>
      ))}
    </SkillsContainer>
  );
};

export default Techskills;
