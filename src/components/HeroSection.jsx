import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <div className="relative h-[620px] md:h-[760px]">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/90 pointer-events-none" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400" />
            AI-powered email creation
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Generate stunning emails in seconds
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Craft on-brand campaigns with AI, then fine-tune every detail. From layout to
            tone, bring your message to life with precision and speed.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-95 sm:w-auto"
            >
              Start for free
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
            >
              Explore features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 opacity-90 sm:grid-cols-4">
            {[
              { label: "No-code editor" },
              { label: "Brand-safe" },
              { label: "Responsive by default" },
              { label: "Export to HTML" },
            ].map((item) => (
              <div key={item.label} className="text-xs text-slate-700">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
