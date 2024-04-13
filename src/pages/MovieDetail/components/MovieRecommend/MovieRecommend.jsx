import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import { responsive } from "../../../../constans/reponsive";

const MovieRecommend = ({ id }) => {
  const { data: recommend } = useMovieRecommendQuery({ id });
  console.log("추천", recommend);

  return (
    <div>
      <MovieSlider
        title='Movie Recommend'
        movies={recommend.results}
        responsive={responsive}
      />
    </div>
  );
};

export default MovieRecommend;
