import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/auth`;
const tokenKey = "token";

const getJwt = () => {
  return localStorage.getItem(tokenKey);
};
http.setJwt(getJwt());

const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
};

const loginWithJwt = jwt => {
  localStorage.setItem(tokenKey, jwt);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};

export default { login, loginWithJwt, logout, getCurrentUser, getJwt };
