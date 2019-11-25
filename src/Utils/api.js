const axios = require("axios");

exports.fetchAllArticles = (topic, created_at, votes, comment_count) => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/articles/", {
      params: { topic, sort_by: comment_count }
    })
    .then(({ data: { articles } }) => {
      console.log(articles);
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
