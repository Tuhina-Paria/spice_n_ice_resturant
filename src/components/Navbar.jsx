import { useState, useEffect, useRef } from "react";
import { Flame, Home, Utensils, Image, MapPin } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);
  const location = useLocation();

  const links = [
    { path: "/", icon: <Home size={18} />, label: "Home" },
    { path: "/menu", icon: <Utensils size={18} />, label: "Menu" },
    { path: "/photos", icon: <Image size={18} />, label: "Photos" },
    { path: "/contact", icon: <MapPin size={18} />, label: "Location" },
  ];

  // 🔥 KEEP ONLY: hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔝 TOP NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showNav
            ? "translate-y-0 bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 h-16">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
              <Flame size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">
              Spice <span className="text-cyan-400">'n'</span> Ice
            </span>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={`text-sm transition ${
                  location.pathname === l.path
                    ? "text-yellow-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* 📱 BOTTOM NAV (SAME DESIGN, NEW LOGIC) */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">

        {/* GLASS */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl rounded-full border border-white/10" />

        {/* GLOW */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-10 bg-yellow-400/20 blur-2xl rounded-full" />

        <div className="relative flex items-center gap-6 px-6 py-3">

          {links.map((l) => {
            const isActive = location.pathname === l.path;

            return (
              <NavLink
                key={l.path}
                to={l.path}
                className="flex flex-col items-center"
              >
                {/* ICON */}
                <div
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400 scale-110"
                      : "text-white/60"
                  }`}
                >
                  {l.icon}
                </div>

                {/* DOT */}
                <div
                  className={`mt-1 h-1 w-1 rounded-full ${
                    isActive
                      ? "bg-yellow-400 scale-125"
                      : "bg-transparent"
                  }`}
                />
              </NavLink>
            );
          })}

        </div>
      </div>

      {/* 📞 FLOATING CTA (UNCHANGED)
      <a
        href="tel:+919434024513"
        className="md:hidden fixed bottom-20 right-4 z-50 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full shadow-xl animate-pulse"
      >
        📞 Order
      </a> */}
    </>
  );
}