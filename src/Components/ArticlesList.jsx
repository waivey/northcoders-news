import React from "react";
import Loader from "./Loader";
import * as api from "../Utils/api";
import ArticleCard from "./ArticleCard";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
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
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
