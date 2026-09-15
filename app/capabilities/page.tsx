import Link from "next/link";

const competencies = [
  "Project and program management, planning, and coordination",
  "IT infrastructure deployment and implementation support",
  "Business process analysis and workflow improvement",
  "Process documentation, standard operating procedures, and handoff clarity",
  "Customer and end-user journey assessments",
  "Customer experience audits and service quality assessments",
  "Stakeholder communication, status reporting, and action tracking",
  "Data-informed analysis and management reporting",
];

const naicsCodes = [
  {
    code: "541611",
    description:
      "Administrative Management and General Management Consulting Services",
  },
  {
    code: "541614",
    description:
      "Process, Physical Distribution, and Logistics Consulting Services",
  },
  {
    code: "541512",
    description: "Computer Systems Design Services",
  },
  {
    code: "541618",
    description: "Other Management Consulting Services",
  },
];

const differentiators = [
  "More than eight years of healthcare and enterprise IT experience",
  "MBA in Business Analytics with technical systems education",
  "Experience supporting multiple hospital and clinic locations",
  "Combines technical delivery, process analysis, and customer experience",
];

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">
            Clearview Operations
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black tracking-tight md:text-7xl">
            Government & Contracting Capabilities
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Technology project and operations support for organizations that
            need clearer processes, stronger coordination, and practical
            execution.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-200">
            Federal registration in progress • UEI & CAGE pending
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
          Company Overview
        </p>

        <h2 className="mt-3 max-w-4xl font-serif text-4xl font-black">
          Practical support from assessment through execution.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          Clearview Operations is an Arkansas-based small business providing
          technology project support, operational analysis, process
          improvement, and customer and end-user experience assessments. We
          help organizations document current conditions, identify
          bottlenecks, coordinate technology initiatives, and translate
          findings into practical action plans.
        </p>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
            Core Competencies
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {competencies.map((competency) => (
              <div
                key={competency}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-semibold shadow-sm"
              >
                <span className="mr-3 text-blue-600">✓</span>
                {competency}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
          Experience
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Company Experience • 2026
            </p>

            <h3 className="mt-3 font-serif text-2xl font-black">
              Commercial Operations Assessment Portfolio
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Conducted independent field assessments across hospitality, food
              service, retail, and customer pickup operations in Arkansas,
              Texas, and Florida. Deliverables included current-state
              observations, prioritized findings, impact analysis, and
              recommended corrective actions.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Key Personnel Experience • 2020–Present
            </p>

            <h3 className="mt-3 font-serif text-2xl font-black">
              Healthcare IT Infrastructure & Project Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Project leadership and technology infrastructure support across
              hospital systems and outpatient clinics, including coordination
              of technical, operational, and leadership stakeholders,
              deployments, expansion initiatives, risks, action items,
              documentation, and follow-up.
            </p>
          </article>
        </div>
      </section>

      {/* GOVERNMENT DATA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-400">
              Company Data
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <DataItem label="Legal Name" value="Aura Global Holdings, LLC" />
              <DataItem label="DBA" value="Clearview Operations" />
              <DataItem label="Location" value="Little Rock, Arkansas" />
              <DataItem
                label="Business Type"
                value="Arkansas Limited Liability Company"
              />
              <DataItem label="SAM Status" value="Entity validation in progress" />
              <DataItem label="UEI" value="Pending" />
              <DataItem label="CAGE Code" value="Pending" />
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-400">
              NAICS Codes
            </p>

            <div className="mt-8 space-y-4">
              {naicsCodes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5"
                >
                  <p className="text-xl font-black text-blue-400">
                    {item.code}
                  </p>
                  <p className="mt-1 leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
          Why Clearview
        </p>

        <h2 className="mt-3 font-serif text-4xl font-black">
          Differentiators
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-blue-100 bg-blue-50 p-6 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
            Selected Tools & Methods
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Jira • Microsoft Project • Power BI • Tableau • SQL • Agile •
            Waterfall • Kanban • Juniper • Cisco
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="font-serif text-4xl font-black">
            Let&apos;s discuss your requirements.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Clearview Operations is available to discuss project support,
            operational improvement, technology initiatives, and
            subcontracting opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mickey@clearviewops.tech"
              className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Contact Clearview
            </a>

            <Link
              href="/"
              className="rounded-full border border-slate-300 px-7 py-3 font-bold transition hover:bg-slate-100"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-8 text-sm font-semibold text-slate-400">
            Capability Statement PDF • Available upon completion of federal
            registration
          </p>
        </div>
      </section>
    </main>
  );
}

function DataItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}