import { useEffect, useState } from "react";
import Item from "../components/Item";
import { getComponents } from "../helpers/item";
import { updateComponentState } from "../store/itemsReducer";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../helpers/user";
const HomePage = () => {
  const dispatch = useDispatch();
  const isUpdate = useSelector(
    (components) => components.components.updateComponents
  );
  const components = useSelector(
    (components) => components.components.components
  );
  const [state, setState] = useState(true);
  useEffect(() => {
    dispatch(getComponents());
  }, [state]);

  console.log(isUpdate, components);
  return (
    <div className="homepage">
      <div className="serach">
        <input type="text" />
        <div className="search_btn">w</div>
      </div>

      <div className="items">
        {components.map((component) => (
          <Item component={component} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
