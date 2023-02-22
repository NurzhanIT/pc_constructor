import Routing from "./Routng";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../helpers/privateRoute";
import HomePage from "../pages/HomePage";
const Main = () => {
  return (
    <div className="main">
      <Routing />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-pc" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
};
export default Main;
