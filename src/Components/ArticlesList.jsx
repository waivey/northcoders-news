import React from "react";
import Loader from "./Loader";
import * as api from "../Utils/api";
import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sorted: "created_at"
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, "<<<prevProps");
    if (
      prevProps.slug !== this.props.slug ||
      prevState.sorted !== this.state.sorted
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    api.fetchAllArticles(this.props.slug).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div className="articlesList">
        <Sorter getArticles={this.getArticles} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
