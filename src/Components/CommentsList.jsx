import React from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";
import Sorter from "./Sorter";
import CommentAdder from "./CommentAdder";
import Loader from "./Loader";
import ErrHandler from "./ErrHandler";

class CommentsList extends React.Component {
  state = {
    comments: [],
    sorted: "created_at",
    isLoading: true,
    err: ""
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
        this.setState({ comments, isLoading: false });
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

  updateComments = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  sortComments = value => {
    this.setState({ sorted: value });
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler msg={err} />;
    return (
      <>
        {this.props.user !== "" && (
          <CommentAdder
            article_id={this.props.article_id}
            user={this.props.user}
            updateComments={this.updateComments}
          />
        )}
        <div className="commentList">
          <Sorter name="comments" sortComments={this.sortComments} />
          {comments.map(comment => {
            return (
              <CommentCard
                getComments={this.getComments}
                user={this.props.user}
                key={comment.comment_id}
                {...comment}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CommentsList;
