import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import BookmarkComponent from "../components/BookmarkComponent";
import { handleShare } from "@/lib/utils";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const calculateReadTime = (text) => {
  const wordsPerMinute = 50;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export default function ArticleReaderPage() {
  const article = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    article ? (document.title = `${article.title}`) : navigate(-1);
  }, []);

  return (
    <div className="min-h-screen">
      <article className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-4 text-sm ">
              <span>{formatDate(article.createdAt)}</span>
              <span>•</span>
              <span>{calculateReadTime(article.content)}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookmarkComponent article={article} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare(article)}
              >
                <Share2 />
              </Button>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {article.images.length > 0 && (
          <img
            src={article.images[0]}
            alt={article.title}
            className="w-full lg:w-1/2 rounded-lg mb-8 shadow-sm object-cover h-96"
          />
        )}

        <Separator className="my-8" />

        <div className="my-5 flex items-center gap-2 justify-end">
          <span>Last Updated | </span>
          <span>{formatDate(article.updatedAt)}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={article.author.profilePicture}
              alt={`${article.author.firstName} ${article.author.lastName}`}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-sm  mb-1">Written by</div>
              <div className="font-semibold  text-lg">
                {article.author.firstName} {article.author.lastName}
              </div>
              <div className="text-sm ">{article.author.bio}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
