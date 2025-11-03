import React from "react";
import { useLoaderData } from "react-router-dom";
import EditArticleForm from "../components/EditArticleForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditArticlePage = () => {
  const article = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    article
      ? (document.title = `${article.title} | Edit Article`)
      : navigate(-1);
  }, []);

  return (
    <main>
      <EditArticleForm article={article} />
    </main>
  );
};

export default EditArticlePage;
