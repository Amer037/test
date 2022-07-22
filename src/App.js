import React from "react";
import { Login } from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
