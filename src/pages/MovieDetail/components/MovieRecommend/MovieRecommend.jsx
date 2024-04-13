import React from "react";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import "react-multi-carousel/lib/styles.css";
import MovieRecommendSlide from "../MovieRecommendSlide/MovieRecommendSlide";

const MovieRecommend = ({ id }) => {
  const { data: recommend } = useMovieRecommendQuery({ id });

  return (
    <div>
      <MovieRecommendSlide recommend={recommend} />
    </div>
  );
};

export default MovieRecommend;
