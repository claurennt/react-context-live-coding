import React from "react";
import { useUserContext } from "../context/UserContext";
import Child from "./Child";
const Home = () => {
  const { me } = useUserContext();
  return (
    <div>
      {" "}
      {me ? <h2>Welcome back {me.username} </h2> : <h1>Home component</h1>}
      <Child />
    </div>
  );
};

export default Home;
