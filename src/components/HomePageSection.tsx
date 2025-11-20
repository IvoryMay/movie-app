


import { usePopularMovies } from "../hooks/usePopularMovies";
import { Link } from "react-router-dom";

export default function HomePageSection() {
  const { movies, isLoading } = usePopularMovies();

  if (isLoading) {
    return <p className="text-white p-6">Loading movies...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {movies?.map(movie => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="bg-gray-900 rounded-xl overflow-hidden shadow"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-full h-64 object-cover"
          />
          <div className="p-2 text-white text-sm">{movie.title}</div>
        </Link>
      ))}
    </div>
  );
}
