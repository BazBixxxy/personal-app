import { Badge } from "@/components/ui/badge";

const AskMe = () => {
  const stack = [
    "Frontend 🖥️",
    "Backend 🗄️",
    "Faith ✝️",
    "Sports ⚽",
    "Business 💼",
    "Design 🎨",
  ];

  return (
    <div className="border-b pb-4">
      <h2 className="text-muted-foreground capitalize tracking-wide">
        Ask Me About!?!
      </h2>
      <div className="py-3 flex flex-wrap gap-3">
        {stack.map((stack, i) => (
          <Badge key={i} variant="outline">
            {stack}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default AskMe;
