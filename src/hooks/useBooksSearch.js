import axios from "axios";
import React, { useEffect } from "react";

const useBooksSearch = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.itbook.store/1.0/search/${query}/${pageNumber}`,
      // params: { q: query, page: pageNumber },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNumber]);

  return null; // Return null for now
};

export default useBooksSearch;

// 8732632814074abdbc84420bfaa6c83b