import React from "react";
import {
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  StyledArticle,
} from "./Article.styled";

const Article = () => {
  return (
    <StyledArticle>
      <ArticleTitle>CODING</ArticleTitle>
      <ArticleContent>
        This is my latest article about coding in js.
      </ArticleContent>
      <ArticleDate>12 October 2020</ArticleDate>
    </StyledArticle>
  );
};

export default Article;
