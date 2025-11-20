import React from "react";
import ArticleCard from "@/components/ArticleCard";
import SearchComponent from "@/components/SearchComponent";
import Filters from "../components/Filters";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
import articleApi from "@/services/api/articleApi";
import { toast } from "sonner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardHomePage() {
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    hasMore: false,
    nextIndex: null,
    totalReturned: 0,
  });

  const fetchArticles = useCallback(
    async (isLoadMore = false, startIndex) => {
      try {
        if (isLoadMore) {
          setLoadingMore(true);
        } else {
          setLoading(true);
          setArticles([]);
        }

        const params = new URLSearchParams(searchParams.toString());
        if (startIndex) params.set("startIndex", startIndex);

        const res = await articleApi.fetchArticles({ params });
        const response = res.data;

        setArticles((prev) =>
          isLoadMore ? [...prev, ...response.data] : response.data
        );

        setPagination({
          hasMore: response.hasMore,
          nextIndex: response.nextIndex,
          totalReturned: response.totalReturned,
        });
      } catch (error) {
        console.error("Error fetching articles:", error);
        toast.error(
          error.response?.data?.message || "Failed to fetch articles"
        );
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [searchParams]
  );

  useEffect(() => {
    fetchArticles(false);
  }, [searchParams]);

  const handleLoadMore = () => {
    if (pagination.hasMore && pagination.nextIndex && !loadingMore) {
      fetchArticles(true, pagination.nextIndex);
    }
  };

  return (
    <main className="py-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 grid md:flex items-center justify-between gap-2">
          <div>
            <h1 className="text-4xl font-bold mb-2">Articles</h1>
            <p className="">
              Your thoughts on the word of God, prayer, and ministry
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SearchComponent />
            <Filters />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && articles.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
              <p className="mt-2 text-muted-foreground">Loading articles...</p>
            </div>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))
          ) : !loading ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No articles found</p>
            </div>
          ) : null}
        </div>

        {articles.length > 0 && pagination.hasMore && (
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={loadingMore}
              variant="secondary"
              size="lg"
              className="w-full max-w-xs"
            >
              {loadingMore ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2" />
                  Loading More...
                </>
              ) : (
                "Load More Articles"
              )}
            </Button>
          </div>
        )}

        {articles.length > 0 && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing {articles.length} articles
            <span className="hidden">
              {!pagination.hasMore && " (All articles loaded)"}
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
