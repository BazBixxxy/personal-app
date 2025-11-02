import { instance } from "../axios";

const articleApi = {
  createArticle: (data) => {
    return instance.post("/articles", data);
  },
  updateArticle: (id, data) => {
    return instance.patch(`/articles/${id}`, data);
  },
  fetchArticle: (id) => {
    return instance.get(`/articles/${id}`);
  },
  deleteArticle: (id) => {
    return instance.delete(`/articles/${id}`);
  },
  fetchArticles: (params) => {
    return instance.get("/articles", { params });
  },
};

export default articleApi;
