import { instance } from "../axios";

const bookmarkApi = {
  createBookmark: ({ id }) => {
    return instance.post(`/bookmarks/${id}`);
  },
  deleteBookmark: ({ id }) => {
    return instance.delete(`/bookmarks/${id}`);
  },
  fetchBookmarks: () => {
    return instance.get("/bookmarks");
  },
  fetchBookmark: ({ id }) => {
    return instance.get(`/bookmarks/${id}`);
  },
};

export default bookmarkApi;
