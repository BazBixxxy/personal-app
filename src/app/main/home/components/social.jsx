import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex items-center gap-8 flex-wrap font-semibold">
      <a href="mailto:baz@bixxxy.com">
        <Mail />{" "}
      </a>
      <Separator orientation="vertical" className="h-5 rotate-12" />{" "}
      <a href="https://github.com/BazBixxxy">
        <Github />{" "}
      </a>
      <Separator orientation="vertical" className="h-5 rotate-12" />{" "}
      <a href="https://twitter.com/kwagala_baz">
        <TwitterIcon />{" "}
      </a>
      <Separator orientation="vertical" className="h-5 rotate-12" />{" "}
      <a href="https://www.linkedin.com/in/kwagala-baz-trevor/">
        <LinkedinIcon />
      </a>
    </div>
  );
}
