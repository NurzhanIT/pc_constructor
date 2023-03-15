import { useEffect, useState } from "react";
import { getPcs, createPcs } from "../helpers/pc";
import $api from "../api";
const UserPc = () => {
  //   createPcs();
  const [pc, setPc] = useState([]);
  useEffect(() => {
    $api.post("user-pc/").then((res) => setPc((prev) => prev, res.data));
  }, []);

  return (
    <div className="homepage">
      <div className="items">
        awad
        {/* {components.map((component) => (
             
            ))} */}
      </div>
    </div>
  );
};
export default UserPc;
