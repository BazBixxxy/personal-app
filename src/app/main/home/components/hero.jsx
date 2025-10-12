import { Button } from "@/components/ui/button";
import UserStack from "./user-stack";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Main heading with improved typography */}
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.04em] leading-[0.9]">
            <span className="block font-extralight text-foreground/60">
              Welcome To
            </span>
            <span className="block font-medium whitespace-nowrap">
              Charis Place
            </span>
            <span className="block font-extralight text-foreground/80">
              Online
            </span>
          </h1>
        </div>

        {/* Scripture with elegant spacing */}
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/70 font-light">
            "This is how we know what love is: Jesus Christ laid down his life
            for us. And we ought to lay down our lives for our brothers and
            sisters."
          </blockquote>
          <cite className="block text-sm font-medium tracking-wide uppercase text-foreground/50 letter-spacing-wide">
            1 John 3:16
          </cite>
        </div>

        {/* CTA section with refined spacing */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <UserStack />
            <p className="text-sm font-light text-foreground/60 tracking-wide">
              Join our online community
            </p>
          </div>

          <Button
            size="lg"
            className="px-8 py-6 text-base font-medium tracking-wide rounded-full hover:scale-105 transition-transform duration-200"
          >
            Read Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
