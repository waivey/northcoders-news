import React from "react";

class Sorter extends React.Component {
  state = {
    sort_by: ["comment_count", "created_at", "votes"]
  };

  handleSelect = ({ target: { value } }) => {
    this.props.getArticles(value);
  };

  render() {
    return (
      <select name="sort_by">
        <option value="" defaultValue hidden>
          Sort
        </option>
        {this.state.sort_by.map(option => {
          return (
            <option key={option} value={option} onClick={this.handleSelect}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Sorter;