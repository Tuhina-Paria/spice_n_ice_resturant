import Hero from "../components/Hero";
import Dishes from "../components/Dishes";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* 🔥 HERO (full screen) */}
      <section id="hero">
        <Hero />
      </section>

      {/* 🔥 TRANSITION SPACE */}
      <div className="h-16 bg-gradient-to-b from-black to-[#0a0a0a]" />

      {/* 🍽 DISHES */}
      <motion.section
        id="dishes"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Dishes />
      </motion.section>

      {/* 🔥 TRANSITION */}
      <div className="h-16 bg-gradient-to-b from-[#0a0a0a] to-black" />

      {/* ⭐ REVIEWS */}
      <motion.section
        id="reviews"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Reviews />
      </motion.section>

      {/* 🔥 CTA BEFORE FOOTER (IMPORTANT) */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
          Ready to Experience the Taste?
        </h2>

        <p className="text-white/60 text-sm mb-6">
          Order now from your favorite platform
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/order"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-sm font-semibold shadow-lg active:scale-95"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* 🔥 FOOTER (no section needed) */}
      <Footer />

    </main>
  );
}

export default Home;