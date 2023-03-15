import { useState } from "react";
import { loginUser } from "../helpers/user";
import { useNavigate } from "react-router-dom";
const Login = ({ setUserLog }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="login">
      <div className="labels">
        <label for="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="username"
          type="text"
          placeholder="Введите логин"
        />
        <label for="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          placeholder="введите пароль"
        />
      </div>
      <div className="submission">
        <div
          onClick={() => {
            loginUser(username, password);
            routeChange();
          }}
          className="submit_btn"
        >
          Войти
        </div>
        <div
          onClick={() => {
            setUserLog(false);
          }}
          className="submit_btn"
        >
          Нет аккаунта?
        </div>
      </div>
    </div>
  );
};
export default Login;
