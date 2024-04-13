import React from "react";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import "react-multi-carousel/lib/styles.css";

const MovieRecommend = ({ id }) => {
  const { data: recommend } = useMovieRecommendQuery({ id });
  console.log("추천", recommend);

  return <div>recomend</div>;
};

export default MovieRecommend;
