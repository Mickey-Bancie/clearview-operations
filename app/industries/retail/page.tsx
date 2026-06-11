export default function RetailIndustryPage() {
  return (
    <main className="min-h-screen bg-[#071a35] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
          Retail Operations
        </p>

        <h1 className="mt-4 max-w-3xl font-serif text-5xl font-black leading-tight">
          Helping Retail Businesses Operate With More Clarity
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Clearview Operations helps retail businesses improve customer
          experience, streamline workflows, reduce operational friction, and
          create scalable systems that support long-term growth.
        </p>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Retail business"
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            "Customer Experience Optimization",
            "Workflow & Staffing Improvements",
            "Operational Visibility & Reporting",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}