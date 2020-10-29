import React from "react";
import Article from "./Article";
import { Scroll } from "./Scroll";

const Articles = () => {
  return (
    <Scroll>
      <Article href="/article" />
      <Article />
      <Article />
    </Scroll>
  );
};

export default Articles;
