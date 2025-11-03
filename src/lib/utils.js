import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const handleShare = (article) => {
  if (navigator.share) {
    navigator
      .share({
        title: article.title,
        text: article.content.substring(0, 100) + "...",
        url: "https://charisplace.com" + "/article/" + article._id,
      })
      .catch(() => {});
  } else {
    navigator.clipboard.writeText(
      "https://charisplace.com" + "/article/" + article._id
    );
    alert("Link copied to clipboard!");
  }
};