import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const NewsCard = ({ data }) => {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-60 aspect-video">
        <img src={data.urlToImage} className="object-cover" />
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
        <CardDescription>5000</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{data.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link to="#">View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const NewsCardSkeleton = () => {
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
