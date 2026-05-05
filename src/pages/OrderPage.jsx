import PageWrapper from "../components/PageWrapper";

export default function OrderPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold mb-2 text-center">
          Order Your Food
        </h1>

        <p className="text-white/60 text-sm mb-8 text-center">
          Choose your preferred delivery partner
        </p>

        {/* BUTTONS */}
        <div className="w-full max-w-sm flex flex-col gap-4">

          {/* ZOMATO */}
          <a
            href="https://www.zomato.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#E23744] hover:bg-[#c92f3b] px-5 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-[1.03]"
          >
            <span className="text-lg font-semibold">Zomato</span>
            <span className="text-sm">→</span>
          </a>

          {/* SWIGGY */}
          <a
            href="https://www.swiggy.com/restaurants/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#FC8019] hover:bg-[#e56f13] px-5 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-[1.03]"
          >
            <span className="text-lg font-semibold">Swiggy</span>
            <span className="text-sm">→</span>
          </a>

        </div>

        {/* TRUST LINE */}
        <p className="text-white/40 text-xs mt-6 text-center">
          🚀 Fast delivery • Trusted partners
        </p>

      </div>
    </PageWrapper>
  );
}