import logo from "../assets/logo/wizard_logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="headare_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="loggin">
          <div className="register">Зарегистрироваться</div>
          <div className="login">Войти</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
