import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const SearchComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("searchTerm") || "";
  const [query, setQuery] = useState(initialSearch);

  // Update URL when user types
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) {
        searchParams.set("searchTerm", query.trim());
        setSearchParams(searchParams);
      } else {
        searchParams.delete("searchTerm");
        setSearchParams(searchParams);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, searchParams, setSearchParams]);

  return (
    <div className="relative flex items-center w-full md:w-[200px] lg:w-[320px]">
      <Input
        type="search"
        placeholder="Search article..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg bg-background pl-10 pr-10"
      />
      <button
        type="button"
        className="absolute left-1 p-2"
        onClick={() => {
          if (query.trim()) {
            searchParams.set("searchTerm", query.trim());
            setSearchParams(searchParams);
          }
        }}
      >
        <Search className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
};

export default SearchComponent;
