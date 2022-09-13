import React from "react";
import { useUserContext } from "../context/UserContext";

const Grandgrandgrandchild = () => {
  const { me, login } = useUserContext();
  console.log(me);
  // const me = useContext(UserContext);
  return (
    <div className="Grandgrandgrandchild">
      <h5>Grandgrandgrandchild</h5>
      {me && (
        <div>
          <h6> Props should be displayed here:</h6>
          <p>Username: {me.username}</p>
          <p>Email: {me.email}</p>
          <p>Admin: {me.admin}</p>
        </div>
      )}
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Grandgrandgrandchild;
