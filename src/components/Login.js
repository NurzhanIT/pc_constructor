const Login = () => {
  return (
    <div className="login">
      <div className="labels">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Введите логин" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="введите пароль" />
      </div>
      <div className="submission">
        <div className="submit_btn">Войти</div>
        <div className="submit_btn">Нет аккаунта?</div>
      </div>
    </div>
  );
};
export default Login;
