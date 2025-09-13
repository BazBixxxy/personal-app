import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="mx-auto flex flex-col items-center overflow-hidden px-4 pt-20"
    >
      <div className="mt-42 relative flex w-fit flex-col items-center justify-center gap-5 text-center">
        <h1 className="relative z-10 text-7xl font-medium tracking-[-0.08em] lg:text-9xl">
          Welcome To
          <br /> Charis Place Online
        </h1>
        <p className="relative z-10 max-w-2xl text-xl font-medium">
          "This is how we know what love is: Jesus Christ laid down his life for
          us. And we ought to lay down our lives for our brothers and sisters."
          1 John 3:16
        </p>
      </div>
      <div className="my-6">
        <Button size="lg" className="w-full">
          Join Us
        </Button>
      </div>
    </section>
  );
}
