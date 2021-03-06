import { MovieSearch } from "../../components/MovieSearch";
import { TopMovies } from "../../components/TopMovies";
import { useFetch } from "../../utils/useFetch";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const LOCAL_SERVER_IP = process.env.REACT_APP_LOCAL_SERVER_IP;

export const Home = () => {
  const {
    data: movieData,
    isPending,
    error
  } = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);

  const { data: localData } = useFetch(`${LOCAL_SERVER_IP}`);

  return (
    <main className="homepage">
      <div className="homepage-wrapper container">
        <MovieSearch />

        <div className="main-content">
          <section className="top-movies">
            <h3 className="list-title">Top 10 Movies</h3>
            {error && <span className="fetch-status-error">{error}</span>}
            {isPending && <span className="fetch-status">Loading...</span>}
            {movieData && <TopMovies movieData={movieData.results} />}
          </section>

          <section className="top-favorites">
            <h3 className="list-title">Favorites Top 10</h3>
            {<TopMovies movieData={localData} />}
          </section>
        </div>
      </div>
    </main>
  );
};
