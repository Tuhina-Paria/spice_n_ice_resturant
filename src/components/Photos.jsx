import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
  "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
];

export default function Photos() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section id="photos" className="bg-brand-black py-20 px-4">

      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="text-brand-ice text-xs tracking-[0.35em] uppercase mb-3 animate-fade-up">
          Gallery
        </p>

        <h2 className="font-display text-3xl sm:text-5xl text-white animate-fade-up">
          Taste Through Eyes
        </h2>

        <div className="w-14 h-[2px] bg-brand-ice mx-auto mt-4" />
      </div>

      {/* MOBILE SCROLL */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
        {photos.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className="min-w-[75%] snap-center rounded-2xl overflow-hidden relative cursor-pointer group"
          >
            <img
              src={img}
              alt="food"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {photos.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
          >
            <img
              src={img}
              alt="food"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-sm border border-white/40 px-4 py-2 rounded-full backdrop-blur">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImg && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4">

          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={28} />
          </button>

          <img
            src={activeImg}
            alt="preview"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* MOBILE HINT */}
      <p className="text-center text-xs text-white/40 mt-4 md:hidden">
        ← Swipe photos →
      </p>
    </section>
  );
}