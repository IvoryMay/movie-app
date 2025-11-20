import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { tmdbUrl } from "../api/tmdb";

export const useMovieDetails = (id: number) => {
  const { data, error, isLoading } = useSWR(
    id ? tmdbUrl(`/movie/${id}`) : null,
    fetcher
  );

  return {
    movie: data,
    isLoading,
    isError: error,
  };
};

export default useMovieDetails