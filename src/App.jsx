import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./components/Open";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
