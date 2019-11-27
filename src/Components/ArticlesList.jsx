import React from "react";
import Loader from "./Loader";
import * as api from "../Utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";
import ErrHandler from "./ErrHandler";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sorted: "created_at",
    err: ""
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.slug !== this.props.slug ||
      prevState.sorted !== this.state.sorted
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    api
      .fetchAllArticles(this.props.slug, this.state.sorted)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(
        ({
          response: {
            data: { msg }
          }
        }) => {
          this.setState({ err: msg, isLoading: false });
        }
      );
  };

  sortArticles = value => {
    this.setState({ sorted: value });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler msg={err} />;
    return (
      <div className="articlesList">
        <Sorter name="articles" sortArticles={this.sortArticles} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
