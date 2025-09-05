import Typewriter from "../components/Typewriter";
import AboutMe from "../components/about-me";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const HomePage = () => {
  return (
    <main className="p-2 max-w-screen-xl mx-auto font-mono font-medium text-lg">
      <Typewriter />
      <div className="w-full lg:flex justify-between">
        <div className="p-3 w-full xl:w-2/3 2xl:w-7/12 flex flex-col gap-4">
          <AboutMe />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
