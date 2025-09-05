import { Separator } from "@/components/ui/separator";
import Typewriter from "../components/Typewriter";
import AboutMe from "../components/about-me";
import Work from "../components/work";
import Socials from "../components/social";
import AskMe from "../components/ask-me-about";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <main className="p-2 max-w-screen-xl mx-auto font-mono font-medium text-lg">
      <Typewriter />
      <div className="w-full lg:flex justify-between">
        <div className="p-3 w-full xl:w-2/3 2xl:w-7/12 grid gap-5">
          <AboutMe />
          <Separator className="my-5" />
          <Work />
          <AskMe />
          <Socials />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
