import React from "react";

class Sorter extends React.Component {
  state = {
    sort_by: ["comment_count", "created_at", "votes"]
  };

  handleSelect = ({ target: { value } }) => {
    if (this.props.name === "articles") {
      this.props.sortArticles(value);
    } else {
      this.props.sortComments(value);
    }
  };

  render() {
    let sort_options = [...this.state.sort_by];
    if (this.props.name === "comments") {
      sort_options.shift();
    }
    return (
      <select name="sort_by" onChange={this.handleSelect}>
        <option value="" defaultValue hidden>
          Sort
        </option>
        {sort_options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Sorter;
