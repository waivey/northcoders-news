import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import ViewToggler from "./ViewToggler";
import CommentsList from "./CommentsList";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true
  };

  componentDidMount() {
    this.getSingleArticle(this.props.article_id);
  }

  getSingleArticle = () => {
    api.fetchSingleArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const { isLoading, article } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div className="singleArticle">
        <h2>{article.title}</h2>
        <h5>
          Posted by: {article.author}, {article.created_at}
        </h5>
        <h4>Votes: {article.votes}</h4>
        <p>{article.body}</p>
        <ViewToggler name={article.comment_count}>
          <CommentsList article_id={article.article_id} />
        </ViewToggler>
      </div>
    );
  }
}

export default SingleArticle;
