import { FC } from "react";
import { MovieLink } from "./MovieLink";

interface TopMoviesProps {
  movieData: Array<any>;
}

export const TopMovies: FC<TopMoviesProps> = ({ movieData }) => {
  return (
    <ul className="top-list">
      {!movieData?.length && <li className="top-list-item empty">Empty</li>}
      {movieData &&
        movieData.slice(0, 10).map((movie: { id: number; title: string }) => (
          <li key={movie.id} className="top-list-item">
            <MovieLink type="simple" localItem={movie} modalName="movie-details" />
          </li>
        ))}
    </ul>
  );
};
