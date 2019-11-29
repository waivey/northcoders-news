import React from "react";
import { Link } from "@reach/router";
import * as utils from "../Utils/utils";
import Voter from "./Voter";
import Deleter from "./Deleter";

const ArticleCard = ({
  title,
  author,
  created_at,
  comment_count,
  votes,
  article_id,
  user
}) => {
  return (
    <div className="articleCard">
      <div className="articleInfo">
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        {user === author && <Deleter />}
        <p>
          Posted by: {author}, Comments: {comment_count}
        </p>
        <p>{utils.formatDate(created_at)} </p>
      </div>

      <Voter id={article_id} votes={votes} type="articles" />
    </div>
  );
};

export default ArticleCard;
