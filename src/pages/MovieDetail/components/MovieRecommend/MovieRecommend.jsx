import React from "react";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import { responsive } from "../../../../constans/reponsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const MovieRecommend = ({ id }) => {
  const { data: recommend } = useMovieRecommendQuery({ id });
  console.log("추천", recommend);

  return (
    <div>
      추천영화
      {recommend.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
      {/* <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {recommend.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel> */}
    </div>
  );
};

export default MovieRecommend;
