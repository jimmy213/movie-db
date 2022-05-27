import { useState } from "react";
import { useFetch } from "../utils/useFetch";
import { MovieLink } from "./MovieLink";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const MovieSearch = () => {
  const [query, setQuery] = useState("");

  const { data, isPending } = useFetch(
    `${query && `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${query}`}`
  );

  const searchData = data.results;

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

      {query && isPending && <span className="fetch-status">Searching...</span>}
      {query && !isPending && !searchData?.length && (
        <span className="fetch-status-error">Movie not found</span>
      )}
      {!isPending && searchData && (
        <ul className={`movie-search-results ${!searchData?.length ? "results-empty" : ""}`}>
          {searchData?.map((movie: any) => (
            <li key={movie.id} className="search-result">
              <MovieLink item={movie} modalName="movie-details" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
