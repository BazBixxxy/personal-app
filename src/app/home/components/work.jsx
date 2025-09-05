import { LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <div>
        <h1 className="text-muted-foreground uppercase font-light">My Work</h1>
      </div>

      {/* Bixxxy App */}
      <div className="text-lg">
        <a
          href="https://bixxxy.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-xl hover:underline inline-flex cursor-pointer items-center gap-2 uppercase tracking-wider"
        >
          Bixxxy App <LinkIcon className="size-5" />
        </a>
        <p className="text-lg text-justify">
          A property listing application where users can search for properties,
          view property details, and contact sellers. The app is built with an
          integrated payment gateway for seamless transactions.
        </p>
      </div>

      {/* Bixxxy Landlord */}
      <div className="pb-5 border-b text-lg">
        <a
          href="https://landlord.bixxxy.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-xl hover:underline inline-flex cursor-pointer items-center gap-2 uppercase tracking-wider"
        >
          Bixxxy Landlord <LinkIcon className="size-5" />
        </a>
        <p className="text-lg text-justify">
          A property management system for property owners and managers with
          paid features that lets them register their properties and tenants,
          along with tools to help them manage their transactions.
        </p>
      </div>

      {/* Ovol Store */}
      <div className="pb-5 border-b">
        <a
          href="https://ovolstore.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-xl hover:underline inline-flex cursor-pointer items-center gap-2 uppercase tracking-wider"
        >
          Ovol Store <LinkIcon className="size-5" />
        </a>
        <p className="text-lg text-justify">
          An online store platform that connects vendors and customers, enabling
          smooth e-commerce transactions. It provides a user-friendly shopping
          experience with product listings, order managment, secure checkout,
          vendor tools, and modern product displays.
        </p>
      </div>

      {/* Blog (hidden for now) */}
      <div className="pb-5 border-b hidden">
        <Link
          to={"/blog"}
          className="font-semibold text-xl hover:underline inline-flex cursor-pointer items-center gap-2 uppercase tracking-wider"
        >
          Blog <LinkIcon className="size-5" />
        </Link>
        <p className="text-lg">
          Here I write out my thoughts nothing personal 😂.
        </p>
      </div>
    </>
  );
}
