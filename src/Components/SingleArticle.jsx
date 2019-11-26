import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true
  };

  componentDidMount() {
    this.getSingleArticle(/*article_id still needed!!! */);
  }

  getSingleArticle = (/*article_id still needed!!! */) => {
    api.fetchSingleArticle(/*article_id still needed!!! */).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
    return <div></div>;
  }
}

export default SingleArticle;
