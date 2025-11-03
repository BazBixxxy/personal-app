import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { BookmarkButton } from "@/components/shsfui/bookmark-icon-button";
import bookmarkApi from "@/services/api/bookmarkApi";
import { useAuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

const BookmarkComponent = ({ article }) => {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      if (!article?._id) return;

      try {
        const res = await bookmarkApi.fetchBookmark({ id: article._id });
        const response = res?.data?.bookmark;
        setIsBookmarked(!!response);
      } catch (error) {
        console.error("Error checking bookmark status:", error);
      }
    };

    fetchBookmarkStatus();
  }, [article?._id, authUser]);

  const toggleBookmarkStatus = async () => {
    if (!article?._id) return;
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

  const handleInfo = () => {
    toast.info("Log in to bookmark articles", {
      description: "You need to be logged in to use the bookmark feature.",
    });
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center">
      <BookmarkButton
        initialState={isBookmarked}
        onChange={authUser ? toggleBookmarkStatus : handleInfo}
        disabled={loading}
        className="cursor-pointer"
      />
    </div>
  );
};

export default BookmarkComponent;
