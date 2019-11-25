import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Home path="/" />
        <Articles path="/articles/*" />
        <Topics path="/topics/*" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
