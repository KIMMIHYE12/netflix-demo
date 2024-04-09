import { Alert } from "bootstrap";
import React from "react";
import { useUpcommingMoviesQuery } from "../../../../hooks/useUpcommingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constans/reponsive";

const UpcommingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcommingMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert varient='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title='Upcomming'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcommingMovieSlide;
