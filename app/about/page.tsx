import Link from "next/link";
import { ArrowRight, Binoculars, Mountain, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-widest text-blue-400">
          About Clearview Operations
        </p>

        <h1 className="mt-4 font-serif text-5xl font-black leading-tight md:text-6xl">
          Helping businesses see clearer and operate better.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Clearview Operations helps small businesses identify friction,
          improve service flow, strengthen customer experience, and create
          clearer operational systems. We combine practical operations thinking
          with UX-informed observation to help teams work smoother and customers
          feel better served.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Binoculars className="mb-5 h-8 w-8 text-blue-400" />
            <h2 className="text-xl font-black">We Observe</h2>
            <p className="mt-3 text-slate-300">
              We look closely at customer journeys, employee workflows, service
              bottlenecks, and the small details that often get overlooked.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Target className="mb-5 h-8 w-8 text-blue-400" />
            <h2 className="text-xl font-black">We Clarify</h2>
            <p className="mt-3 text-slate-300">
              We turn observations into clear findings, practical priorities,
              and improvement opportunities your business can actually use.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Mountain className="mb-5 h-8 w-8 text-blue-400" />
            <h2 className="text-xl font-black">We Improve</h2>
            <p className="mt-3 text-slate-300">
              We help businesses move toward smoother operations, better
              customer experiences, and stronger day-to-day execution.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-8">
          <h2 className="font-serif text-3xl font-black">Why Clearview?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Most operational problems are not always obvious from the inside.
            Clearview brings an outside perspective, structured observation, and
            a practical improvement mindset to help businesses find what is
            slowing them down and what could work better.
          </p>
        </div>

        <Link
          href="/#contact"
          className="mt-10 inline-flex items-center rounded-md bg-blue-600 px-6 py-4 font-black text-white transition hover:scale-[1.02] hover:bg-blue-500"
        >
          Schedule a Free Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </main>
  );
}