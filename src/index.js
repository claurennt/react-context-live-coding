import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const myVariable = "Hello World";
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);
