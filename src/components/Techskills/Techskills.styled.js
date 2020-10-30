import styled from "styled-components";

export const StyledSkill = styled.div`
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.primaryDark};
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 15.625rem);
  overflow: visible;
  padding: 0px;
  gap: 1rem;

  @media (min-width: 1300px) {
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    padding: 0px 2.5rem;
    overflow: scroll hidden;
  }
`;
