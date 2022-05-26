import { MovieLink } from "./MovieLink";

export const MovieResults = (props: any) => {
  const { data, isPending, error } = props;

  return (
    <ul className="movie-search-results">
      {error && <span className="fetch-status-error">{error}</span>}
      {isPending && <span className="fetch-status">Loading...</span>}
      {!isPending &&
        data?.map((item: any) => (
          <li key={item.id} className="search-result">
            <MovieLink item={item} modalName="movie-details" />
          </li>
        ))}
    </ul>
  );
};
