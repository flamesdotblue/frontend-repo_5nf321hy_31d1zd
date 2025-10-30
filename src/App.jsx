import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <CallToAction />
      </main>
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} AuraMail. Built for teams who care about beautiful emails.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
