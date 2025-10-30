export default function CallToAction() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-white via-white to-white p-1 shadow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.15),transparent_40%),_radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.12),transparent_45%)] pointer-events-none" />

          <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Turn ideas into beautiful emails — fast
              </h3>
              <p className="mt-3 text-slate-600">
                Start free. Generate your first campaign in seconds and refine it with our
                intuitive editor.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
                >
                  Create a free account
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  View templates
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="h-full w-full bg-[conic-gradient(at_70%_30%,#a78bfa_0deg,#f472b6_90deg,#fb923c_180deg,#60a5fa_270deg,#a78bfa_360deg)] opacity-20" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
                  <div>
                    <div className="font-semibold text-slate-900">AI</div>
                    Copy & layout
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Brand</div>
                    Colors & fonts
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Export</div>
                    HTML or ESP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
