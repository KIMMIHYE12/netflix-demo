import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import MovieRecommendSlide from "./components/MovieRecommend/MoiveRecommendSlider";
import MovieVideo from "./components/MovieVideo/MovieVideo";
import "./MovieDetailPage.style.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log("movie", movie);

  return (
    <div>
      <div
        className='movie_detail_container'
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie?.backdrop_path}` +
            ")",
        }}
      >
        <Row className='movie_detail_info'>
          <Col lg={3} xs={12}>
            <div className='bn_img'>
              <img
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Col>
          <Col lg={7} xs={12}>
            <div>
              {movie?.genres.map((item, index) => (
                <Badge>{item.name}</Badge>
              ))}
            </div>
            <h1>{movie?.title}</h1>
            <div>
              <span>{movie?.vote_average}</span>
              <span>{movie?.vote_count}</span>
            </div>

            <p>{movie?.overview}</p>
            <ul>
              <li>
                <Badge>Budget</Badge>
                <span>${movie?.budget}</span>
              </li>
              <li>
                <Badge>Revenue</Badge>
                <span>${movie?.revenue}</span>
              </li>
              <li>
                <Badge>Release Date</Badge>
                <span>{movie?.release_date}</span>
              </li>
              <li>
                <Badge>Runtime</Badge>
                <span>{movie?.runtime}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div>
        <MovieRecommendSlide id={id} />
      </div>
      <div>
        <MovieVideo id={id} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
