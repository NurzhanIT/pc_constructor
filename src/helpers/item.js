import $api from "../api";
import { setComponents } from "../store/itemsReducer";
export const getComponents = () => {
  return (dispatch) => {
    $api
      .get("components/")
      .then((response) => dispatch(setComponents(response.data)))
      .catch((err) => {
        console.log(err.response);
      });
  };
};
