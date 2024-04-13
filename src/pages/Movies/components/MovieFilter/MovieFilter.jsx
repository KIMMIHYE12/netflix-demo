import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

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
      <Row>
        {genreData?.map((item, index) => (
          <Col key={index}>
            <button
              classNave='filter_button'
              onClick={(event) => filterId(event, item.id)}
            >
              {item.name}
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieFilter;
