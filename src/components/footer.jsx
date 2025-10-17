import { Facebook, Globe, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { BanknoteIcon } from "lucide-react";
import { Instagram } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer className="mt-8 p-4 border-t flex justify-between flex-wrap gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center md:gap-2 gap-1 text-sm">
          &copy; {currentYear} Charis Place &#183; All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm">
          &#183; <Link to={"/terms-and-conditions"}>Terms of Use</Link>
        </div>

        <div className="flex items-center gap-2 text-sm">
          &#183; <Link to={"/privacy-policies"}>Privacy Policies</Link>
        </div>
        <div className="flex items-center gap-2 text-sm">
          &#183; <Link to={"/general-policies"}>General Policies</Link>
        </div>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="text-muted-foreground size-5" />
          <h1>English</h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BanknoteIcon />
          <h1>USD</h1>
        </div>
        <div>
          <FaFacebook className="size-4" />
        </div>
        <div>
          <FaInstagram className="size-4" />
        </div>
        <div>
          <FaXTwitter className="size-4" />
        </div>
        <div>
          <FaTiktok className="size-4" />
        </div>
        <div>
          <FaYoutube className="size-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
