import React from "react";
import Article from "./Article";
import { Scroll } from "./Scroll";

const Articles = () => {
  return (
    <Scroll>
      <Article
        url="https://medium.com/test"
        title="coding"
        abstract="Example abstract for  this one"
        date="12 October 2020"
      />
      <Article
        url="https://medium.com/test"
        title="Game Developpement"
        abstract="Example abstract for  this one"
        date="12 October 2020"
      />
      <Article
        url="https://medium.com/test"
        title="Testing"
        abstract="Example abstract for  this one"
        date="12 October 2020"
      />
      <Article
        url="https://medium.com/test"
        title="Design"
        abstract="Example abstract for  this one"
        date="12 October 2020"
      />
    </Scroll>
  );
};

export default Articles;
