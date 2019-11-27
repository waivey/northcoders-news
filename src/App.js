import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import ErrHandler from "./Components/ErrHandler";

class App extends React.Component {
  state = {
    user: ""
  };

  getLoginStatus = value => {
    this.setState({ user: value });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Navbar getLoginStatus={this.getLoginStatus} />
        <Router>
          <ArticlesList path="/" user={user} />
          <ArticlesList path="/topics/:slug" user={user} />
          <SingleArticle path="/articles/:article_id" user={user} />
          <ErrHandler default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
