import Filters from "@/app/dashboard/home/components/Filters";
import ArticleCard from "@/components/ArticleCard";
import SearchComponent from "@/components/SearchComponent";
import { Button } from "@/components/ui/button";
import bookmarkApi from "@/services/api/bookmarkApi";
import React, { useEffect, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const BookmarksPage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    hasMore: false,
    nextIndex: null,
    totalReturned: 0,
  });

  const fetchBookmarks = useCallback(
    async (isLoadMore = false, startIndex) => {
      try {
        if (isLoadMore) {
          setLoadingMore(true);
        } else {
          setLoading(true);
          setBookmarks([]);
        }

        const params = new URLSearchParams(searchParams.toString());
        if (startIndex) params.set("startIndex", startIndex);

        const res = await bookmarkApi.fetchBookmarks();
        const response = res.data;

        setBookmarks((prev) =>
          isLoadMore ? [...prev, ...response.bookmarks] : response.bookmarks
        );

        setPagination({
          hasMore: false,
          nextIndex: null,
          totalReturned: response.length,
        });
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
        toast.error(
          error.response?.data?.message || "Failed to fetch bookmarks"
        );
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [searchParams]
  );

  useEffect(() => {
    fetchBookmarks(false);
  }, [searchParams]);

  const handleLoadMore = () => {
    if (pagination.hasMore && pagination.nextIndex && !loadingMore) {
      fetchBookmarks(true, pagination.nextIndex);
    }
  };

  return (
    <main className="p-2 md:p-4 lg:p-6 xl:p-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 grid md:flex items-center justify-between gap-2">
          <div>
            <h1 className="text-4xl font-bold mb-2">Saved Articles</h1>
          </div>
          <div className="flex items-center gap-3">
            <SearchComponent />
            <Filters />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && bookmarks.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
              <p className="mt-2 text-muted-foreground">Loading bookmarks...</p>
            </div>
          ) : bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => (
              <ArticleCard key={bookmark._id} article={bookmark.articleId} />
            ))
          ) : !loading ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No bookmarks found</p>
            </div>
          ) : null}
        </div>

        {/* Load More */}
        {bookmarks.length > 0 && pagination.hasMore && (
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

        {/* Footer Info */}
        {bookmarks.length > 0 && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing {bookmarks.length} bookmarked articles
            <span className="hidden">
              {!pagination.hasMore && " (All articles loaded)"}
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookmarksPage;
