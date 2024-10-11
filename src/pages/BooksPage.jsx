import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import useBooksSearch from "@/hooks/useBooksSearch";
import { Eye, Search } from "lucide-react";

const BooksPage = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(2);
  useBooksSearch(query, pageNumber);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <main className="container mx-auto p-5">
      <div className="relative flex-1 md:flex-grow-0 shrink-0 w-[280px]">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search here..."
          className="rounded-md bg-background pl-8 pr-8 shrink-0"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col gap-3 my-5">
        <div>title</div>
        <div>title</div>
        <div>title</div>
        <div>title</div>
        <div>loading</div>
        <div>error</div>
      </div>
    </main>
  );
};

export default BooksPage;
