import axios from "axios";
import $api from "../api";

export const registerUser = (username, email, password) => {
  $api
    .post("register/", { username, email, password })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const loginUser = (username, password) => {
  $api
    .post("http://127.0.0.1:8000/api/login/", { username, password })
    .then((res) => localStorage.setItem("Token", res.data.token))
    .catch((err) => console.log(err));
};
