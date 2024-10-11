import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "8732632814074abdbc84420bfaa6c83b";

const useNewApi = async (query, pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: query,
            page: pageNumber,
            from: "2024-10-05",
            sortBy: "publishedAt",
            apiKey: API_KEY,
          },
        });
        console.log(res.data.articles);
        setData(res.data.articles);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, pageNumber]);

  return { data, loading };
};

export default useNewApi;
