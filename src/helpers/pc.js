import $api from "../api";

export const getPcs = () => {
  $api.get("user-pc/").then((res) => console.log(res));
};
export const createPcs = () => {
  return $api.post("user-pc/");
};
