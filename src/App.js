import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
