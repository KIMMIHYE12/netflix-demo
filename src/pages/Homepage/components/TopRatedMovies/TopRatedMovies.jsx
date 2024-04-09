import { Alert } from "bootstrap";
import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constans/reponsive";

const TopRatedMovies = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert varient='danger'>{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title='Top Rate'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovies;
