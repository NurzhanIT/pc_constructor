import logo from "../assets/logo/wizard_logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header">
      <div className="headare_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="loggin">
          <div onClick={() => navigate("/login")} className="register">
            Зарегистрироваться
          </div>
          <div onClick={() => navigate("/login")} className="logger ">
            Войти
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
