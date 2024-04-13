import React from "react";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import "./MovieReview.style.css";

const MovieReview = ({ id }) => {
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });

  console.log("리뷰", review);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className='review_content'>
      <ul>
        {review.map((item) => (
          <li>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReview;
