import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export default function AboutMe() {
  const birthDate = new Date(2001, 4, 2); // May 2, 2001
  const [ageString, setAgeString] = useState("");

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();

      const years = differenceInYears(now, birthDate);
      const months = differenceInMonths(now, birthDate) % 12;
      const weeks = differenceInWeeks(now, birthDate) % 4;
      const hours = differenceInHours(now, birthDate) % 24;
      const minutes = differenceInMinutes(now, birthDate) % 60;
      const seconds = differenceInSeconds(now, birthDate) % 60;

      setAgeString(
        `${years} years | ${months} months | ${weeks} weeks | ${hours} hours | ${minutes} minutes | ${seconds} seconds`
      );
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg uppercase tracking-wide font-light ">
          About Me
        </h1>
      </div>

      <div className="space-y-1">
        <h2 className="text-sm ">Name</h2>
        <p className="font-semibold text-xl">Kwagala Trevor Bazanye</p>
      </div>

      <div className="space-y-1">
        <h2 className="text-sm ">Bio</h2>
        <p className="font-medium leading-relaxed">
          I&apos;m a Christian, entrepreneur, and software developer with a
          passion for building scalable and efficient systems.
          <span className="block mt-2 text-sm ">
            Read my{" "}
            <Link to="/blog" className="underline font-medium">
              Blog
            </Link>
          </span>
        </p>
      </div>

      <div className="pt-4 border-t">
        <h2 className="text-sm ">Date of Birth</h2>
        <div className="md:flex grid gap-2 items-center justify-between border rounded-xl px-4 py-3 mt-1">
          <p className="font-semibold text-lg">2nd May, 2001</p>
          <span className="text-sm font-mono border px-2 py-1 rounded-md shadow-sm">
            {ageString}
          </span>
        </div>
      </div>
    </div>
  );
}
