export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#06131f] px-4 py-10 text-white md:px-6 md:py-24">
      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
        <p className="mb-4 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-300 sm:text-xs sm:tracking-[0.35em]">
          CLEARVIEW OPERATIONS
        </p>

        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-5xl text-emerald-300">
          ✓
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Thank You
        </h1>

        <h2 className="mb-6 text-xl font-semibold text-sky-300 md:text-2xl">
          Your feedback has been received.
        </h2>

        <div className="space-y-5 text-white/70">
          <p>
            We sincerely appreciate you taking the time to share your experience
            with Clearview Operations.
          </p>

          <p>
            Your feedback helps us continue improving our customer experience
            and operational consulting services while helping future businesses
            better understand the value of our work.
          </p>

          <p>
            Any testimonial or business information you submitted will remain
            private unless you provided explicit authorization for publication.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-sky-400/20 bg-sky-400/10 p-5">
          <p className="text-sm leading-7 text-sky-100">
            We appreciate the opportunity to support your business and hope the
            recommendations provided contribute to your continued success.
          </p>
        </div>

        <p className="mt-6 text-center text-white/70 italic">
  We look forward to the opportunity to serve you again.
</p>
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="font-semibold text-white">Mickey Bancie</p>
          <p className="text-sm text-white/60">Founder, Clearview Operations</p>
        </div>
<div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
  <p className="text-center text-sm text-white/60">
    Questions about your report?
  </p>

  <p className="mt-2 text-center">
    <a
      href="mailto:contact@clearviewops.tech"
      className="text-sky-300 hover:text-sky-200"
    >
      contact@clearviewops.tech
    </a>
  </p>
</div>

        <a
          href="/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-base font-semibold text-white transition duration-300 hover:bg-sky-400 md:text-lg"
        >

          Return to Homepage
        </a>
      </section>
    </main>
  );
}