import { Rocket, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-slate-900">AuraMail</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <Mail size={16} /> Try a Sample
            </a>
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
