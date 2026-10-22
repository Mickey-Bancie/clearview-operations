export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#06131f] px-4 py-5 text-white md:px-6 md:py-24">
      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
        <div className="mb-4 flex items-center justify-between gap-4">
  <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
    CLEARVIEW OPERATIONS
  </p>

  <div
  className="mr-32 flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
  style={{
    color: "#34d399",
    border: "1px solid rgba(16, 185, 129, 0.4)",
    backgroundColor: "rgba(16, 185, 129, 0.1)",
  }}
>
  <span className="text-4xl">✓</span>
</div>
</div>

        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          Thank You
        </h1>

        <h2 className="mb-3 text-xl font-semibold text-sky-300 md:text-2xl">
          Your feedback has been received.
        </h2>



        <div className="mt-4 rounded-xl border border-sky-400/20 bg-sky-400/10 p-4">
          <p className="text-sm leading-7 text-sky-100">
            We appreciate the opportunity to support your business and hope the
            recommendations provided contribute to your continued success.
          </p>
        </div>

        <p className="mt-3 text-center text-white/70 italic">
  We look forward to the opportunity to serve you again.
</p>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="font-semibold text-white">Mickey Bancie</p>
          <p className="text-sm text-white/60">Founder, Clearview Operations</p>
        </div>
<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
  <p className="text-center text-sm text-white/60">
    Have a question or need anything else?
  </p>

  <p className="mt-1 text-center">
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
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-base font-semibold text-white transition duration-300 hover:bg-sky-400 md:text-lg"
        >

          Return to Homepage
        </a>
      </section>
    </main>
  );
}