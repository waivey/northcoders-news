import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import ViewToggler from "./ViewToggler";
import CommentsList from "./CommentsList";
import Voter from "./Voter";
import * as utils from "../Utils/utils";
import ErrHandler from "./ErrHandler";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    err: ""
  };

  componentDidMount() {
    this.getSingleArticle(this.props.article_id);
  }

  getSingleArticle = () => {
    api
      .fetchSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
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

  render() {
    const { isLoading, article, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler msg={err} />;
    return (
      <main className="singleArticle">
        <h2>{article.title}</h2>
        <h5>
          Posted by: {article.author}, {utils.formatDate(article.created_at)}
        </h5>
        <Voter id={article.article_id} votes={article.votes} type="articles" />
        <p>{article.body}</p>

        <ViewToggler name={article.comment_count}>
          <CommentsList
            article_id={article.article_id}
            user={this.props.user}
          />
        </ViewToggler>
      </main>
    );
  }
}

export default SingleArticle;
