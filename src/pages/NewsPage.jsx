import React, { Suspense, useState } from "react";
import { Input } from "@/components/ui/input";
import useNewApi from "@/hooks/useNewsSearch";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard, NewsCardSkeleton } from "@/components/NewsCard";

const NewsPage = () => {
  const [query, setQuery] = useState("news");
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading } = useNewApi(query, pageNumber); // Default to empty array if data is undefined

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1); // Reset page number on new search
  };

  console.log(data);

  return (
    <main className="container mx-auto p-5">
      {/* Form with search input and submit button */}
      <form
        onSubmit={handleFormSubmit}
        className="relative flex flex-col items-center md:w-1/2 w-full mx-auto mb-8"
      >
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news..."
            className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="mt-4 font-semibold py-2 px-4 rounded-lg"
        >
          Search
        </Button>
      </form>

      {/* Conditionally render data */}
      {loading ? (
        <p>Loading...</p> // Loading state while fetching data
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
          {data && data.length > 0 ? (
            data.map((article, index) => (
              <Suspense key={index} fallback={<NewsCardSkeleton />}>
                <NewsCard data={article} />
              </Suspense>
            ))
          ) : (
            <p>No news found</p> // Show a message if no data is found
          )}
        </div>
      )}
    </main>
  );
};

export default NewsPage;
