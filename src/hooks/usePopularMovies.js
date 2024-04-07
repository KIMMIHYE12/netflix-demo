import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopluarMovies = () => {
  return api.get(`movie/popular`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopluarMovies,
    select: (result) => result.data,
  });
};
