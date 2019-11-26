import React from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";
import Sorter from "./Sorter";

class CommentsList extends React.Component {
  state = {
    comments: [],
    sorted: "created_at"
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sorted !== this.state.sorted) {
      this.getComments();
    }
  }

  getComments = () => {
    api
      .fetchAllCommentsByArticleId(this.props.article_id, this.state.sorted)
      .then(comments => {
        this.setState({ comments });
      });
  };

  sortComments = value => {
    console.log(value, "did we make it back to sortComments in the LIst??");
    this.setState({ sorted: value });
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="commentList">
        <Sorter name="comments" sortComments={this.sortComments} />
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
