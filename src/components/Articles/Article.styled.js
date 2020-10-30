import styled from "styled-components";

export const StyledArticle = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 200px;
  flex-direction: column;
  padding: 10px 20px 10px;
  border-radius: 20px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  min-width: 280px;
  max-width: 280px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.primaryDark};

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
export const ArticleTitle = styled.h4`
  transition: all 0.3s ease-in-out;
  box-shadow: rgb(242, 242, 242) 0px -0.5rem 0px inset;
  ${StyledArticle}:hover & {
    box-shadow: rgb(255, 244, 217) 0px -1.2rem 0px inset;
  }
`;
export const ArticleContent = styled.div`
  font-size: 18px;
`;
export const ArticleDate = styled.small`
  position: relative;
  color: ${({ theme }) => theme.primaryDark};
`;
