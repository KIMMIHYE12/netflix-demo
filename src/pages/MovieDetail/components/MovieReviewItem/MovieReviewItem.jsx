import React, { useState } from "react";
import "./MovieReviewItem.style.css";

const MovieReviewItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='review_item'>
      <h3>{item.author}</h3>
      <div className={`review_text ${isOpen ? "ative" : ""}`}>
        {item.content}
      </div>
      <div className='accordion'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "접기" : "펼치기"}
        </button>
      </div>
    </div>
  );
};

export default MovieReviewItem;
