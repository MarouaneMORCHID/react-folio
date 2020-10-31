import React from "react";
import {
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  StyledArticle,
} from "./Article.styled";

const Article = ({ url, title, abstract, date }) => {
  return (
    <StyledArticle href={url}>
      <ArticleTitle>{title.toUpperCase()}</ArticleTitle>
      <ArticleContent>{abstract}</ArticleContent>
      <ArticleDate>{date}</ArticleDate>
    </StyledArticle>
  );
};

export default Article;
