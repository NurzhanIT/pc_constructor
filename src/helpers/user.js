import axios from "axios";
import $api from "../api";
import { API_URL } from "../api";
export const registerUser = (email, username, password) => {
  $api
    .post("auth/users/", { email, username, password })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const loginUser = (username, password) => {
  axios
    .post(`${API_URL}auth/token/login/`, { username, password })
    .then((res) => localStorage.setItem("Token", res.data.auth_token))
    .catch((err) => console.log(err));
};
