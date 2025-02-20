import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./components/Open";
import Home from "./components/Home";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
