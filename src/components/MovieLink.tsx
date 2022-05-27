import { useDispatch } from "react-redux";
import { open as _openModal } from "../components/Modal/modalSlice";
import { setCurrentMovieId } from "../globalSlice";
import { useFetch } from "../utils/useFetch";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const MovieLink = (props: any) => {
  const dispatch = useDispatch();
  const { item, modalName, localItem, type } = props;

  const apiLink = localItem
    ? `https://api.themoviedb.org/3/movie/${localItem.id}?api_key=${API_KEY}`
    : "";

  const { data } = useFetch(apiLink);

  const movie = localItem ? data : item;

  const openModal = (modalName: string, movieId: number) => (event: any) => {
    event.preventDefault();

    dispatch(setCurrentMovieId(movieId));
    dispatch(_openModal(modalName));
  };

  if (type === "simple") {
    return (
      <>
        {movie && (
          <button className="movie-link simple" onClick={openModal(modalName, movie.id)}>
            <h3>{movie?.title}</h3>
          </button>
        )}
      </>
    );
  }

  const imgSource = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "";

  return (
    <>
      {movie && (
        <button className="movie-link" onClick={openModal(modalName, movie.id)}>
          <img src={imgSource} alt={movie?.original_title?.split(" ")[0]} className="movie-image" />
          <div>
            <h3>{movie?.title}</h3>
            <span>{movie?.release_date?.substring(0, 4)}</span>
          </div>
        </button>
      )}
    </>
  );
};
