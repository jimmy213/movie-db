import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCurrentMovieId } from "../globalSlice";
import { open as _openModal } from "./Modal/modalSlice";

interface TopMoviesProps {
  movieData: Array<any>;
}

export const TopMovies: FC<TopMoviesProps> = ({ movieData }) => {
  const dispatch = useDispatch();

  const openModal = (modalName: string, movieId: number) => (event: any) => {
    event.preventDefault();

    dispatch(setCurrentMovieId(movieId));
    dispatch(_openModal(modalName));
  };

  return (
    <ul className="top-list">
      {movieData &&
        movieData.slice(0, 10).map((movie: { id: number; title: string }) => (
          <li key={movie.id} className="top-list-item">
            <button className="movie-link" onClick={openModal("movie-details", movie.id)}>
              {movie.title}
            </button>
          </li>
        ))}
    </ul>
  );
};
