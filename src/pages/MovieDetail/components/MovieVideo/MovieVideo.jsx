import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useMovieVideoQuery } from "../../../../hooks/useMovieVideos";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import "./MovieVideo.style.css";

const MovieVideo = ({ id }) => {
  const { data: video, isLoading, isError, error } = useMovieVideoQuery({ id });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  console.log("video", video);

  return (
    <div>
      <Button variant='primary' onClick={handleShow} className='btn_movie'>
        예고편 보기
      </Button>
      <Modal show={show} onHide={handleClose} className='modal_content_wrap'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube videoId={video && video[0]?.key} opts={opts} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieVideo;
