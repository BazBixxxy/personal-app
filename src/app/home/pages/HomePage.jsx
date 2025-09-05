import Typewriter from "../components/Typewriter";
import AboutMe from "../components/about-me";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const HomePage = () => {
  return (
    <main className="p-2 max-w-screen-xl mx-auto font-mono font-medium text-lg">
      <Typewriter />
      <AboutMe />
    </main>
  );
};

export default HomePage;
