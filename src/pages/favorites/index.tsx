import { MovieLink } from "../../components/MovieLink";
import { useFetch } from "../../utils/useFetch";

const LOCAL_SERVER_IP = process.env.REACT_APP_LOCAL_SERVER_IP;

export const Favorites = () => {
  const { data, isPending, error } = useFetch(`${LOCAL_SERVER_IP}`);

  return (
    <main className="favoritespage">
      <div className="favoritespage-wrapper container">
        <h2>Favorite Movies</h2>

        <ul className="movie-search-results">
          {error && <span className="fetch-status-error">{error}</span>}
          {isPending && <span className="fetch-status">Loading...</span>}
          {!data?.length && <li className="top-list-item empty">Empty</li>}
          {!isPending &&
            data?.map((movie: any) => (
              <li key={movie.id} className="search-result">
                <MovieLink localItem={movie} modalName="movie-details" />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};
