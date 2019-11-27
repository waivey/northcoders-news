import React, { Component } from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";
import ErrHandler from "./ErrHandler";

class Deleter extends Component {
  state = {
    err: ""
  };

  handlClick = () => {
    const removeButton = window.confirm(
      `Are you sure you want to delete your ${this.props.type}?`
    );
    if (removeButton === true) {
      if (this.props.type === "comments") {
        api
          .removeItem(this.props.type, this.props.id)
          .then(() => {
            this.props.getComments();
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
      }
      if (this.props.type === "articles") {
        api
          .removeItem(this.props.type, this.props.id)
          .then(() => {
            navigate("/");
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
      }
    }
  };

  render() {
    const { err } = this.state;

    if (err) return <ErrHandler msg={err} />;
    return (
      <div className="deleteComment">
        <button onClick={this.handlClick}>Delete</button>
      </div>
    );
  }
}

export default Deleter;
