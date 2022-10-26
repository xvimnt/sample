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

Amplify.addPluggable(new AWSLexV2Provider());

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:a7cbadba-3796-41d3-a5c7-7b365de5cd63',
    region: "us-east-1",
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
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
