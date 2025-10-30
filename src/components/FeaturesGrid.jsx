import { Rocket, Mail, Palette, Settings } from "lucide-react";

const features = [
  {
    title: "AI copy that converts",
    description:
      "Describe your goal and audience. Get multiple variants with compelling subject lines and body copy.",
    icon: Rocket,
  },
  {
    title: "Pixel-perfect design",
    description:
      "Drag-and-drop sections, tweak spacing, swap palettes. Your brand applied automatically.",
    icon: Palette,
  },
  {
    title: "One-click personalization",
    description:
      "Merge customer data, dynamic content, and conditional blocks for every segment.",
    icon: Settings,
  },
  {
    title: "Export anywhere",
    description:
      "Send with your ESP or export clean HTML that works across major clients.",
    icon: Mail,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 -top-10 -z-0 h-40 bg-gradient-to-b from-fuchsia-100/40 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for modern marketing teams
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need to move from idea to polished email — in minutes, not days.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white shadow-md">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-orange-300/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
