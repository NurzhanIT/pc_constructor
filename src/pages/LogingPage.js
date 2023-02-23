import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
const LogingPage = () => {
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
