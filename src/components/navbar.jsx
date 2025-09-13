import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Conversations", href: "/conversations" },
    { label: "Shop", href: "/shop" },
    { label: "About Us", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-sm border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold transition-colors">
              Charis Place
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {data.map((item, index) => (
                <Button key={index} variant="ghost">
                  <Link
                    to={item.href}
                    className="px-3 py-2 rounded-md font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            {/* <Link
              href="/signup"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Get Started
            </Link> */}
            <Button size="sm">Join Us</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              size="icon"
              aria-expanded="false"
              variant="ghost"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-4 border-t">
            {data.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
            <div className="pt-4 pb-2 border-t">
              {/* <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link> */}
              <Button size="sm" className="w-full">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
