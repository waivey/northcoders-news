const axios = require("axios");

exports.fetchAllArticles = (topic, sort_by) => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/articles/", {
      params: { topic, sort_by }
    })
    .then(({ data: { articles } }) => {
      return articles;
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
  console.log(sort_by, "sort_by in api??");
  return axios
    .get(
      `https://nc-backend-project-news.herokuapp.com/api/articles/${article_id}/comments`,
      { params: { sort_by } }
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};
