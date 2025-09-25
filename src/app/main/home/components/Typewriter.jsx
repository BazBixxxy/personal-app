"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Typewriter() {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "UI UX Designer ✨",
      "Product Designer",
      "Entrepreneur",
      "Team Lead",
      "Product Manager",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  const getArticle = (word) => {
    if (!word) return "a";
    const vowels = ["A", "E", "I", "O"];
    return vowels.includes(word[0].toUpperCase()) ? "an" : "a";
  };

  return (
    <h1 className="p-2">
      I&apos;m {getArticle(text)} <span className="font-bold">{text}</span>
      <Cursor />
    </h1>
  );
}
