import React from "react";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import MovieReviewItem from "../MovieReviewItem/MovieReviewItem";
import "./MovieReview.style.css";

const MovieReview = ({ id }) => {
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className='review_content'>
      <h2>Reviews</h2>
      {review.map((item) => (
        <ul>
          <li>
            <MovieReviewItem item={item} />
          </li>
        </ul>
      ))}
      <ul></ul>
    </div>
  );
};

export default MovieReview;
