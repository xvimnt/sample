import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
