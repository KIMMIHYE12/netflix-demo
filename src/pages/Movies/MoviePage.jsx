import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import MovieFilter from "./components/MovieFilter/MovieFilter";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const [genreId, setGenreId] = useState([]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  console.log("data", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <Container className='movie_list_container'>
      <Row>
        <Col lg={4} xs={12}>
          <MovieFilter genreId={genreId} setGenreId={setGenreId} />
        </Col>
        <Col lg={8} xs={12} className='movie_list'>
          <Row>
            {data?.results
              .filter((item) =>
                genreId.every((id) => item.genre_ids.includes(id))
              )
              .map((movie, index) => (
                <Col key={index} lg={6} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
          </Row>
          <ReactPaginate
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel='< previous'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
