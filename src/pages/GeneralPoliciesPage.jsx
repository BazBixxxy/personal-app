import React from "react";
import { useNavigate } from "react-router-dom";

const policies = [
  {
    title: "Faith and Conduct",
    content:
      "All members and contributors are expected to conduct themselves in a manner that reflects the character of Christ — showing love, humility, respect, and truthfulness in every interaction.",
  },
  {
    title: "Content Policy",
    content:
      "Articles, posts, and discussions should be grounded in Scripture and align with biblical teachings. We reserve the right to edit or remove any content that promotes false doctrine, hate speech, or divisive behavior.",
  },
  {
    title: "Community Respect",
    content:
      "We encourage healthy discussions but discourage arguments that lead to strife. Members should respond with grace, patience, and understanding even when opinions differ.",
  },
  {
    title: "Privacy and Safety",
    content:
      "We value your privacy. Personal information shared within Charis Place will not be disclosed to third parties without consent. Please avoid sharing sensitive or private details publicly.",
  },
  {
    title: "Use of Content",
    content:
      "All written materials and media on Charis Place are intended for spiritual growth and learning. You may share our content freely for non-commercial purposes, provided proper credit is given.",
  },
  {
    title: "Discipleship Commitment",
    content:
      "Charis Place exists to raise disciples who live by the Word and spread the Gospel. We expect all members to uphold these values both within and beyond our platform.",
  },
];

const GeneralPoliciesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">General Policies</h1>

      <p className="mb-6">
        Welcome to <strong>Charis Place</strong> — an online community devoted
        to raising disciples of Christ and sharing the truth of God’s Word. Our
        goal is to create a Christ-centered, edifying, and respectful space for
        all believers and seekers.
      </p>

      <div className="space-y-6">
        {policies.map((policy, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">
              {index + 1}. {policy.title}
            </h2>
            <p>{policy.content}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground italic text-center">
        “Let all things be done decently and in order.” — 1 Corinthians 14:40
      </p>

      <Button className="w-full my-5" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default GeneralPoliciesPage;
