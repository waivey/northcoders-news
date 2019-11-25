import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isVisible: !currentState };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
        {this.state.isVisible && this.props.children}
      </div>
    );
  }
}

export default ViewToggler;
