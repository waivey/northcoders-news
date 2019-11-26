import React from "react";
import Voter from "./Voter";
import * as utils from "../Utils/utils";

const CommentCard = ({ author, created_at, body, votes, comment_id, user }) => {
  return (
    <div className="commentCard">
      <h5>
        Posted by: {author}, {utils.formatDate(created_at)}
      </h5>
      {user === author && <button>Delete Comment</button>}
      <Voter id={comment_id} votes={votes} type="comments" />
      <p>{body}</p>
    </div>
  );
};

export default CommentCard;
