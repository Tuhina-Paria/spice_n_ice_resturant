import React, { useRef, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import white_sauce_pasta from "../assets/white_sauce_pasta.png";
import lollipop from "../assets/lollipop.png";
import chawmin from "../assets/chawmin.png";
import kulcha from "../assets/kulcha.png";
import fried_rice from "../assets/fried_rice.png";

const dishes = [
  {
    name: "White Sauce Pasta",
    tag: "Chef Special",
    description: "Creamy béchamel pasta with herbs",
    price: "₹160",
    image: white_sauce_pasta,
    tagClass: "bg-yellow-400 text-black",
    accentColor: "#facc15",
  },
  {
    name: "Chicken Lollipop",
    tag: "Crispy",
    description: "Spiced glazed chicken lollipops",
    price: "₹140",
    image: lollipop,
    tagClass: "bg-red-500 text-white",
    accentColor: "#ef4444",
  },
  {
    name: "Chowmein",
    tag: "Street Style",
    description: "Wok-tossed noodles with veggies",
    price: "₹120",
    image: chawmin,
    tagClass: "bg-cyan-300 text-black",
    accentColor: "#67e8f9",
  },
  {
    name: "Masala Kulcha",
    tag: "Street Style",
    description: "Buttery kulcha with masala",
    price: "₹80",
    image: kulcha,
    tagClass: "bg-yellow-400 text-black",
    accentColor: "#facc15",
  },
  {
    name: "Fried Rice",
    tag: "Value Meal",
    description: "Egg & veggie tossed fried rice",
    price: "₹130",
    image: fried_rice,
    tagClass: "bg-red-500 text-white",
    accentColor: "#ef4444",
  },
];

export default function Dishes() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const navigate = useNavigate();

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / dishes.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const toggleLike = (name) => {
    setLiked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const scrollToIndex = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / dishes.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
    setActiveIndex(i);
  };

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#111111] py-14 overflow-hidden">

      {/* ── GOOGLE FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── HEADER ── */}
      <div className="text-center mb-8 px-4">
        {/* <p className="font-dm text-red-500 text-xs tracking-[0.35em] uppercase mb-2 font-medium">
          Signature Dishes
        </p> */}

        <h2 className="font-playfair text-white text-3xl sm:text-4xl font-bold">
          Most Loved{" "}
          <span className="text-yellow-400">Dishes</span>
        </h2>

        <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-red-500 to-yellow-400" />
      </div>

      {/* ── SCROLL TRACK ── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {dishes.map((dish, i) => (
          <div
            key={dish.name}
            className="flex-shrink-0 snap-center relative rounded-3xl overflow-hidden"
            style={{
              width: "78vw",
              maxWidth: 320,
              height: 420,
              transform: activeIndex === i ? "scale(1)" : "scale(0.95)",
              boxShadow: activeIndex === i
                ? `0 20px 60px -10px ${dish.accentColor}55`
                : "0 8px 30px rgba(0,0,0,0.5)",
              transition: "transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.4s ease",
            }}
          >
            {/* IMAGE */}
            <img
              src={dish.image}
              alt={dish.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* TOP ROW — Tag + Price */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className={`font-dm text-[10px] px-3 py-1 rounded-full font-bold tracking-wide ${dish.tagClass}`}>
                {dish.tag}
              </span>

              <div className="font-dm text-xs px-3 py-1 rounded-full font-bold text-yellow-400 bg-white/10 backdrop-blur-md border border-white/10">
                {dish.price}
              </div>
            </div>

            {/* LIKE BUTTON */}
            <button
              onClick={() => toggleLike(dish.name)}
              className="absolute top-14 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-150 active:scale-90"
            >
              <Heart
                size={16}
                fill={liked[dish.name] ? "#ef4444" : "none"}
                stroke={liked[dish.name] ? "#ef4444" : "white"}
              />
            </button>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-playfair text-white text-xl font-bold leading-tight">
                {dish.name}
              </h3>

              <p className="font-dm text-white/60 text-xs mt-1 leading-relaxed">
                {dish.description}
              </p>

              {/* ORDER BUTTON */}
             <button
  onClick={() => navigate("/order")}
  className="font-dm mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-95 active:shadow-md"
>
  <ShoppingBag size={14} />
  Order Now
</button>
            </div>
          </div>
        ))}
      </div>

      {/* ── DOT INDICATORS ── */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {dishes.map((dish, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: activeIndex === i ? 24 : 7,
              height: 7,
              background: activeIndex === i ? dish.accentColor : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* ── SWIPE HINT ── */}
      <p className="font-dm text-center text-[11px] mt-3 text-white/30 md:hidden">
        swipe to explore
      </p>

    </section>
  );
}