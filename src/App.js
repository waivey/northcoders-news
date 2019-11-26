import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:slug" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
