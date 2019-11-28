import React, { Component } from "react";
import * as api from "../Utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = ({ target }) => {
    api.updateVotes(this.props.type, this.props.id, +target.name);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + +target.name };
    });
  };

  render() {
    return (
      <section className="voter">
        <div className="upArrow">
          <button
            name="1"
            disabled={this.state.optimisticVotes > 0}
            onClick={this.handleClick}
          >
            <img
              src="https://image.flaticon.com/icons/svg/16/16049.svg"
              alt="up arrow"
            />
          </button>
        </div>
        <h5>{this.props.votes + this.state.optimisticVotes}</h5>
        <div className="downArrow">
          <button
            name="-1"
            disabled={this.state.optimisticVotes < 0}
            onClick={this.handleClick}
          >
            <img
              src="https://image.flaticon.com/icons/svg/16/16049.svg"
              alt="down arrow"
            />
          </button>
        </div>
      </section>
    );
  }
}

export default Voter;
