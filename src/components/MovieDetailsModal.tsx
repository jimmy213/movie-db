import { useSelector } from "react-redux";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal";
import { useFetch } from "../utils/useFetch";
import { useFavorite } from "../utils/useFavorite";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const MovieDetailsModal = () => {
  const { currentMovieId } = useSelector((state: any) => state.global);

  const { data, isPending } = useFetch(
    `https://api.themoviedb.org/3/movie/${currentMovieId}?api_key=${API_KEY}`
  );

  const { isFavorite, handleFavorite } = useFavorite();

  return (
    <>
      <Modal modalName="movie-details">
        {isPending && <span className="fetch-status">Loading...</span>}

        {!isPending && data && (
          <>
            <button
              className={isFavorite ? "movie-fav-true" : "movie-fav-false"}
              onClick={handleFavorite}
            >
              &#9829;
            </button>

            <ModalHeader>
              <h2 className="modal-header-title">{data.title}</h2>
            </ModalHeader>

            <ModalBody>
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                alt={data.title}
                className="modal-body-image"
              />

              <div className="modal-body-details">
                <span className="details-heading">Release Year</span>
                <span>{data?.release_date?.substring(0, 4) || "-"}</span>

                <span className="details-heading">Original Title</span>
                <span>{data.original_title}</span>

                <span className="details-heading">Tagline</span>
                <span>{data.tagline || "-"}</span>

                <span className="details-heading">Overview</span>
                <p>{data.overview}</p>

                <span className="details-heading">Genres</span>
                <span>{data?.genres?.map((genre: any) => `${genre.name} `)}</span>

                <span className="details-heading">IMDB page</span>
                <a
                  href={`https://www.imdb.com/title/${data.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >{`imdb.com/${data.imdb_id}`}</a>
              </div>
            </ModalBody>

            <ModalFooter>
              powered by&nbsp;
              <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                TMDb
              </a>
            </ModalFooter>
          </>
        )}
      </Modal>
    </>
  );
};
