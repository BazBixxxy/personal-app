import React from "react";
import { useNavigate } from "react-router-dom";

const termsOfUse = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using Charis Place, you agree to comply with these Terms of Use and all applicable laws. If you do not agree, please refrain from using our platform.",
  },
  {
    title: "Community Guidelines",
    content:
      "Charis Place is dedicated to raising disciples of Christ. All users are expected to engage respectfully, avoid harmful or inappropriate content, and contribute positively to the community.",
  },
  {
    title: "Content Ownership",
    content:
      "Users retain ownership of the content they post. By submitting content to Charis Place, you grant us a non-exclusive, royalty-free license to display and distribute your content within the platform.",
  },
  {
    title: "Prohibited Activities",
    content:
      "Users must not engage in spamming, harassment, posting offensive material, or violating intellectual property rights. Violations may result in account suspension or termination.",
  },
  {
    title: "Account Responsibility",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect unauthorized use.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "Charis Place provides its services 'as is' and makes no guarantees regarding availability, accuracy, or reliability of the platform or content provided by users.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Charis Place is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the platform.",
  },
  {
    title: "Modifications",
    content:
      "We reserve the right to modify these Terms of Use at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the updated terms.",
  },
];

const TermsOfUsePage = () => {
const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms of Use</h1>

      <p className="mb-6">
        Welcome to <strong>Charis Place</strong>. By using our platform, you
        agree to follow these terms designed to create a safe and
        Christ-centered online community.
      </p>

      <div className="space-y-6">
        {termsOfUse.map((term, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">
              {index + 1}. {term.title}
            </h2>
            <p>{term.content}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground italic text-center">
        “Therefore encourage one another and build each other up, just as in
        fact you are doing.” — 1 Thessalonians 5:11
      </p>

      <Button className="w-full my-5" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default TermsOfUsePage;
