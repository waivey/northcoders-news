const axios = require("axios");

exports.fetchAllArticles = topic => {
  return axios
    .get("https://nc-backend-project-news.herokuapp.com/api/articles/", {
      params: { topic }
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
