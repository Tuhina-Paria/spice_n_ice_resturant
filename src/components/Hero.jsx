import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import biriyani3 from "../assets/biriyani3.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${biriyani3})`,
        }}
      />

      {/* DARK OVERLAY (depth) */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/40 z-10" />

      {/* TOP FADE */}
      <div className="absolute top-0 w-full h-28 bg-gradient-to-b from-black/90 to-transparent z-20" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20" />

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col h-full justify-end pb-24 px-6 text-center">

        {/* HEADING */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight drop-shadow-2xl animate-fade-up">
          Where Taste <br />
          <span className="text-orange-400">Meets Elegance</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-white/70 text-sm sm:text-base mt-4 max-w-sm mx-auto animate-fade-in">
          Premium flavors, cozy ambience, and unforgettable dining experience.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/order")}
          className="mt-6 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 animate-fade-up"
        >
          Order Now →
        </button>

      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce z-30">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}