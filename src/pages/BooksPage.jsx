import { Input } from "@/components/ui/input";
import { Eye, Search } from "lucide-react";
import React from "react";

const BooksPage = () => {
  return (
    <main className="container mx-auto p-5">
      <div className="relative flex-1 md:flex-grow-0 shrink-0 w-[280px]">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search here..."
          className="rounded-md bg-background pl-8 pr-8 shrink-0"
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
