import { useState, useEffect } from "react";
import { Github, Globe } from "lucide-react";
const movies = [
  {
    id: 1,
    title: "DUNE",
    about:
      "Dune, science fiction novel by American author Frank Herbert, serialized in Analog from 1963 to 1965 and then published in book form later in 1965. Dune follows young nobleman Paul Atreides through adversity to his destiny as a messianic leader on the arid desert planet Arrakis.",
    poster: "/dunpos.jpg",
    background: "/duneback.webp",
  },
  {
    id: 2,
    title: "ANYONE BUT YOU",
    about:
      "In the edgy comedy Anyone But You, Bea (Sydney Sweeney) and Ben (Glen Powell) look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold -- until they find themselves unexpectedly thrust together at a destination wedding in Australia.",
    poster: "/anypos.webp",
    background: "/anyback.webp",
  },
  {
    id: 3,
    title: "DAMSEL",
    about:
      "A young woman, Elodie, agrees to marry a prince from a far away land to save her people from death. She soon discovers this fairytale is too good to be true when she is thrown into a cave with a dragon as a sacrifice. She must find a way to survive and escape using only her wit and bravery.",
    poster: "/dampos.jpg",
    background: "/damback.jpg",
  },
  {
    id: 4,
    title: "KUNG FU PANDA 4",
    about:
      "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places.",
    poster: "/kungpos.jpg",
    background: "/kungback.jpg",
  },
  {
    id: 5,
    title: "AQUAMAN 2",
    about:
      "After failing to defeat Aquaman the first time, Black Manta wields the power of the mythic Black Trident to unleash an ancient and malevolent force. Hoping to end his reign of terror, Aquaman forges an unlikely alliance with his brother, Orm, the former king of Atlantis. Setting aside their differences, they join forces to protect their kingdom and save the world from irreversible destruction.",
    poster: "/aquapos.jpg",
    background: "/aquaback.jpg",
  },
];

export default function App() {
  const [current, setCurrent] = useState(2); // default DAMSEL
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % movies.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + movies.length) % movies.length);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out font-sans"
      style={{ backgroundImage: `url(${movies[current].background})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <nav className="relative z-50 flex justify-end items-center gap-4 p-4 md:p-6">
        <a
          href="https://github.com/Dheeraj-Chintala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-transform hover:scale-110"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://dheerajkumar.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-transform hover:scale-110"
        >
          <Globe className="w-6 h-6" />
        </a>
      </nav>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-12 z-40 ">
        <div
          className="flex flex-col md:flex-row justify-between md:justify-between items-stretch md:items-start gap-8
"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {movies[current].title}
            </h1>
            <p className="mt-4 text-gray-100 max-w-sm mx-auto md:mx-0 text-sm md:text-base">
              {movies[current].about}
            </p>
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${encodeURIComponent(
                    movies[current].title
                  )}`,
                  "_blank"
                )
              }
              className="mt-6 px-6 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 hover:scale-105 transition text-sm md:text-base cursor-pointer"
            >
              WATCH NOW
            </button>
          </div>

          <div className="relative flex flex-col items-center md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-64 md:h-80 flex justify-center items-center perspective-[1000px]">
              {movies.map((movie, index) => {
                const offset =
                  (index - current + movies.length) % movies.length;
                let transform = "";
                let zIndex = 0;
                let opacity = 0.7;

                const xSmall = isMobile ? 60 : 120;
                const xLarge = isMobile ? 120 : 240;

                if (offset === 0) {
                  transform = "translateX(0) translateZ(0) scale(1)";
                  zIndex = 30;
                  opacity = 1;
                } else if (offset === 1 || offset === -4) {
                  transform = `translateX(${xSmall}px) translateZ(-100px) scale(0.9)`;
                  zIndex = 20;
                } else if (offset === 2 || offset === -3) {
                  transform = `translateX(${xLarge}px) translateZ(-200px) scale(0.8)`;
                  zIndex = 10;
                } else if (offset === 4 || offset === -1) {
                  transform = `translateX(-${xSmall}px) translateZ(-100px) scale(0.9)`;
                  zIndex = 20;
                } else if (offset === 3 || offset === -2) {
                  transform = `translateX(-${xLarge}px) translateZ(-200px) scale(0.8)`;
                  zIndex = 10;
                }

                return (
                  <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    onClick={() => setCurrent(index)}
                    className="absolute w-24 h-36 md:w-48 md:h-72 rounded-lg border border-white/50 object-cover cursor-pointer transition-all duration-500 hover:opacity-100"
                    style={{ transform, zIndex, opacity }}
                  />
                );
              })}
            </div>

            <div className="flex justify-center gap-6 mt-12 md:mt-20">
              <button
                onClick={prevSlide}
                className="text-white text-3xl bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="text-white text-3xl bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
