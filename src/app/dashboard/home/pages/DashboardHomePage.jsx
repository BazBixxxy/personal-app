import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Problem-Solvers vs. Politicians",
    content:
      "One pattern I keep noticing is politicians making grand promises: High-speed trains run every 30 minutes without delays. While the tracks are a century old and shared by freight, regional, and high-speed trains. Ordinary people hear this stuff and laugh. They know it's not going to happen anytime soon...",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    createdAt: "2025-10-05T10:00:00Z",
    updatedAt: "2025-10-05T10:00:00Z",
    author: {
      _id: 1,
      firstName: "Jane",
      lastName: "Doe",
      bio: "Tech enthusiast and writer.",
      profilePicture: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: 2,
    title: "The Art of Incremental Progress",
    content:
      "Software developers stare at sprawling, messy codebases nobody fully understands. They hunt down bugs, fix them, and move on to the next feature. Nothing flashy. But after years of incremental problem-solving, the product becomes solid, stable, and surprisingly potent...",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    createdAt: "2025-10-03T14:30:00Z",
    updatedAt: "2025-10-03T14:30:00Z",
    author: {
      _id: 2,
      firstName: "John",
      lastName: "Smith",
      bio: "Software engineer and problem solver.",
      profilePicture: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    id: 3,
    title: "Why Experience Matters in Leadership",
    content:
      "Leaders who've wrestled with broken systems firsthand know that progress comes from compounding tiny improvements, not just from speeches or slogans. They understand change because they've lived it. When leadership consists of politicians parachuted straight into decision-making roles...",
    image: null,
    createdAt: "2025-10-01T09:15:00Z",
    updatedAt: "2025-10-01T09:15:00Z",
    author: {
      _id: 3,
      firstName: "Sarah",
      lastName: "Johnson",
      bio: "Leadership coach and consultant.",
      profilePicture: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: 4,
    title: "Building Products That Last",
    content:
      "A factory worker knows the parts, the production line, the weak spots. Sometimes they see an improvement: a tweak that leads to fewer defects, faster output, or fewer returns. If the company is open to change, the product gets better over time. These are problem-solvers...",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    createdAt: "2025-09-28T16:45:00Z",
    updatedAt: "2025-09-28T16:45:00Z",
    author: {
      _id: 4,
      firstName: "Michael",
      lastName: "Chen",
      bio: "Product manager with a manufacturing background.",
      profilePicture: "https://i.pravatar.cc/150?img=8",
    },
  },
  {
    id: 5,
    title: "On Not Reading the News",
    content:
      "I stopped following daily news years ago. The constant stream of breaking updates, hot takes, and manufactured urgency felt like noise. Instead, I focus on deeper reading—books, essays, long-form articles that give context rather than just headlines...",
    image: null,
    createdAt: "2025-09-25T11:20:00Z",
    updatedAt: "2025-09-25T11:20:00Z",
    author: {
      _id: 1,
      firstName: "Jane",
      lastName: "Doe",
      bio: "Tech enthusiast and writer.",
      profilePicture: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: 6,
    title: "Systems Thinking for Engineers",
    content:
      "Understanding complex systems isn't about seeing everything at once. It's about recognizing patterns, identifying bottlenecks, and knowing which small changes will have the biggest impact. Engineers develop this intuition through years of hands-on work...",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    createdAt: "2025-09-22T13:00:00Z",
    updatedAt: "2025-09-22T13:00:00Z",
    author: {
      _id: 2,
      firstName: "John",
      lastName: "Smith",
      bio: "Software engineer and problem solver.",
      profilePicture: "https://i.pravatar.cc/150?img=12",
    },
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const handleShare = (article) => {
  if (navigator.share) {
    navigator
      .share({
        title: article.title,
        text: article.content.substring(0, 100) + "...",
        url: window.location.href + "/article/" + article.id,
      })
      .catch(() => {});
  } else {
    navigator.clipboard.writeText(
      window.location.href + "/article/" + article.id
    );
    alert("Link copied to clipboard!");
  }
};

export default function ArticleCards() {
  return (
    <main className="py-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Articles</h1>
          <p className="">
            Thoughts on building, leading, and solving problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col hover:shadow-lg transition-shadow relative"
            >
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 z-10"
                onClick={() => handleShare(article)}
              >
                <Share2 className="h-4 w-4" />
              </Button>

              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}

              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={article.author.profilePicture}
                    alt={`${article.author.firstName} ${article.author.lastName}`}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      {article.author.firstName} {article.author.lastName}
                    </div>
                    <div className="text-muted-foreground">
                      {formatDate(article.createdAt)}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm mb-4 line-clamp-3 flex-1">
                  {article.content}
                </p>
                <Button variant="outline" className="w-full mt-auto">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
