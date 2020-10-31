import styled from "styled-components";

export const StyledProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-width: 400px;
  padding: 10px 10px 50px;
  color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    order: 2;
  }
`;
export const ProjectCategory = styled.h3`
  padding: 0px 0px 10px;
`;
export const ProjectTitle = styled.h4`
  padding: 10px 0px 10px;
`;
export const ProjectAbstract = styled.div``;
export const ProjectTools = styled.div`
  padding: 20px 0px 50px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
`;
export const ProjectImage = styled.img`
  border-radius: 50px;
  max-height: 450px;
  max-width: 450px;
  border-radius: 30px;
  box-shadow: 0px 8px 8px ${({ theme }) => theme.primaryShadow};
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 16px ${({ theme }) => theme.primaryShadow};
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    order: 1;
  }
`;
export const Tool = styled.div`
  display: flex;
  font-weight: 500;
  box-shadow: rgba(250, 230, 30, 0.4) 0px -0.5rem 0px 0 inset;
  justify-content: center;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    overflow: scroll auto;

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
  }
`;

export const StyledProjectLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 60px;
`;
