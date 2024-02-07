"use client"

import { Wrapper } from "./NewsComponentStyle";

import NewsCard from "../NewsCard/NewsCard";

const NewsComponent = () => {
  return (
    <Wrapper>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </Wrapper>
  )
};

export default NewsComponent;
