import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGere = () => {
  return api.get(`genre/movie/list`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGere,
    select: (result) => result.data.genres,
    staleTime: 500000,
  });
};
