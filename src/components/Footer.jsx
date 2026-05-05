import { Flame, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-[#050505] text-white px-4 pt-20 pb-12 overflow-hidden"
    >

      {/* 🔥 PREMIUM BACKGROUND GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* 🟥 BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <Flame size={18} />
              </div>

              <h2 className="text-xl font-semibold tracking-wide">
                Spice <span className="text-cyan-400">'n'</span> Ice
              </h2>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              One of Midnapore’s most loved restaurants.  
              Premium taste, cozy vibe & unforgettable experience.
            </p>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <a
                href="tel:+919434024513"
                className="bg-red-500 px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:scale-105 transition"
              >
                Call Now
              </a>

              <Link
                to="/menu"
                className="border border-yellow-400/40 text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold hover:bg-yellow-400/10 transition"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* 🟨 NAVIGATION */}
          <div>
            <p className="text-yellow-400 text-xs tracking-widest uppercase mb-5">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/" className="text-white/60 hover:text-white transition">
                Home
              </Link>
              <Link to="/menu" className="text-white/60 hover:text-white transition">
                Menu
              </Link>
              <Link to="/photos" className="text-white/60 hover:text-white transition">
                Photos
              </Link>
              <Link to="/contact" className="text-white/60 hover:text-white transition">
                Location
              </Link>
            </div>
          </div>

          {/* 🟦 CONTACT */}
          <div>
            <p className="text-yellow-400 text-xs tracking-widest uppercase mb-5">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/60">

              {/* LOCATION (CLICKABLE) */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MapPin size={16} className="text-cyan-400" />
                Midnapore, West Bengal
              </a>

              {/* PHONE */}
              <a
                href="tel:+919434024513"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={16} className="text-red-500" />
                +91 94340 24513
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:scale-110 hover:border-yellow-400/40 hover:bg-yellow-400/10 transition-all"
                >
                  <Icon size={15} className="text-white/70 hover:text-yellow-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">

          <p>© {year} Spice 'n' Ice. All rights reserved.</p>

          <p className="text-white/20">
            Crafted with care for premium dining
          </p>
        </div>

      </div>
    </motion.footer>
  );
}