import styled from "styled-components";

export const StyledSkill = styled.div`
  border-radius: 50px;
  min-width: 200px;
  border: 2px solid ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryDark};
  padding: 10px 20px 10px;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  overflow: scroll hidden;
  padding: 10px;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: block;
    appearance: none;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &::-webkit-scrollbar-track {
    height: 1rem;
  }

  @media (min-width: 992px) {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 16.25rem);
    overflow: visible;
    padding: 0px 2.5rem;
  }
`;

export const More = styled(StyledSkill)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
`;
