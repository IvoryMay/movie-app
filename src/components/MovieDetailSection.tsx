import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetail";

export default function MovieDetailSection() {
  const { id } = useParams();
  const { movie, isLoading } = useMovieDetails(Number(id));

  if (isLoading) {
    return <p className="text-white p-6">Loading...</p>;
  }

  if (!movie) return null;

  return (
    <div className="p-6 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="w-64 rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <p className="mt-4 opacity-80">{movie.overview}</p>

      <div className="mt-4">
        <span className="font-bold">Rating:</span> {movie.vote_average}
      </div>
    </div>
  );
}
