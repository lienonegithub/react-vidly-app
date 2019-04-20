import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

// axios.interceptors.response.use(success, error)
axios.interceptors.response.use(null, error => {
  const exceptedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (!exceptedError) {
    logger.logs(error);
    // console.log("Logging the error", error);
    toast.error("Something failed while deleting a post!");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
