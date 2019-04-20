import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/users`;

const register = user => {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
};

export { register };
