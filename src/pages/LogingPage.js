import { useState } from "react";
import Login from "../components/Login";
import { userLogState } from "../store/userReducer";
import Register from "../components/Register";
import { useSelector } from "react-redux";
const LogingPage = () => {
  const user = useSelector((user) => user.user);

  const [userLog, setUserLog] = useState(true);
  return (
    <div className="logingpage">
      <div className="logging_box">
        <div className="logingpage_header">PC Wizard</div>
        {userLog ? (
          <Login setUserLog={setUserLog} />
        ) : (
          <Register setUserLog={setUserLog} />
        )}
      </div>
    </div>
  );
};
export default LogingPage;
