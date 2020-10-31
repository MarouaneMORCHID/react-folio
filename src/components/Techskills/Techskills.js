import React, { useState } from "react";
import Skill from "./Skill";
import { SkillsContainer } from "./Techskills.styled";

const Techskills = () => {
  const [skills, setSkills] = useState([
    "React",
    "Java",
    "Spring Boot",
    "NodeJS",
    "NodeJS",
    "NodeJS",
  ]);

  return (
    <SkillsContainer>
      {skills.map((item) => (
        <Skill>{item}</Skill>
      ))}
    </SkillsContainer>
  );
};

export default Techskills;
