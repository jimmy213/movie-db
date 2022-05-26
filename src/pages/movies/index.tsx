import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { useFetch } from "../../utils/useFetch";
import { MovieResults } from "../../components/MovieResults";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const Movies = () => {
  const [filter, setFilter] = useState("popularity.desc");
  const [pageSize, setPageSize] = useState(1);

  const totalPages = 500;
  const totalResults = totalPages * pageSize;

  const location = useLocation();
  const search: any = useMemo(() => new URLSearchParams(location.search), [location]);
  const page = parseInt(search.get("page"), 10) || 1;

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${filter}&page=${page}`
  );

  useEffect(() => {
    data.results && setPageSize(data.results.length);
  }, [data.results]);

  const saveFilter = (filter: string) => {
    setFilter(filter);
  };

  const currentData = data.results;

  return (
    <main className="moviespage">
      <div className="moviespage-wrapper container">
        <form className="filter-wrapper">
          <label htmlFor="filters" className="filter-title">
            Filter by:
          </label>

          <select
            name="filters"
            id="filters"
            value={filter}
            onChange={(e) => saveFilter(e.target.value)}
            className="filter-options"
          >
            <option value="popularity.asc">Popularity &#8593;</option>
            <option value="popularity.desc">Popularity &#8595;</option>
            <option value="release_date.asc">Release &#8593;</option>
            <option value="release_date.desc">Release &#8595;</option>
            <option value="original_title.asc">Title &#8593;</option>
            <option value="original_title.desc">Title &#8595;</option>
          </select>
        </form>

        <MovieResults data={currentData} isPending={isPending} error={error} />

        <Pagination total={totalResults} pageSize={pageSize} currentPage={page} />
      </div>
    </main>
  );
};
