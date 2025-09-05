import { Separator } from "@/components/ui/separator";
import Typewriter from "../components/Typewriter";
import AboutMe from "../components/about-me";
import Work from "../components/work";
import Socials from "../components/social";

const HomePage = () => {
  return (
    <main className="p-2 max-w-screen-xl mx-auto font-mono font-medium text-lg">
      <Typewriter />
      <div className="w-full lg:flex justify-between">
        <div className="p-3 w-full xl:w-2/3 2xl:w-7/12 grid gap-5">
          <AboutMe />
          <Separator className="my-5" />
          <Work />
          <Socials />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
