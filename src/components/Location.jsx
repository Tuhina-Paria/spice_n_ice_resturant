import { MapPin, Phone, Navigation, Clock } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-brand-black py-20 px-4 overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="text-brand-ice text-xs tracking-[0.35em] uppercase mb-3 animate-fade-up">
          Find Us
        </p>

        <h2 className="font-display text-3xl sm:text-5xl text-white animate-fade-up">
          Visit Spice 'n' Ice
        </h2>

        <div className="w-14 h-[2px] bg-brand-ice mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* ADDRESS */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-brand-ice/40 transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-ice/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <MapPin size={22} className="text-brand-ice" />
              </div>

              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">
                  Address
                </p>

                <p className="text-white font-semibold text-lg">
                  Library Rd, Midnapore
                </p>

                <p className="text-white/50 text-sm mt-1">
                  West Bengal, India
                </p>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-brand-gold/40 transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <Phone size={22} className="text-brand-gold" />
              </div>

              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">
                  Call Us
                </p>

                <p className="text-white font-semibold text-lg">
                  +91 94340 24513
                </p>

                <p className="text-white/50 text-sm mt-1">
                  Tap to order or reserve table
                </p>
              </div>
            </div>
          </div>

          {/* TIMING */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-brand-red/40 transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <Clock size={22} className="text-brand-red" />
              </div>

              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">
                  Opening Hours
                </p>

                <p className="text-white font-semibold text-lg">
                  Mon – Sun: 11am – 11pm
                </p>

                <p className="text-white/50 text-sm mt-1">
                  Open daily for lunch & dinner
                </p>
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-3">

            <a
              href="tel:+919434024513"
              className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-red/30 active:scale-[0.96]"
            >
              <Phone size={16} />
              Call & Order
            </a>

            <a
              href="https://maps.google.com/?q=Library+Road+Midnapore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-brand-ice/40 hover:border-brand-ice text-brand-ice hover:bg-brand-ice/10 py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">

          {/* glow effect */}
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-brand-ice/20 blur-3xl rounded-full" />

          <iframe
            title="Spice n Ice Location"
            src="https://maps.google.com/maps?q=Library+Road,+Midnapore,+West+Bengal&output=embed&z=15"
            className="w-full h-full grayscale contrast-125 brightness-90"
            loading="lazy"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>

      {/* 🔥 MOBILE STICKY CTA */}
      <a
        href="tel:+919434024513"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 bg-brand-red text-white px-6 py-3 rounded-full shadow-lg shadow-brand-red/30 z-50 text-sm font-semibold"
      >
        📞 Call Now
      </a>
    </section>
  );
}