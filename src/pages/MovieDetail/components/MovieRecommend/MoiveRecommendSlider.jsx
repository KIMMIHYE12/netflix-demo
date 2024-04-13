import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { responsive } from "../../../../constans/reponsive";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";

const MovieRecommendSlide = ({ id }) => {
  const {
    data: recommend,
    isLoading,
    isError,
    error,
  } = useMovieRecommendQuery({ id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {recommend?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieRecommendSlide;
