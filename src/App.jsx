import { useState } from "react";

export default function App() {
  return (
    <main className="bg-white text-slate-800 font-sans">
      <Header />
      <Hero />
      <Highlights />
      <Platform />
      <Advantages />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide">
          AquaPro<span className="text-blue-600">X</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#platform" className="hover:text-blue-600 transition">
            Platform
          </a>
          <a href="#advantages" className="hover:text-blue-600 transition">
            Advantages
          </a>
          <a href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          Request Demo
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Structured Quality Planning.
          <br />
          <span className="text-blue-600">
            Intelligent Risk Management.
          </span>
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          AquaPro X unifies APQP, PPAP, and FMEA workflows into one
          streamlined digital platform designed for modern
          manufacturing teams.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Explore Platform
          </button>
          <button className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
            Watch Overview
          </button>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { title: "Centralized Workflows", desc: "Unified lifecycle visibility." },
    { title: "Automated Risk Scoring", desc: "Live FMEA recalculations." },
    { title: "Compliance Ready", desc: "Aligned with global standards." }
  ];

  return (
    <section className="py-16 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <div key={i} className="hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          A Unified Digital Quality Environment
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            title="APQP Framework"
            desc="Structured phase-based execution across product lifecycle."
          />
          <FeatureCard
            title="Dynamic FMEA"
            desc="Automated risk prioritization and mitigation tracking."
          />
          <FeatureCard
            title="PPAP Control"
            desc="Centralized document control and approval workflow."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Advantages() {
  const slides = [
    "Enhance cross-functional collaboration with unified dashboards.",
    "Reduce documentation overhead through automation.",
    "Scale effortlessly with secure cloud-ready architecture."
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Platform Advantages
        </h2>

        <div className="relative overflow-hidden border border-slate-100 rounded-2xl p-12">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((text, i) => (
              <div key={i} className="min-w-full">
                <p className="text-lg text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-8 text-sm">
            <button onClick={prev} className="hover:text-blue-600 transition">
              ← Prev
            </button>
            <button onClick={next} className="hover:text-blue-600 transition">
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const data = [
    {
      q: "Is AquaPro X cloud deployable?",
      a: "Yes. It supports secure cloud and hybrid deployment environments."
    },
    {
      q: "Does it support automotive compliance?",
      a: "The platform aligns with globally recognized automotive standards."
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {data.map((item, i) => (
          <div key={i} className="mb-4 border border-slate-200 rounded-xl">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 font-medium"
            >
              {item.q}
            </button>

            {open === i && (
              <div className="px-5 pb-5 text-sm text-slate-600">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Transform Your Quality Operations
      </h2>
      <p className="mb-8 text-blue-100">
        Experience intelligent planning and risk visibility in one
        streamlined platform.
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:scale-105 transition">
        Schedule Demo
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-slate-400">
      © 2026 AquaPro X. Designed for modern manufacturing excellence.
    </footer>
  );
}
