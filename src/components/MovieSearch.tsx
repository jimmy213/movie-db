import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/useFetch";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const MovieSearch = () => {
  const [query, setQuery] = useState("");

  const { data: searchData, isPending } = useFetch(
    `${query && `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${query}`}`
  );

  const SearchInput = () => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        setQuery(event.target.value);
      }
    };

    return (
      <>
        <input
          type="search"
          placeholder="Search for a movie"
          className="search-field"
          onKeyDown={handleKeyDown}
        />
      </>
    );
  };

  return (
    <div className="movie-search">
      <SearchInput />

      {query && !isPending && !searchData.length && (
        <span className="fetch-status-error">Movie not found</span>
      )}
      {query && isPending && <span className="fetch-status">Searching...</span>}
      {!isPending && searchData && (
        <ul className={`movie-search-results ${!searchData.length ? "results-empty" : ""}`}>
          {searchData.map((movie: any) => (
            <li key={movie.id} className="search-result">
              <Link to={`movies/${movie.id}`} className="movie-link">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie.original_title.split(" ")[0]}
                  className="movie-image"
                />
                <div>
                  <h3>{movie.original_title}</h3>
                  <span>{movie?.release_date?.substring(0, 4)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
