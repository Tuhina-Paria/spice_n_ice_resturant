import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Navigation,
  Wifi,
  Car,
  Coffee,
  Users,
  CreditCard,
} from "lucide-react";

export default function LocationPage() {
  return (
    <PageWrapper>
      <div className="bg-black text-white min-h-screen pt-20 px-4 pb-20">

        {/* 🔥 HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-semibold mb-2">
            Visit <span className="text-gradient bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">Spice n Ice</span>
          </h1>
          <p className="text-white/60 text-sm">
            Where taste meets experience
          </p>
        </motion.div>

        {/* 🗺️ MAP WITH GLOW */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-cyan-400/20 blur-2xl rounded-2xl" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Midnapore&output=embed"
              className="w-full h-64 sm:h-80 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* ⚡ ACTION BUTTONS */}
        <div className="flex gap-3 mb-10">

          <a
            href="tel:+919434024513"
            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl text-center font-semibold shadow-lg hover:scale-105 transition"
          >
            📞 Call
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-xl text-center font-semibold shadow-lg hover:scale-105 transition"
          >
            📍 Directions
          </a>

        </div>

        {/* 📍 ADDRESS CARD */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-2xl rounded-xl" />
          
          <div className="relative flex gap-3 items-start bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
            <MapPin className="text-yellow-400 mt-1" />
            <p className="text-sm text-white/80">
              Spice n Ice Restaurant, Midnapore, West Bengal
            </p>
          </div>
        </div>

        {/* 🔥 FEATURE CARDS */}
        <div className="grid grid-cols-2 gap-4 mb-12">

          {[
            { icon: <Wifi />, label: "Free Wi-Fi", color: "from-cyan-400 to-blue-500" },
            { icon: <Car />, label: "Free Parking", color: "from-yellow-400 to-orange-500" },
            { icon: <Coffee />, label: "Great Coffee", color: "from-red-500 to-pink-500" },
            { icon: <Users />, label: "Family Friendly", color: "from-green-400 to-emerald-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-xl rounded-xl group-hover:opacity-40 transition`} />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="mb-2 text-white">{item.icon}</div>
                <p className="text-xs">{item.label}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* 🧾 INFO SECTIONS */}
        <div className="space-y-8 text-sm">

          <div>
            <h3 className="text-white font-semibold mb-2">
              🍽 Service Options
            </h3>
            <p className="text-white/60">
              Dine-in • Takeaway • Delivery • No-contact delivery
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              🥗 Offerings
            </h3>
            <p className="text-white/60">
              Halal Food • Vegan Options • Small Plates • Late-night food
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              💳 Payments
            </h3>
            <p className="text-white/60">
              UPI • Credit Cards • Debit Cards • Google Pay
            </p>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}