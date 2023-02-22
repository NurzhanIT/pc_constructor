import logo from "./logo.svg";
import "./App.css";
import { loginUser } from "./helpers/user";
import { createPc } from "./helpers/user_pc";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./helpers/privateRoute";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
