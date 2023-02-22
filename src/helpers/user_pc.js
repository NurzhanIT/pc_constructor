import $api from "../api";

export const createPc = () => {
  $api
    .post("user-pc/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
