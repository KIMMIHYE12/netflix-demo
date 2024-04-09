import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovies from "./components/TopRatedMovies/TopRatedMovies";
import UpcommingMovieSlide from "./components/UpcommingMovieSlide/UpcommingMovieSlide";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovies />
      <UpcommingMovieSlide />
    </div>
  );
};

export default Homepage;
