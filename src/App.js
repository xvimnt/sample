import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
