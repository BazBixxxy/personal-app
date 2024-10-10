import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "./components/ui/button";

const Posts = [
  { id: 1, title: "Post 1", content: "This is the content of post 1" },
  { id: 2, title: "Post 2", content: "This is the  content of post 2" },
  { id: 3, title: "Post 3", content: "This is the  content of post 3" },
];

const App = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...Posts]),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>Error: {postsQuery.error.message}</pre>;

  return (
    <div className="p-5">
      <div>Tanstack query</div>
      <Button>Button</Button>
    </div>
  );
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
