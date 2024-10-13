import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";


export const BooksCard = React.forwardRef(({ data }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderImage =
    "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png";
  return (
    <Card className="flex overflow-hidden flex-col" ref={ref}>
      <div className="relative w-full aspect-square">
        <img
          src={placeholderImage}
          className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-0 hidden" : "opacity-100 blur-md"
          }`}
          alt="Book Cover"
        />
        <img
          src={data.image}
          className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0 hidden"
          }`}
          alt="Book Cover"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <CardHeader>
        <CardTitle>
          <a
            href={data.url}
            className="tracking-wide leading-5 hover:text-muted-foreground cursor-pointer"
          >
            {data.title}
          </a>
        </CardTitle>
        <CardDescription>
          <span className="mr-3">ISBN:</span>
          <span>{data.isbn13}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">Book Price</p>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full tracking-wider">
          {data.price}
        </Button>
      </CardFooter>
    </Card>
  );
});

export const BooksCardSkeleton = () => {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
};
