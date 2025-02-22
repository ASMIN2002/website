import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./components/Open";
import Home from "./components/Home";
import Leetcode from "./components/Leetcode";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leetcode" element={<Leetcode />} />
      </Routes>
    </Router>
  );
};

export default App;
