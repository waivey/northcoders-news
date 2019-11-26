import React, { Component } from "react";
import * as api from "../Utils/api";

class CommentDeleter extends Component {
  handlClick = () => {
    const removeButton = window.confirm(
      "Are you sure you want to delete your comment?"
    );
    if (removeButton === true) {
      api.removeComment(this.props.comment_id).then(() => {
        this.props.getComments();
      });
    }
  };

  render() {
    return (
      <div className="deleteComment">
        <button onClick={this.handlClick}>Delete</button>
      </div>
    );
  }
}

export default CommentDeleter;
