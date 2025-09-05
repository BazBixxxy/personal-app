import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function AboutMe() {
  const birthDate = new Date(2001, 4, 2); // May 2, 2001
  const [ageString, setAgeString] = useState("");

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();

      const years = differenceInYears(now, birthDate);
      const months = differenceInMonths(now, birthDate) % 12;
      const days = differenceInDays(now, birthDate) % 30;
      const hours = differenceInHours(now, birthDate) % 24;
      const minutes = differenceInMinutes(now, birthDate) % 60;
      const seconds = differenceInSeconds(now, birthDate) % 60;

      setAgeString(
        `${years}y | ${months}m | ${days}d | ${hours}h | ${minutes}m | ${seconds}s`
      );
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-lg uppercase tracking-wide font-light">About Me</h1>
      </div>

      {/* Name */}
      <div className="space-y-1">
        <h2 className=" text-muted-foreground">Name</h2>
        <p className="font-semibold text-2xl">Kwagala Trevor Bazanye</p>
      </div>

      {/* Bio */}
      <div className="space-y-1">
        <h2 className=" text-muted-foreground">Bio</h2>
        <p className="font-medium leading-relaxed">
          I’m a Christian, entrepreneur, and software developer passionate about
          building scalable, user-centered systems. My journey blends{" "}
          <span className="font-semibold">faith</span>,{" "}
          <span className="font-semibold">innovation</span>, and{" "}
          <span className="font-semibold">technology</span> to create meaningful
          impact.
          <span className="block mt-3 text-sm">
            Dive deeper into my thoughts on{" "}
            <Link to="/blog" className="underline font-medium">
              my blog
            </Link>
            .
          </span>
        </p>
      </div>

      {/* DOB & Age */}
      <div className="pt-4 border-t">
        <h2 className=" text-muted-foreground">Date of Birth</h2>
        <div className="md:flex grid gap-2 items-center justify-between border rounded-xl px-4 py-3 mt-1">
          <p className="font-semibold text-lg">2nd May, 2001</p>
          <Badge>{ageString}</Badge>
        </div>
      </div>
    </div>
  );
}
