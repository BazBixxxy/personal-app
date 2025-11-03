import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const privacyPolicies = [
  {
    title: "Information Collection",
    content:
      "We collect only the information necessary to provide and improve our services, such as your name, email, and any content you submit. This helps us personalize your experience and maintain a safe community.",
  },
  {
    title: "Use of Information",
    content:
      "Information collected is used to enhance your experience on Charis Place, communicate updates, and ensure compliance with community guidelines. We do not sell your data to third parties.",
  },
  {
    title: "Data Security",
    content:
      "We take the security of your information seriously and implement measures to protect it from unauthorized access, disclosure, or misuse. However, no online platform can guarantee 100% security.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "We may use cookies and similar technologies to improve site functionality, analyze usage, and tailor content. You can manage or disable cookies through your browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "Charis Place may include links to third-party services. We are not responsible for the privacy practices of external websites, and we encourage you to review their policies separately.",
  },
  {
    title: "Your Rights",
    content:
      "You can request access to, correction of, or deletion of your personal information at any time. Contact us via the support channels provided on our platform for assistance.",
  },
];

const PrivacyPoliciesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Privacy Policies</h1>

      <p className="mb-6">
        At <strong>Charis Place</strong>, we value your privacy and strive to
        protect your personal information while you engage with our community of
        disciples of Christ.
      </p>

      <div className="space-y-6">
        {privacyPolicies.map((policy, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">
              {index + 1}. {policy.title}
            </h2>
            <p>{policy.content}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground italic text-center">
        “But the Lord is faithful, and he will strengthen you and protect you
        from the evil one.” — 2 Thessalonians 3:3
      </p>

      <Button className="w-full my-5" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default PrivacyPoliciesPage;
