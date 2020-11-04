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
  order: ${({ pair }) => (pair ? 1 : 2)};
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    order: 2;
  }
`;
export const ProjectCategory = styled.h3`
  align-items: center;
  justify-content: center;
  padding: 0px 0px 10px;
`;
export const ProjectTitle = styled.h4`
  padding: 10px 0px 10px;
`;
export const ProjectAbstract = styled.div`
  text-align: left;
  line-height: 25px;
`;
export const ProjectTools = styled.div`
  margin-top: 1.5rem;
  line-height: 1.2rem;
  display: flex;
  flex-wrap: wrap;
`;
export const ProjectImage = styled.img`
  border-radius: 50px;
  width: 100%;
  border-radius: 30px;
  order: ${({ pair }) => (pair ? 2 : 1)};
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
export const Tool = styled.span`
  font-weight: 500;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: rgba(250, 230, 30, 0.4) 0px -0.2rem 0px 0 inset;
  transition: 0.5s;
  &:hover {
    box-shadow: rgba(250, 230, 30, 0.4) 0px -1rem 0px 0 inset;
  }
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
  justify-content: flex-start;
  gap: 2rem;
  margin-right: 60px;

  a {
    color: ${({ theme }) => theme.primaryDark};
    transition: 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
