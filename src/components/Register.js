import { useState } from "react";
import { registerUser } from "../helpers/user";
const Register = ({ setUserLog }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login">
      <div className="labels">
        <label for="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          placeholder="Введите почту"
        />
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
            registerUser(email, username, password);
            setUserLog(true);
          }}
          className="submit_btn"
        >
          Зарегистрироваться
        </div>
        <div onClick={() => setUserLog(true)} className="submit_btn">
          Есть аккаунт?
        </div>
      </div>
    </div>
  );
};
export default Register;
