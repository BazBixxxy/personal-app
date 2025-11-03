import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import articleApi from "@/services/api/articleApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const FeaturedArticles = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const params = { sort: "createdAt", order: "desc", limit: 5 };

        const res = await articleApi.fetchArticles({ params });
        const response = res.data.data;
        setArticles(response);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Recent Articles
          </h2>
          <Link to={"/articles"}>
            <Button size="lg" className="rounded-full">
              View More
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="w-full text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
              <p className="mt-2 text-muted-foreground">Loading articles...</p>
            </div>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard article={article} key={article._id} />
            ))
          ) : (
            <div className="w-full text-center py-8">
              <p className="text-muted-foreground">No articles found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
