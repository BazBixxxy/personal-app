import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";

const FlipCards = () => {
  const customCards = [
    {
      id: "project-1",
      image: "https://skiper-ui.com/images/lummi/img14.png",
      alt: "Project 1",
    },
    {
      id: "project-2",
      image: "https://skiper-ui.com/images/lummi/img15.png",
      alt: "Project 2",
    },
    {
      id: "project-3",
      image: "https://skiper-ui.com/images/lummi/img29.png",
      alt: "Project 3",
    },
  ];

  return (
    <section className="h-screen w-full mt-32 flex flex-col items-center justify-center">
      <StickyCard002
        cards={customCards}
        className="h-1/2"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </section>
  );
};

export default FlipCards;
