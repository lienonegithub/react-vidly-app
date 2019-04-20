import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

const getMovies = () => {
  return http.get(apiEndpoint);
};

const getMovie = movieId => {
  return http.get(movieUrl(movieId));
};

const saveMovie = movie => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
};

const deleteMovie = movieId => {
  return http.delete(movieUrl(movieId));
};

export { getMovies, getMovie, saveMovie, deleteMovie };
