import React, { useEffect, useState } from "react";
import axios from "axios";

const useBooksSearch = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const getBooks = async (query, pageNumber) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.itbook.store/1.0/search/${query}/${pageNumber}`
      );
      setBooks((prevBooks) => [...prevBooks, ...res.data.books]);
      setHasMore(res.data.books.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, setLoading, setBooks, books, hasMore, getBooks };
};

export default useBooksSearch;

// 8732632814074abdbc84420bfaa6c83b
