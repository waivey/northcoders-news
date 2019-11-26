import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  title,
  author,
  created_at,
  comment_count,
  votes,
  article_id
}) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>

      <p>
        Posted by: {author}, comments: {comment_count}
      </p>
      <p>{created_at} </p>
      <p>votes: {votes}</p>
    </div>
  );
};

export default ArticleCard;
