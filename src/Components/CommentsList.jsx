import React from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";
import Sorter from "./Sorter";
import CommentAdder from "./CommentAdder";
import Loader from "./Loader";
import ErrHandler from "./ErrHandler";
import Paginator from "./Paginator";

class CommentsList extends React.Component {
  state = {
    comments: [],
    sorted: "created_at",
    isLoading: true,
    err: "",
    maxPage: 1,
    page: 1
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sorted !== this.state.sorted ||
      prevState.page !== this.state.page
    ) {
      this.getComments();
    }
  }

  getComments = () => {
    api
      .fetchAllCommentsByArticleId(
        this.props.article_id,
        this.state.sorted,
        this.state.page
      )
      .then(({ comments, total_count }) => {
        this.setState({
          comments,
          isLoading: false,
          maxPage: Math.ceil(total_count / 10)
        });
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

  handlePageChangeComments = direction => {
    console.log("helloooooo???");
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler msg={err} />;
    return (
      <div className="commentListSection">
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
        <Paginator
          maxPage={this.state.maxPage}
          page={this.state.page}
          handlePageChange={this.handlePageChangeComments}
        />
      </div>
    );
  }
}

export default CommentsList;
