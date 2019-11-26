import React from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";

class CommentsList extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    api.fetchAllCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    console.log(this.state.comments);
    const { comments } = this.state;
    return (
      <div className="commentList">
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
