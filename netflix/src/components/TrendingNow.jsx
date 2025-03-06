import React from "react";
import Carousel from "./ui/Carousel";
import TrendingCard from "./TrendingCard";

const IMG_LOC = "/src/assets/trending/";
const TRENDING = [
  {
    rank: 1,
    releaseYear: 2025,
    altText: "pushpa",
    rating: "U/A 16+",
    categories: ["Movie", "Action", "Dramas"],
    description:
      "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new.",
  },
  {
    rank: 2,
    releaseYear: 2025,
    altText: "squid-game",
    rating: "A",
    categories: ["Show", "Thrillers", "Dramas"],
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
  },
  {
    rank: 3,
    releaseYear: 2024,
    altText: "lucky-bhaskar",
    rating: "U/A 7+",
    categories: ["Movie", "Thrillers", "Dramas"],
    description:
      "A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man.",
  },
  {
    rank: 4,
    releaseYear: 2024,
    altText: "bhool",
    rating: "U/A 13+",
    categories: ["Movie", "Horror", "Comedies"],
    description:
      "A fake ghostbuster is blackmailed into helping a royal family with their haunted palace, but dueling demonic possessions complicate matters.",
  },
  {
    rank: 5,
    releaseYear: 2024,
    altText: "venom",
    rating: "U/A 16+",
    categories: ["Movie", "Action", "Sci-Fi", "Adventures"],
    description:
      "Still on the run, journalist Eddie Brock and his alien companion Venom dodge threats from a vigilant military leader and ruthless invading symbiotes.",
  },
  {
    rank: 6,
    releaseYear: 2024,
    altText: "mismatched",
    rating: "A",
    categories: ["Show", "Comedies", "Romance", "Dramas"],
    description:
      "After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.",
  },
  {
    rank: 7,
    releaseYear: 2024,
    altText: "amaran",
    rating: "U/A 16+",
    categories: ["Movie", "Action", "Romance", "Dramas"],
    description:
      "Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.",
  },
  {
    rank: 8,
    releaseYear: 2024,
    altText: "devara",
    rating: "U/A 16+",
    categories: ["Movie", "Action", "Dramas"],
    description:
      "A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own.",
  },
  {
    rank: 9,
    releaseYear: 2025,
    altText: "black-warrant",
    rating: "U/A 16+",
    categories: ["Show", "Dramas"],
    description:
      "When an upright officer accepts a job at Tihar Jail, he vows to make amends after witnessing cold-blooded corruption within its walls.",
  },
  {
    rank: 10,
    releaseYear: 2025,
    altText: "kutty",
    rating: "U/A 13+",
    categories: ["Show", "Comedies", "Romance", "Dramas"],
    description:
      "Following her heart to an elite high school in Seoul, teen matchmaker Kitty learns that life, love and family are more complicated than she ever imagined.",
  },
];

const TrendingNow = () => {
  return (
    <section className="mb-11 lg:mb-12 w-full">
      <div>
        <h2 className="lg:text-2xl 2xl:font-bold sm:font-medium xl:text-3xl md:text-xl">
          Trending Now
        </h2>
      </div>
      <div className="2xl:mt-6 lg:mt-4 mt-3">
        <Carousel
          items={TRENDING.map((item, index) => {
            return <TrendingCard item={item} key={index} />;
          })}
        />
      </div>
    </section>
  );
};

export default TrendingNow;
