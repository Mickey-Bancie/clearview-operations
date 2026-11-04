
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Binoculars,
  ClipboardCheck,
  MapPin,
  Target,
} from "lucide-react";

const methodology = [
  {
    number: "01",
    title: "Observe",
    description:
      "We examine customer journeys and operational touchpoints firsthand, identifying friction, inconsistencies, and opportunities for improvement.",
    Icon: Binoculars,
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "We organize observations into meaningful findings, consider potential causes, and prioritize issues based on their operational impact.",
    Icon: BarChart3,
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "We translate findings into practical recommendations that businesses can evaluate, prioritize, and implement.",
    Icon: Target,
  },
];

const fieldAudits = [
  {
    location: "Florida",
    category: "Coffee Shop",
    title: "The Customer Journey Behind Every Cup",
    description:
      "An independent field observation examining customer interactions, beverage service, and consistency across the ordering experience.",
    insights: [
      "Customer greeting and engagement",
      "Beverage presentation and temperature",
      "Service consistency",
    ],
    image:
  "/images/clearview-coffee-shop.png",
  },
  {
    location: "Northwest Arkansas",
    category: "Restaurant",
    title: "When Service Meets Operations",
    description:
      "An independent restaurant observation exploring the relationship between service timing, the dining environment, and customer experience.",
    insights: [
      "Service timing and coordination",
      "Dining environment",
      "Operational consistency",
    ],
    image:
  "/images/clearview-restaurant.png",
  },

    {
    location: "Independent Observation",
    category: "Auto Dealership",
    title: "The Customer Experience Beyond the Showroom",
    description:
      "An independent field observation exploring how customer engagement, sales interactions, and the showroom environment shape the dealership experience.",
    insights: [
      "Initial greeting and customer engagement",
      "Sales communication and professionalism",
      "Showroom environment and presentation",
    ],
    image: "/images/clearview-dealership.png",
  },
  {
    location: "Independent Observation",
    category: "Hospitality",
    title: "The Guest Experience Starts at Check-In",
    description:
      "An independent hospitality observation examining front desk interactions, check-in processes, and the overall guest experience.",
    insights: [
      "Front desk greeting and professionalism",
      "Check-in efficiency and communication",
      "Lobby environment and guest comfort",
    ],
    image: "/images/clearview-hotel.png",
  },

];

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <header className="bg-[#071a35] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-black tracking-wide">
              CLEARVIEW <span className="text-sky-400">OPERATIONS</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
              Operational Insights. Practical Solutions.
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-[#071a35] px-6 py-20 text-white md:min-h-[530px]">
       <>
  <div
    className="absolute inset-0 z-0 bg-cover bg-center blur-[6px] md:hidden"
    style={{
      backgroundImage: "url('/images/clearview-approach-mobile.png')",
    }}
  />

<div
  className="absolute inset-0 md:hidden"
  style={{
    zIndex: 5,
    backgroundColor: "rgba(7, 26, 53, 0.65)",
  }}
/>

  <div
    className="absolute inset-0 z-0 hidden bg-cover bg-center md:block"
    style={{
      backgroundImage: "url('/images/clearview-approach-hero.png')",
    }}
  />
</>
        <div className="absolute inset-0 z-[2] hidden bg-gradient-to-r from-[#071a35]/95 via-[#071a35]/65 to-transparent md:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-sky-300">
            The Clearview Approach
          </p>

          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            Real-World Insights.
            <span className="block text-sky-300">
              Practical Improvements.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white md:text-lg">
            We combine firsthand customer experience observations,
            operational analysis, and actionable recommendations to help
            businesses better understand how their operations perform.
          </p>

          <a
            href="#fieldwork"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
          >
            Explore Our Fieldwork
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              How We Work
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-slate-800">
              Our Methodology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              A structured approach that turns real observations into
              practical opportunities for improvement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {methodology.map(({ number, title, description, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-slate-200">
                    {number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fieldwork */}
      <section id="fieldwork" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            From the Field
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-slate-800">
            Where Observations Become Insights
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            Our independent field observations help us examine real
            customer journeys and identify opportunities for better
            service delivery and operational consistency.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {fieldAudits.map((audit) => (
              <article
                key={audit.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                 src={audit.image}
                 alt={`${audit.category} field observation`}
                 className="h-full w-full object-cover"
                 />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#071a35] px-4 py-2 text-xs font-bold text-white">
                    <MapPin className="h-4 w-4 text-sky-300" />
                    {audit.location}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                    {audit.category} · Independent Observation
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-slate-800 md:text-[22px]">
                    {audit.title}
                  </h3>
                  <p className="mt-4 mb-5 leading-7 text-slate-600">
                    {audit.description}
                  </p>

                  <div className="mt-auto border-t border-slate-100 pt-4">
                    <p className="mb-3 text-sm font-bold">
                      Areas examined
                    </p>
                    <ul className="space-y-3">
                      {audit.insights.map((insight) => (
                        <li
                          key={insight}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-slate-500">
            Field examples are based on independent observations. 
            Images are illustrative. Business identities are withheld, 
            and no client engagement or measurable outcome is implied.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071a35] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            See Your Business Through a Different Lens.
          </h2>
          <p className="mt-6 text-md font-semibold text-sky-300">
  Wondering what an independent assessment might uncover in your business?
</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Through firsthand observations and operational analysis, Clearview delivers practical insights and actionable recommendations to help your business move forward.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 !px-10 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
          style={{
  paddingLeft: "20px",
  paddingRight: "20px",
}}
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <footer className="bg-[#061429] px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Clearview Operations.
        A DBA of Aura Global Holdings, LLC.
      </footer>
    </main>
  );
}
