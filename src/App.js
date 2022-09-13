import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUserContext } from "./context/UserContext";

function App() {
  const { me } = useUserContext();

  return (
    <div className="App">
      {me && <Link to="admin">Admin component</Link>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
