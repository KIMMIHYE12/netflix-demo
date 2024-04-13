import React from "react";
import { useMovieVideoQuery } from "../../../../hooks/useMovieVideos";

const MovieVideo = ({ id }) => {
  const { data: video } = useMovieVideoQuery({ id });

  console.log("video", video);
  return <div>movie</div>;
};

export default MovieVideo;
