const axios = require("axios");

exports.fetchAllArticles = (topic, sort_by, p) => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/articles/", {
      params: { topic, sort_by, p }
    })
    .then(({ data: { articles, total_count } }) => {
      return { articles, total_count };
    });
};

exports.fetchTopics = () => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

exports.fetchSingleArticle = article_id => {
  return axios
    .get(
      `https://nc-backend-project-news.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data: { article } }) => {
      return article;
    });
};

exports.fetchAllCommentsByArticleId = (article_id, sort_by) => {
  return axios
    .get(
      `https://nc-backend-project-news.herokuapp.com/api/articles/${article_id}/comments`,
      { params: { sort_by } }
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

exports.fetchAllUsers = () => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/users")
    .then(({ data: { users } }) => {
      return users;
    });
};

exports.updateVotes = (type, id, vote) => {
  return axios.patch(
    `https://nc-backend-project-news.herokuapp.com/api/${type}/${id}`,
    {
      inc_votes: vote
    }
  );
};

exports.postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://nc-backend-project-news.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

exports.removeItem = (type, id) => {
  return axios.delete(
    `https://nc-backend-project-news.herokuapp.com/api/${type}/${id}`
  );
};

exports.postArticle = (username, title, body) => {
  return axios
    .post("https://nc-backend-project-news.herokuapp.com/api/articles", {
      username,
      title,
      body
    })
    .then(({ data: { article } }) => {
      return article;
    });
};
