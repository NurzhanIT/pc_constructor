import Routing from "./Routng";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../helpers/privateRoute";
import HomePage from "../pages/HomePage";
import LogingPage from "../pages/LogingPage";
import NewsPage from "../pages/NewsPage";
import UserPc from "../pages/UserPc";
const Main = () => {
  return (
    <div className="main">
      <Routing />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-pc" element={<UserPc />} />
        <Route path="/login" element={<LogingPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
};
export default Main;
