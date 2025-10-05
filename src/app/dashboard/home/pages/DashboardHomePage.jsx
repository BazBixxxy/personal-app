import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Problem-Solvers vs. Politicians",
    content:
      "One pattern I keep noticing is politicians making grand promises: High-speed trains run every 30 minutes without delays. While the tracks are a century old and shared by freight, regional, and high-speed trains. Ordinary people hear this stuff and laugh. They know it's not going to happen anytime soon...",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    date: "Oct 5, 2025",
  },
  {
    id: 2,
    title: "The Art of Incremental Progress",
    content:
      "Software developers stare at sprawling, messy codebases nobody fully understands. They hunt down bugs, fix them, and move on to the next feature. Nothing flashy. But after years of incremental problem-solving, the product becomes solid, stable, and surprisingly potent...",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    date: "Oct 3, 2025",
  },
  {
    id: 3,
    title: "Why Experience Matters in Leadership",
    content:
      "Leaders who've wrestled with broken systems firsthand know that progress comes from compounding tiny improvements, not just from speeches or slogans. They understand change because they've lived it. When leadership consists of politicians parachuted straight into decision-making roles...",
    image: null,
    date: "Oct 1, 2025",
  },
  {
    id: 4,
    title: "Building Products That Last",
    content:
      "A factory worker knows the parts, the production line, the weak spots. Sometimes they see an improvement: a tweak that leads to fewer defects, faster output, or fewer returns. If the company is open to change, the product gets better over time. These are problem-solvers...",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    date: "Sep 28, 2025",
  },
  {
    id: 5,
    title: "On Not Reading the News",
    content:
      "I stopped following daily news years ago. The constant stream of breaking updates, hot takes, and manufactured urgency felt like noise. Instead, I focus on deeper reading—books, essays, long-form articles that give context rather than just headlines...",
    image: null,
    date: "Sep 25, 2025",
  },
  {
    id: 6,
    title: "Systems Thinking for Engineers",
    content:
      "Understanding complex systems isn't about seeing everything at once. It's about recognizing patterns, identifying bottlenecks, and knowing which small changes will have the biggest impact. Engineers develop this intuition through years of hands-on work...",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    date: "Sep 22, 2025",
  },
];

export default function DashboardHomePage() {
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
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <CardTitle className="text-xl line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className=" text-sm mb-4 line-clamp-3 flex-1">
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
