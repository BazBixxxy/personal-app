import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const Posts = [
  { id: 1, title: "Post 1", content: "This is the content of post 1" },
  { id: 2, title: "Post 2", content: "This is the  content of post 2" },
  { id: 3, title: "Post 3", content: "This is the  content of post 3" },
];

const App = () => {
  // console.log(Posts);
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...Posts]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        Posts.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading)
    return <h1 className="text-lg tracking-wide">Loading...</h1>;
  if (postsQuery.isError) return <pre>Error: {postsQuery.error.message}</pre>;

  return (
    <div className="p-5 flex flex-col gap-6">
      <div>Tanstack query</div>
      <div>
        {postsQuery.data.map((data) => (
          <div key={data.id}>{data.title}</div>
        ))}
      </div>
      <div>
        <Button
          className="gap-2"
          disabled={newPostMutation.isPending}
          onClick={() => newPostMutation.mutate("new Post")}
        >
          {newPostMutation.isPending ? (
            <>
              <ReloadIcon className="size-4 animate-spin" />
              <span>loading</span>
            </>
          ) : (
            "Add new post"
          )}
        </Button>
      </div>
    </div>
  );
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
