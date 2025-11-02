import { Button } from "@/components/ui/button";
import UserStack from "./user-stack";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/90 to-background px-6 py-16 sm:py-20">
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl text-center space-y-16">
        {/* Main heading */}
        <div className="space-y-8">
          <h1 className="font-light tracking-tight leading-[0.9] text-balance">
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground/70 animate-fade-in-up">
              Welcome To
            </span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-semibold drop-shadow-md animate-pulse-slow">
              Charis Place
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground/80 mt-3 animate-fade-in-up [animation-delay:200ms]">
              Online
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 font-medium animate-fade-in-up [animation-delay:400ms]">
            Where we are raising{" "}
            <span className="font-semibold text-foreground">
              Disciples of Christ
            </span>
          </p>
        </div>

        {/* Scripture */}
        <div className="max-w-3xl mx-auto space-y-6 px-2">
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/70 font-light italic">
            “This is how we know what love is: Jesus Christ laid down his life
            for us. And we ought to lay down our lives for our brothers and
            sisters.”
          </blockquote>
          <cite className="block text-xs sm:text-sm font-medium uppercase tracking-widest text-foreground/50">
            1 John 3:16
          </cite>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm sm:text-base font-light text-foreground/60 tracking-wide">
              Join our online community
            </p>
          </div>

          <Button
            size="lg"
            className="px-8 py-5 text-sm sm:text-base md:text-lg font-medium tracking-wide rounded-full hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
          >
            Read Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
