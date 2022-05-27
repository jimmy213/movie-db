import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "./useFetch";

const LOCAL_SERVER_IP = process.env.REACT_APP_LOCAL_SERVER_IP;

export const useFavorite = () => {
  const { currentMovieId } = useSelector((state: any) => state.global);
  const [checkFavorite, setCheckFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data } = useFetch(`${LOCAL_SERVER_IP}`);

  const id = currentMovieId;

  useEffect(() => {
    setCheckFavorite(data.filter((movie: any) => movie.id === currentMovieId));
  }, [data, currentMovieId]);

  useEffect(() => {
    checkFavorite.length ? setIsFavorite(true) : setIsFavorite(false);
  }, [checkFavorite]);

  const handleFavorite = () => {
    if (!isFavorite) {
      fetch(`${LOCAL_SERVER_IP}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });

      setIsFavorite(true);
    }

    if (isFavorite) {
      fetch(`${LOCAL_SERVER_IP}/${id}`, {
        method: "DELETE"
      });

      setIsFavorite(false);
    }
  };

  return { isFavorite, setIsFavorite, handleFavorite };
};
