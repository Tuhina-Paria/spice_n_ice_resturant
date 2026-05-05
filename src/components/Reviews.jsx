import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anubrata",
    rating: 5,
    text: "Nice decor, comfortable seating and friendly staff. One of the most trusted places in Midnapore.",
    featured: true,
  },
  {
    name: "Soumitra",
    rating: 5,
    text: "Chicken biryani was aromatic and well-cooked. Truly satisfying experience.",
  },
  {
    name: "Amrit",
    rating: 3,
    text: "Service could be improved, but overall decent experience.",
  },
  {
    name: "Deep",
    rating: 2,
    text: "Biryani quality was not as expected. Needs improvement.",
  },
  {
    name: "Shouvik",
    rating: 5,
    text: "Great food, awesome ambience. Perfect for celebrations.",
  },
  {
    name: "Suvajit",
    rating: 4,
    text: "Tasty & spicy food. Nice atmosphere with good service.",
  },
];

const tags = [
  "chicken biryani",
  "ambience",
  "staff behaviour",
  "family dining",
];

export default function Reviews() {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-red-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ⭐ HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            What People Say
          </h2>

          <div className="flex justify-center items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-white">4.0</span>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <span className="text-white/40 text-sm">
              1,723 reviews
            </span>
          </div>
        </div>

        {/* 🏷 TAGS */}
        <div className="flex gap-2 overflow-x-auto mb-10 pb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full whitespace-nowrap backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 🌟 FEATURED REVIEW */}
        {reviews
          .filter((r) => r.featured)
          .map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/20 shadow-xl"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < r.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>

              <p className="text-white text-base mb-4">
                “{r.text}”
              </p>

              <p className="text-yellow-400 font-semibold">
                — {r.name}
              </p>
            </motion.div>
          ))}

        {/* 💬 GRID REVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {reviews
            .filter((r) => !r.featured)
            .map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-xl p-5 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400/40 transition-all"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-red-500/10" />

                {/* STARS */}
                <div className="flex gap-1 mb-3 relative z-10">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className={
                        index < r.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-white/70 text-sm mb-4 relative z-10">
                  “{r.text}”
                </p>

                {/* NAME */}
                <p className="text-white text-sm font-semibold relative z-10">
                  {r.name}
                </p>

              </motion.div>
            ))}

        </div>

        {/* 🔗 VIEW MORE */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Spice+'n'+Ice/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition"
          >
            View all reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}