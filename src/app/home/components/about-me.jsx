import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <div>
        <h1 className="text-base uppercase font-light">About Me?</h1>
      </div>
      <div>
        <h1>Name:</h1>
        <p className="font-semibold">Kwagala Trevor Bazanye</p>
      </div>
      <div>
        <h1>Bio:</h1>
        <p className="font-semibold">
          I&apos;m a Christian, entreprenuer, and software developer with a
          passion for building scalable and efficient systems.{" "}
          <span className="font-normal text-base hidden">
            Read My{" "}
            <Link
              to={"/blog"}
              className="underline cursor-pointer hover:text-muted-foreground"
            >
              Blog
            </Link>
          </span>
        </p>
      </div>
      <div className="border-b pb-4">
        <h1>Date of Birth:</h1>
        <p className="font-semibold">2nd May, 2001</p>
      </div>
    </>
  );
}
