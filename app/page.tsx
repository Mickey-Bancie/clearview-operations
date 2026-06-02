"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Eye,
  Search,
  Activity,
  Users,
  Laptop,
  Cog,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
  Timer,
  Star,
  Menu,
  X,
} from "lucide-react";

const logoSrc = "/logo.png";

const services = [
  {
    number: "01",
    icon: Eye,
    overlayIcon: Search,
    title: "Customer Experience & Service Audits",
    description:
      "Our signature service. We evaluate your business through the lens of your customers — identifying friction, gaps, communication breakdowns, and opportunities that are often invisible from the inside.",
    bullets: [
      "Customer journey mapping",
      "Service quality reviews",
      "Process friction identification",
      "Communication audits",
      "Experience optimization",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: Laptop,
    title: "Project & Program Management",
    description:
      "We bring structure, accountability, and momentum to your most critical initiatives — so projects cross the finish line on time, on budget, and with the outcomes you intended.",
    bullets: ["Initiative leadership", "PM frameworks & methodology", "Stakeholder coordination", "Execution oversight"],
  },
  {
    number: "03",
    icon: Cog,
    title: "Operations Consulting",
    description:
      "We assess how your business actually runs day-to-day and give you an honest, structured picture of where you can improve efficiency, reduce costs, and operate with greater confidence.",
    bullets: ["Operational assessments", "Workflow evaluations", "Organizational efficiency", "Strategic recommendations"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Process Improvement",
    description:
      "We identify bottlenecks, eliminate redundancy, and design leaner, repeatable workflows — then codify them into systems your team can actually follow and build on.",
    bullets: ["SOP development", "Workflow redesign", "Bottleneck reduction", "Continuous improvement systems"],
  },
];

const whyItems = [
  { icon: Clock3, title: "Fast Turnaround", text: "We deliver findings quickly so you can act — not wait months for a deck you’ll never open." },
  { icon: DollarSign, title: "SMB Pricing", text: "Enterprise-level thinking at pricing built for small business budgets and timelines." },
  { icon: Activity, title: "Focused Scope", text: "Services that work together — operations, projects, customer experience, and process improvement." },
  { icon: Phone, title: "Hands-On Support", text: "You work directly with consultants invested in your success, not just your invoice." },
];

const industries = ["Retail", "Restaurants & Food Service", "Healthcare Clinics", "Salons & Spas", "Hospitality", "Auto Dealerships", "Financial Services", "Professional Services", "Gyms & Fitness"];

const process = [
  { title: "Discovery Call", text: "We learn about your business, pain points, and goals in a free 30-minute consultation." },
  { title: "Audit & Assessment", text: "We evaluate your operations, projects, or customer experience across your chosen service areas." },
  { title: "Findings & Roadmap", text: "You receive a clear, prioritized report with specific, actionable recommendations." },
  { title: "Implementation Partnership (30–90 Days)", text: "We stay on as your partner for a defined 30–90 day support window to help execute changes, track progress, and measure results. Engagement length is customized based on your goals and project scope." },
];

const testimonials = [
  {
    initials: "MR",
    name: "Martha R.",
    role: "Owner, Local Retail Business",
    quote:
      "Clearview came in and identified workflow gaps we’d been overlooking for years. Within 60 days we had cleaner processes and a noticeably more consistent customer experience.",
  },
  {
    initials: "LM",
    name: "Lisa M.",
    role: "Director, Service-Based SMB",
    quote:
      "The project management support alone saved us weeks. Having someone keep stakeholders aligned and milestones on track was exactly what our team needed to finally ship.",
  },
  {
    initials: "DR",
    name: "Donna R.",
    role: "Owner, Hospitality Business",
    quote:
      "The customer experience audit was eye-opening. They walked through our business like a real customer and showed us exactly where we were losing people. Invaluable.",
  },
];

function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <img src={logoSrc} alt="Clearview Operations" className="h-24 w-auto rounded-sm object-contain drop-shadow-x1" />
      <div className="leading-none">
        <div className={`font-serif text-xl font-black tracking-tight ${light ? "text-white" : "text-blue-950"}`}>
          CLEAR<span className="text-blue-500">VIEW</span>
        </div>
        <div className={`-mt-1 font-serif text-lg font-black ${light ? "text-white" : "text-blue-950"}`}>Operations</div>
        <div className="mt-1 max-w-[160px] text-[10px] uppercase leading-tight tracking-[0.12em] text-slate-400">
          A DBA of Aura Global Holdings, LLC
        </div>
      </div>
    </a>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return <p className={`mb-4 text-xs font-black uppercase tracking-[0.35em] ${light ? "text-blue-400" : "text-blue-600"}`}>{children}</p>;
}

export default function ClearviewOperationsHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
        { label: "Who We Serve", href: "#serve" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-800/40 bg-[#071a35]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo light />

          <div className="hidden items-center gap-9 text-xs font-black uppercase tracking-wide text-slate-200 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-400">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-blue-500">
              Free Consultation
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-blue-700/70 text-white transition hover:bg-blue-950 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-blue-800/50 bg-[#071a35] px-4 pb-5 pt-3 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-sm font-black uppercase tracking-wide text-slate-200 transition hover:bg-blue-950 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-black text-white shadow-lg transition hover:bg-blue-500"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden bg-[#071a35] text-white">
        <div className="absolute inset-0">
          <img
            src="/mountains.jpg"
            alt="Mountain background"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04142d]/75 via-[#04142d]/55 to-[#04142d]/35" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-40 md:block">
          <div className="h-full w-full bg-[radial-gradient(circle_at_65%_45%,rgba(96,165,250,0.32),transparent_28%),linear-gradient(90deg,#071a35_0%,rgba(7,26,53,0.72)_45%,rgba(7,26,53,0.25)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Helping Businesses Operate With Clarity
            </motion.div>
            <SectionLabel light>Who We Are</SectionLabel>
            <h1 className="max-w-2xl font-serif text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Operational Clarity <span className="text-blue-400">That Drives Results</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                ["30–90 Days", "Structured implementation support"],
                ["4 Core Services", "Operations, projects, CX, process"],
                ["Built for SMBs", "Practical consulting for growing businesses"],
              ].map(([title, subtitle]) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={title}
                  className="rounded-xl border border-blue-700/50 bg-blue-950/40 px-5 py-4 backdrop-blur"
                >
                  <p className="text-xl font-black text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
              Clearview Operations is a business and management consulting firm built for organizations that are ready to run better. We bring structure, outside perspective, and hands-on expertise to help you close the gap between where you are and where you want to be.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Whether you need a clearer view of your operations, tighter project execution, or more efficient processes — we get in the trenches and do the work alongside you.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-8 border-l border-blue-700/50 pl-8">
            {([
              [Eye, "Clarity Over Complexity", "We strip away the noise and give you a clear picture of what’s actually happening in your business."],
              [Activity, "Results, Not justReports", "Every engagement is designed around measurable outcomes — not justdeliverables that sit on a shelf."],
              [Users, "Partnership Mindset", "We embed ourselves in your work as invested partners — not outside observers passing judgment."],
            ] as const).map(([Icon, title, text], index) => (
              <div key={String(title)} className="flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-blue-700/60 bg-blue-950/70 text-blue-400">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-black text-white">{title}</h3>
                  <p className="mt-2 max-w-sm leading-7 text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mx-auto max-w-5xl font-serif text-4xl font-black tracking-tight text-slate-800 md:text-5xl">
            Signature Services That Drive Clarity and Results
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const OverlayIcon = service.overlayIcon;
            return (
              <motion.article
                whileHover={{ y: -6 }}
                key={service.title}
                className={`relative overflow-hidden rounded-2xl border p-8 shadow-xl transition ${
                  service.featured
                    ? "border-blue-500/70 bg-[#071a35] text-white shadow-blue-500/20"
                    : "border-slate-200 bg-white text-slate-800 shadow-slate-200/80"
                }`}
              >
                {service.featured && (
                  <div className="absolute inset-x-0 bottom-0 h-32 opacity-30">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_100%,rgba(59,130,246,0.4),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(96,165,250,0.35),transparent_35%)]" />
                  </div>
                )}

                <div className="relative grid gap-8 lg:grid-cols-[190px_1fr] lg:items-center">
                  <div>
                    <div className={`font-serif text-5xl font-black ${service.featured ? "text-blue-300/80" : "text-blue-400/70"}`}>
                      {service.number}
                    </div>

                    <div
                      className={`mt-8 flex h-36 w-36 items-center justify-center rounded-full border shadow-2xl ${
                        service.featured
                          ? "border-blue-400/90 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.45),rgba(7,26,53,0.95)_65%)] shadow-blue-500/50"
                          : "border-blue-200 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,1),rgba(239,246,255,1)_70%)] shadow-blue-200/90"
                      }`}
                    >
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/10 before:absolute before:inset-3 before:rounded-full before:border before:border-blue-400/20 before:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-blue-400/10 after:blur-xl after:content-['']">
                        <Icon className={`relative z-10 h-16 w-16 drop-shadow-[0_0_14px_rgba(96,165,250,0.75)] ${service.featured ? "text-blue-100" : "text-blue-600"}`} strokeWidth={1.8} />
                        {OverlayIcon && (
                          <OverlayIcon
                            className="absolute bottom-5 right-4 z-20 h-10 w-10 rotate-[-8deg] text-blue-100 drop-shadow-[0_0_12px_rgba(96,165,250,0.9)]"
                            strokeWidth={2.4}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative border-blue-400/50 lg:border-l lg:pl-8">
                    {service.featured && (
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/70 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-blue-200">
                        <Star className="h-3 w-3 fill-current" /> Signature Service
                      </div>
                    )}

                    <h3 className={`font-serif text-3xl font-black leading-tight ${service.featured ? "text-white" : "text-slate-900"}`}>
                      {service.title}
                    </h3>

                    <p className={`mt-5 max-w-xl leading-7 ${service.featured ? "text-slate-200" : "text-slate-600"}`}>
                      {service.description}
                    </p>

                    <ul className="mt-7 space-y-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={`border-b pb-2 text-sm ${
                            service.featured ? "border-white/10 text-slate-200" : "border-slate-100 text-slate-600"
                          }`}
                        >
                          <span className="mr-3 text-blue-500">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionLabel light>Why Clearview</SectionLabel>
          <h2 className="font-serif text-4xl font-black">Built for Businesses Like Yours</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            We specialize in the real-world challenges that small and customer-facing businesses face — practical consulting, not theoretical frameworks.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid gap-6 md:grid-cols-4"
          >
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-sm border border-blue-800/60 bg-blue-950/20 p-9">
                  <Icon className="h-12 w-12 text-blue-400" />
                  <h3 className="mt-8 font-serif text-xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="serve" className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 className="font-serif text-4xl font-black leading-tight text-slate-700">If Customers Walk Through Your Door, We Can Help</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            We work with small businesses across industries — any organization with a customer-facing component and a desire to operate at a higher level.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <span key={industry} className={`rounded-full border px-5 py-2 text-sm font-semibold ${index === 0 ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white text-slate-700"}`}>{industry}</span>
            ))}
          </div>
        </div>
        <div>
          <SectionLabel>Our Process</SectionLabel>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[64px_1fr] gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-600 font-serif text-xl text-blue-600">{index + 1}</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800">{step.title}</h3>
                  <p className="mt-2 max-w-md leading-7 text-slate-500">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Client Results</SectionLabel>
          <h2 className="font-serif text-4xl font-black text-slate-700">What Our Clients Say</h2>
          <p className="mt-5 text-lg text-slate-500">We're building our portfolio with select founding clients. Real results, real businesses, real feedback.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-sm border border-slate-200 bg-white p-10 shadow-sm">
                <div className="mb-7 flex gap-1 text-amber-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-lg italic leading-8 text-slate-500">“{item.quote}”</p>
                <div className="mt-8 flex items-center gap-5 border-t border-slate-100 pt-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300 font-serif text-blue-500">{item.initials}</div>
                  <div>
                    <p className="font-black text-slate-700">{item.name}</p>
                    <p className="text-sm leading-tight text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section id="contact" className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <SectionLabel light>Get In Touch</SectionLabel>
            <h2 className="font-serif text-4xl font-black leading-tight">Ready to See Your Business Clearly?</h2>
            <p className="mt-7 max-w-sm text-lg leading-8 text-slate-300">
              Start with a free 30-minute consultation. Tell us a little about your business and we'll be in touch within one business day.
            </p>
            <div className="mt-10 space-y-6">
              {([
  [Phone, "Phone", "(501) 243-6171"],
  [Mail, "Email", "info@clearviewops.tech"],
  [Timer, "Response Time", "Within 1 business day"],
] as const).map(([Icon, label, value], index) => (
                <div key={label} className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-blue-700 text-blue-400"><Icon className="h-6 w-6" /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">{label}</p>
                    <p className="font-black text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
  action="https://formspree.io/f/xqejrqol"
  method="POST"
  className="rounded-lg bg-white p-9 text-slate-900 shadow-2xl"
>
   <input
    type="hidden"
    name="_redirect"
    value="https://clearviewops.tech/#contact"
  />
  <h3 className="font-serif text-3xl font-black text-slate-800">
    Request a Free Consultation
  </h3>

  <p className="mt-2 text-slate-500">
    Fill out the form and we'll reach out to schedule your call.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2">

    <label className="text-xs font-black uppercase tracking-widest text-slate-800">
      First Name
      <input
        type="text"
        name="firstName"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="Jane"
      />
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800">
      Last Name
      <input
        type="text"
        name="lastName"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="Smith"
      />
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800 md:col-span-2">
      Business Name
      <input
        type="text"
        name="businessName"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="Smith's Bakery"
      />
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800">
      Email
      <input
        type="email"
        name="email"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="jane@yourbusiness.com"
      />
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800">
      Phone
      <input
        type="tel"
        name="phone"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="(501) 555-0123"
      />
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800 md:col-span-2">
      Service You're Interested In

      <select
        name="service"
        required
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
      >
        <option>Select a service...</option>
        <option>Customer Experience & Service Audits</option>
        <option>Project & Program Management</option>
        <option>Operations Consulting</option>
        <option>Process Improvement</option>
        <option>General Consultation</option>
      </select>
    </label>

    <label className="text-xs font-black uppercase tracking-widest text-slate-800 md:col-span-2">
      Tell Us About Your Business

      <textarea
        name="message"
        required
        className="mt-2 min-h-28 w-full rounded-md border border-slate-300 px-4 py-3 font-normal normal-case tracking-normal"
        placeholder="What challenges are you facing? What would a win look like for you?"
      />
    </label>

  </div>

  <button
    type="submit"
    className="mt-6 w-full rounded-md bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-500"
  >
    Send My Request <ArrowRight className="ml-2 inline h-4 w-4" />
  </button>

</form>
        </div>
      </section>

      <footer className="bg-[#031021] px-6 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <div className="text-center text-sm md:text-left">
            <p>(501) 243-6171</p>
            <p>info@clearviewops.tech</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-xs text-slate-600">© 2026 Aura Global Holdings, LLC. All rights reserved.</div>
      </footer>
    </main>
  );
}
