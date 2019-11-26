import React from "react";

const CommentCard = ({ author, created_at, body, votes }) => {
  return (
    <div className="commentCard">
      <h5>
        Posted by: {author}, {created_at}
      </h5>
      <h4>Votes: {votes}</h4>
      <p>{body}</p>
    </div>
  );
};

export default CommentCard;
