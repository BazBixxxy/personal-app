import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Share2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BookmarkButton } from "@/components/shsfui/bookmark-icon-button";

const article = {
  id: 1,
  title: "Problem-Solvers vs. Politicians",
  content: `I'm not into politics. Never worked in it, never studied it, don't follow the daily news. But you can't avoid it entirely. Some things slip through.

One pattern I keep noticing is politicians making grand promises: High-speed trains run every 30 minutes without delays. While the tracks are a century old and shared by freight, regional, and high-speed trains. Or wiping out a trade deficit in a single year, even though it's been there for decades. Or slashing crime rates, without ever naming concrete problems or fixes. Or achieving energy independence within two years, while no new infrastructure, supply chains, or technologies are anywhere close to ready. Or applying a new blockchain or AI technology to a hypothetical problem.

Ordinary people hear this stuff and laugh. They know it's not going to happen anytime soon. And honestly, they're usually right because they live in reality. I think of a factory worker. Every day, they build water boilers. They know the parts, the production line, the weak spots. Sometimes they see an improvement: a tweak that leads to fewer defects, faster output, or fewer returns. If the company is open to change, the product gets better over time.

Or take software developers. They stare at sprawling, messy codebases nobody fully understands. They hunt down bugs, fix them, and move on to the next feature. Nothing flashy. But after years of incremental problem-solving, the product becomes solid, stable, and surprisingly potent.

These are problem-solvers. They create real progress by fixing what's broken piece by piece. They know from experience that sweeping changes without understanding the details usually break more than these changes fix.

Politicians, whether in government, corporations, or other organizations, often play a different game. They sit at the top and make sweeping proposals. Even in democratic systems, they need approval from peers. So they pitch visions that sound bold, inspiring, and sometimes impossible.

Yet, I think leadership needs to be grounded in the problem-solver's mindset. Leaders who've wrestled with broken systems firsthand know that progress comes from compounding tiny improvements, not just from speeches or slogans. They understand change because they've lived it. When leadership consists of politicians parachuted straight into decision-making roles, it tilts toward visions we cannot implement. I think leadership requires not only the ability to envision, but also the technical and practical skills to move complex systems to that state. From my experience in software engineering and the corporate world, I know that it happens mostly in small increments.`,
  image:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
  createdAt: "2025-10-05T10:00:00Z",
  updatedAt: "2025-10-05T10:00:00Z",
  author: {
    _id: 1,
    firstName: "Jane",
    lastName: "Doe",
    bio: "Tech enthusiast and writer.",
    profilePicture: "https://i.pravatar.cc/150?img=3",
  },
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const calculateReadTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const handleShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: article.title,
        text: article.content.substring(0, 100) + "...",
        url: window.location.href,
      })
      .catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
};

export default function ArticleReaderPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-4 text-sm ">
              <span>{formatDate(article.createdAt)}</span>
              <span>•</span>
              <span>{calculateReadTime(article.content)}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookmarkButton />
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 />
              </Button>
            </div>
          </div>
        </div>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-lg mb-8 shadow-sm"
          />
        )}

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={article.author.profilePicture}
              alt={`${article.author.firstName} ${article.author.lastName}`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <div className="text-sm  mb-1">Written by</div>
              <div className="font-semibold  text-lg">
                {article.author.firstName} {article.author.lastName}
              </div>
              <div className="text-sm ">{article.author.bio}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
