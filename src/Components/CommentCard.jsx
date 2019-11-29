import React from "react";
import Voter from "./Voter";
import * as utils from "../Utils/utils";
import Deleter from "./Deleter";

const CommentCard = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  user,
  getComments
}) => {
  return (
    <section className="commentCard">
      <div className="commentCardBody">
        <h5>
          Posted by: {author}, {utils.formatDate(created_at)}
        </h5>
        {user === author && (
          <Deleter id={comment_id} getComments={getComments} type="comments" />
        )}

        <p>{body}</p>
      </div>
      <div className="commentVoter">
        <Voter id={comment_id} votes={votes} type="comments" />
      </div>
    </section>
  );
};

export default CommentCard;
