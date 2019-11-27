import React, { Component } from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";

class Deleter extends Component {
  handlClick = () => {
    const removeButton = window.confirm(
      `Are you sure you want to delete your ${this.props.type}?`
    );
    if (removeButton === true) {
      if (this.props.type === "comment") {
        api.removeItem(this.props.type, this.props.comment_id).then(() => {
          this.props.getComments();
        });
      }
      if (this.props.type === "article") {
        api.removeItem(this.props.type, this.props.article_id).then(() => {
          navigate("/");
        });
      }
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

export default Deleter;
