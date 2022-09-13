import React from "react";

import { useUserContext } from "../context/UserContext";
import Home from "./Home";
const ProtectedRoute = ({ children }) => {
  const { me } = useUserContext();
  return me ? children : <Home />;
};

export default ProtectedRoute;
