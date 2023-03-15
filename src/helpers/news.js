import { setNews } from "../store/newsReducer";
import $api from "../api";
export const getNewsList = () => {
  return (dispatch) => {
    $api
      .get("news/")
      .then((response) => dispatch(setNews(response.data)))
      .catch((err) => {
        console.log(err);
      });
  };
};
