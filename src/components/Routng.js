import RouteElemenet from "./RouteElement";
import { routes } from "../data/data";
const Routing = () => {
  return (
    <div className="routing">
      {routes &&
        routes.map((route) => <RouteElemenet route={route} key={route.id} />)}
    </div>
  );
};
export default Routing;
