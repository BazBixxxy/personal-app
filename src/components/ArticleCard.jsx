import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";
import { formatDate, handleShare } from "@/lib/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow relative">
      <Button
        size="icon"
        variant="secondary"
        className="absolute top-2 right-2 z-10"
        onClick={() => handleShare(article)}
      >
        <Share2 className="h-4 w-4" />
      </Button>

      {article.images.length > 0 && (
        <img
          src={article.images[0]}
          alt={article.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}

      <CardHeader>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={article.author.profilePicture}
            alt={`${article.author.firstName} ${article.author.lastName}`}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-medium">
              {article.author.firstName} {article.author.lastName}
            </div>
            <div className="text-muted-foreground">
              {formatDate(article.createdAt)}
            </div>
          </div>
        </div>
        <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm mb-4 line-clamp-3 flex-1">{article.content}</p>
        <Link to={`/articles/${article.id}`}>
          <Button variant="outline" className="w-full mt-auto">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
