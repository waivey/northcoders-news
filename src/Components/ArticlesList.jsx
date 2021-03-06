import React from "react";
import Loader from "./Loader";
import * as api from "../Utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";
import ErrHandler from "./ErrHandler";
import Paginator from "./Paginator";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sorted: "created_at",
    err: "",
    maxPage: 1,
    page: 1
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.slug !== this.props.slug ||
      prevState.sorted !== this.state.sorted ||
      prevState.page !== this.state.page
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    api
      .fetchAllArticles(this.props.slug, this.state.sorted, this.state.page)
      .then(({ articles, total_count }) => {
        this.setState({
          articles,
          isLoading: false,
          maxPage: Math.ceil(total_count / 10)
        });
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

  handlePageChange = direction => {
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler msg={err} />;
    return (
      <main className="articlesList">
        <Sorter name="articles" sortArticles={this.sortArticles} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
        <Paginator
          maxPage={this.state.maxPage}
          page={this.state.page}
          handlePageChange={this.handlePageChange}
        />
      </main>
    );
  }
}

export default ArticlesList;
