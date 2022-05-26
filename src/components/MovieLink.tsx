import { useDispatch } from "react-redux";
import { open as _openModal } from "../components/Modal/modalSlice";
import { setCurrentMovieId } from "../globalSlice";

export const MovieLink = (props: any) => {
  const dispatch = useDispatch();
  const { item, modalName } = props;

  const openModal = (modalName: string, movieId: number) => (event: any) => {
    event.preventDefault();

    dispatch(setCurrentMovieId(movieId));
    dispatch(_openModal(modalName));
  };

  return (
    <button className="movie-link" onClick={openModal(modalName, item.id)}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item.original_title.split(" ")[0]}
        className="movie-image"
      />
      <div>
        <h3>{item.original_title}</h3>
        <span>{item?.release_date?.substring(0, 4)}</span>
      </div>
    </button>
  );
};
