import ContentCard from "../components/ContentCard";

const contentSlides = [
  {
    image: "/images/ContentCards/ContentCard1.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
  },
  {
    image: "/images/ContentCards/ContentCard2.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
  },
  {
    image: "/images/ContentCards/ContentCard3.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
  },
];

export default function Blog() {
  return (
    <div className="py-20">
      <ContentCard slides={contentSlides} />
    </div>
  );
}
