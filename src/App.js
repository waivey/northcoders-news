import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Articles path="/" />
        <Topics path="/topics" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
