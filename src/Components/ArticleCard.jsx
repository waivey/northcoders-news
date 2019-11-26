import React from "react";

const ArticleCard = ({ title, author, created_at, comment_count, votes }) => {
  return (
    <div className="articleCard">
      <h3>{title}</h3>
      <p>
        Posted by: {author}, comments: {comment_count}
      </p>
      <p>{created_at} </p>
      <p>votes: {votes}</p>
    </div>
  );
};

export default ArticleCard;
