import React, { Component } from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";

class ArticleAdder extends Component {
  state = {
    title: "",
    body: ""
  };

  handleInput = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    api
      .postArticle(this.props.user, this.state.title, this.state.body)
      .then(article => {
        navigate(`/articles/${article.article_id}`);
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
    return (
      <div className="articleAdder">
        <form onSubmit={this.handleSubmit}>
          Topic:
          <select name="topics" id="">
            {this.props.topics.map(topic => {
              return (
                <option key={`${topic.slug}2`} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
          <br />
          Title:
          <input
            type="text"
            id="title"
            value={this.state.title}
            required
            onChange={this.handleInput}
          ></input>
          <br />
          Article:
          <input
            type="text"
            id="body"
            value={this.state.body}
            required
            onChange={this.handleInput}
          ></input>
          <button>Submit Article</button>
        </form>
      </div>
    );
  }
}

export default ArticleAdder;
