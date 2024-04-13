import React from "react";

const MovieRecommendSlide = ({ recommend }) => {
  console.log("추천", recommend);

  return (
    <div>
      {recommend?.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default MovieRecommendSlide;
