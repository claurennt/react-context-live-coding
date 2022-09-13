import React, { useContext } from "react";

import Grandchild from "./Grandchild";
// import {UserContext from "../context/UserContext";
const Child = () => {
  // const me = useContext(UserContext);
  return (
    <div className="Child">
      <h2>Child component</h2>
      {/* <p>{me.username}</p> */}
      <Grandchild />
    </div>
  );
};

export default Child;
