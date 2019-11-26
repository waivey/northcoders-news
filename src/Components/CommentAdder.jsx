import React, { Component } from "react";
import * as api from "../Utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: ""
  };

  handleInput = event => {
    this.setState({ username: this.props.user, body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    api
      .postComment(this.props.article_id, this.state.username, this.state.body)
      .then(comment => {
        this.props.updateComments(comment);
      });
  };

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <h6>Comment:</h6>{" "}
        <input
          onChange={this.handleInput}
          type="text"
          value={this.state.body}
          required
        ></input>
        <button>Add Comment</button>
      </form>
    );
  }
}

export default CommentAdder;
