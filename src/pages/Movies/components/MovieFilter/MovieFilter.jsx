import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import "./MovieFilter.style.css";

const MovieFilter = ({ genreId, setGenreId }) => {
  const { data: genreData } = useMovieGenreQuery();
  const filterId = (event, id) => {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      const list = genreId.filter((item) => item !== id);
      setGenreId(list);
    } else {
      event.target.classList.add("active");
      setGenreId([...genreId, id]);
    }
  };

  return (
    <div>
      <div className='filter_btn_wrap'>
        {genreData?.map((item, index) => (
          <button
            className='filter_button'
            onClick={(event) => filterId(event, item.id)}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieFilter;
