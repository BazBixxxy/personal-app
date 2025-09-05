import { format } from "date-fns";

export default function Footer() {
  const currentYear = format(new Date(), "yyyy");

  return (
    <p className="text-sm capitalize">
      &copy; kwagala Trevor Bazanye {currentYear} &middot;{" "}
      <span className="capitalize">All rights reserved</span>
    </p>
  );
}
