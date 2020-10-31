import styled from "styled-components";

export const StyledArticle = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: 200px;
  flex-direction: column;
  background-color: inherit;
  padding: 10px 20px 10px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => `0px 0px 4px 4px ${theme.primaryShadow} `};
  min-width: 280px;
  max-width: 280px;
  margin-right: 20px;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.primaryDark};

  &:hover {
    box-shadow: ${({ theme }) => `0px 0px 8px 8px ${theme.primaryShadow} `};
    cursor: pointer;
  }
`;
export const ArticleTitle = styled.h4`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(250, 230, 30, 0.6) 0px -0.5rem 0px inset;
  background-color: inherit;
  ${StyledArticle}:hover & {
    box-shadow: ${({ theme }) => theme.primaryHover} 0px -1.2rem 0px inset;
  }
`;
export const ArticleContent = styled.div`
  font-size: 18px;
`;
export const ArticleDate = styled.small`
  margin-right: 20px;
  position: relative;
  background-color: "#544410";
`;
