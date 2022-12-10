import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Amplify } from "aws-amplify";
import { AWSLexV2Provider } from '@aws-amplify/interactions';

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import Catalogue from "./pages/Catalogue";
import Products from "./pages/cruds/Products";

Amplify.addPluggable(new AWSLexV2Provider());

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:4099b113-7a24-4e37-8974-8de2d6d5310e',
    region: "us-east-1",
    userPoolId: "us-east-1_BPvfBtzpQ", // Please change this value.
    userPoolWebClientId: "1u6j86bkbgs0uboa6filjnvmcj", // Please change this value.
  },
  Interactions: {
    bots: {
      "sampleBot": {
        name: "sampleBot",
        aliasId: "TSTALIASID",
        botId: "MEBL3MUSQU",
        localeId: "es_419",
        region: "us-east-1",
        providerName: "AWSLexV2Provider",
      },
    },
  }
});

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
