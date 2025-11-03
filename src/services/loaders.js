import articleApi from "./api/articleApi";

export const articleLoader = async ({ params }) => {
  try {
    const res = await articleApi.fetchArticle({ id: params.id });
    const articleData = res.data.article;
    return articleData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
