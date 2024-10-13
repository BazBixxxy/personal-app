import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import useBooksSearch from "@/hooks/useBooksSearch";
import { Eye, Search } from "lucide-react";
import { BooksCard, BooksCardSkeleton } from "@/components/BooksCard";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const BooksPage = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, setLoading, setBooks, books, hasMore, getBooks } =
    useBooksSearch();

  // Infinite scroll
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => {
              const newPageNumber = prevPageNumber + 1;
              getBooks(query, newPageNumber);
              return newPageNumber;
            });
          }
        },
        {
          rootMargin: "500px",
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, query]
  );

  const handleSearchQuery = (e) => {
    const input = e.target.value;
    setQuery(input.split(" ").join("+"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([]);
    getBooks(query, pageNumber);
  };

  return (
    <main className="container mx-auto p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 flex items-center"
      >
        <div className="relative flex-1 shrink-0 w-full mx-8">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search here..."
            className="rounded-md bg-background pl-8 pr-8 shrink-0"
            // value={query}
            onChange={handleSearchQuery}
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <ReloadIcon className="mr-2 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            "Search"
          )}
        </Button>
      </form>
      {books.length === 0 && (
        <div className="p-10">{loading ? "" : "No books here 😑"}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 my-8">
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <BooksCard key={index} data={book} ref={lastBookElementRef} />
            );
          } else {
            return <BooksCard key={index} data={book} />;
          }
        })}
        {loading &&
          Array.from({ length: 6 }, (_, i) => <BooksCardSkeleton key={i} />)}
      </div>
    </main>
  );
};

export default BooksPage;
