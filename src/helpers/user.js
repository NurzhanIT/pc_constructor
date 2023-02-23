import axios from "axios";
import $api from "../api";
import { API_URL } from "../api";
export const registerUser = (username, email, password) => {
  $api
    .post("register/", { username, email, password })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const loginUser = (username, password) => {
  axios
    .post(`${API_URL}auth/token/login/`, { username, password })
    .then((res) => localStorage.setItem("Token", res.data.auth_token))
    .catch((err) => console.log(err));
};
