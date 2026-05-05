import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// assets
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";

export default function PhotosPage() {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6];
  const [activeIndex, setActiveIndex] = useState(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <PageWrapper>
      <div className="bg-black text-white min-h-screen pt-20 px-4 pb-20">

        {/* 🔥 HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Our Gallery
          </h1>
          <p className="text-white/60 text-sm mt-1">
            Food • Ambience • Moments
          </p>
        </div>

        {/* 📸 MASONRY GRID */}
        <div className="columns-2 sm:columns-3 gap-3 space-y-3">

          {images.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* IMAGE */}
              <img
                src={img}
                alt="gallery"
                className="w-full object-cover rounded-2xl transition duration-500 group-hover:scale-110"
              />

              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          ))}

        </div>

        {/* 🔥 LIGHTBOX */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              {/* CLOSE */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-5 right-5 text-white/70 hover:text-white"
              >
                <X size={28} />
              </button>

              {/* LEFT */}
              <button
                onClick={prev}
                className="absolute left-3 sm:left-6 text-white/50 hover:text-white"
              >
                <ChevronLeft size={32} />
              </button>

              {/* IMAGE WITH SWIPE */}
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) next();
                  if (info.offset.x > 80) prev();
                }}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* RIGHT */}
              <button
                onClick={next}
                className="absolute right-3 sm:right-6 text-white/50 hover:text-white"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
}