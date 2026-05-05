import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import menu from "../assets/menu.jpg";

export default function MenuPage() {
  const images = [menu];
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  // 🔗 YOUR REAL LINKS (replace these)
  const zomatoLink = "https://www.zomato.com/";
  const swiggyLink = "https://www.swiggy.com/";

  return (
    <PageWrapper>
      <div className="pt-20 pb-32 bg-black text-white min-h-screen px-4">

        {/* 🔥 HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Our Menu
          </h1>
          <p className="text-white/60 text-xs mt-1">
            Tap to zoom • Explore dishes
          </p>
        </div>

        {/* 🔥 ORDER BAR */}
        <div className="flex gap-3 justify-center mb-6">
          <a
            href={zomatoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 px-4 py-2 rounded-full text-xs font-semibold shadow-md active:scale-95"
          >
            Order on Zomato
          </a>

          <a
            href={swiggyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-4 py-2 rounded-full text-xs font-semibold shadow-md active:scale-95"
          >
            Order on Swiggy
          </a>
        </div>

        {/* 🔥 MENU IMAGE */}
        <div className="flex flex-col items-center gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="menu"
              loading="lazy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveIndex(i)}
              className="w-full max-w-2xl rounded-2xl shadow-xl border border-white/10 cursor-zoom-in active:scale-[0.98] transition"
            />
          ))}
        </div>

        {/* 🔥 LIGHTBOX */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-5 right-5 text-white/80"
              >
                <X size={26} />
              </button>

              <motion.img
                src={images[activeIndex]}
                className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ✅ FLOATING CTA */}
      <div className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => navigate("/order")}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl shadow-xl text-sm font-semibold active:scale-95"
        >
          Order Now
        </button>
      </div>

    </PageWrapper>
  );
}