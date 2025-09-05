import { Badge } from "@/components/ui/badge";
import HyperText from "@/components/ui/hyper-text";
import React from "react";

const Stack = () => {
  const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Shadcn UI",
    "Zustand",
    "React Query",
    "Express.js",
    "MongoDB",
    "Jest",
    "ChatGPT",
  ];
  return (
    <div className="border-b pb-4">
      <HyperText duration={100} className="text-base" text="Stack" />
      <div className="py-3 flex flex-wrap gap-3">
        {stack.map((stack, i) => (
          <Badge key={i}>{stack}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Stack;
