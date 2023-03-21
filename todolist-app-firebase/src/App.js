import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";


function App() {
  return (
  <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<ResetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;

