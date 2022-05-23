import { FC } from "react";
import { Link } from "react-router-dom";

interface TopMoviesProps {
  movieData: Array<any>;
}

export const TopMovies: FC<TopMoviesProps> = ({ movieData }) => {
  return (
    <ul className="top-list">
      {movieData &&
        movieData.slice(0, 10).map((movie: { id: number; original_title: string }) => (
          <li key={movie.id} className="top-list-item">
            <Link to={`/movies/${movie.id}`} className="movie-link">
              {movie.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
