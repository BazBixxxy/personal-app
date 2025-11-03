import React from "react";
import { BookmarkButton } from "@/components/shsfui/bookmark-icon-button";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import bookmarkApi from "@/services/api/bookmarkApi";

const BookmarkComponent = ({ article }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isBookmarked = async () => {
      try {
        const res = await bookmarkApi.fetchBookmark({ id: article._id });
        const response = res.data.bookmark;
        setIsBookmarked(true);
      } catch (error) {
        console.error("Error checking bookmark status:", error);
        // toast.error(error.response.data.message);
      }
    };
    isBookmarked();
  }, []);

  const toggleBookmarkStatus = async () => {
    setLoading(true);
    try {
      if (isBookmarked) {
        await bookmarkApi.deleteBookmark({ id: article._id });
        setIsBookmarked(false);
        toast.success("Bookmark removed");
      } else {
        await bookmarkApi.createBookmark({ id: article._id });
        setIsBookmarked(true);
        toast.success("Article bookmarked");
      }
    } catch (error) {
      console.error("Error toggling bookmark status:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BookmarkButton />
    </div>
  );
};

export default BookmarkComponent;
