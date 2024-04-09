import React from "react";
import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2" +
          `${movie.poster_path}` +
          ")",
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge bg='danger'>{genre}</Badge>
        ))}
        <div>
          <div>{movie.vote_everage}</div>
          <div>{movie.popularity}</div>
          <div>{movie.audult ? "over18" : "under18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
