import React from "react";
import { Scroll } from "../Scroll";
import Article from "./Article";

const Articles = () => {
  return (
    <Scroll>
      Latest Articles
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </Scroll>
  );
};

export default Articles;
