import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Video from "./components/Video";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
