import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { tmdbUrl } from "../api/tmdb";
import type { Movie } from "../types/movies";





type PopularResponse ={
  results: Movie[];
}
export const usePopularMovies = (page = 1) => {
  const { data, error, isLoading } = useSWR<PopularResponse>(
    tmdbUrl("/movie/popular", { page }),
    fetcher
  );

  return {
    movies: data?.results,
    pagination: data,
    isLoading,
    isError: error,
  };
};

export default usePopularMovies