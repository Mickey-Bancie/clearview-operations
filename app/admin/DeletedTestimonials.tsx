"use client";

import { useState } from "react";

type DeletedTestimonial = {
  id: number;
  first_name: string | null;
  last_initial: string | null;
  job_title: string | null;
  business_name: string | null;
  testimonial: string | null;
};

export default function DeletedTestimonials({
  testimonials,
  restoreAction,
  deleteForeverAction,
}: {
  testimonials: DeletedTestimonial[];
  restoreAction: (id: number) => Promise<void>;
  deleteForeverAction: (id: number) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left transition hover:bg-white/10"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Trash
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Deleted Testimonials
          </h2>
        </div>

        <span className="flex items-center gap-2 text-sm font-bold text-white/70">
  {testimonials.length}

  <span
    className={`inline-block transition-transform duration-300 ${
      open ? "rotate-180" : "rotate-0"
    }`}
  >
    ▼
  </span>
</span>
      </button>

      {open && (
        <div className="mt-5 space-y-5">
          {testimonials.length > 0 ? (
            testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {item.first_name} {item.last_initial}.
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {item.job_title && `${item.job_title} • `}
                  {item.business_name}
                </p>

                <div className="mt-5 rounded-xl bg-black/20 p-4">
                  <p className="leading-7 text-white/90">
                    “{item.testimonial}”
                  </p>
                </div>
<div className="mt-5 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={() => restoreAction(item.id)}
    className="rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
  >
    Restore to Withdrawn
  </button>

  <button
    type="button"
    onClick={async () => {
      const confirmed = window.confirm(
        "Permanently delete this testimonial? This cannot be undone."
      );

      if (!confirmed) return;

      await deleteForeverAction(item.id);
    }}
    className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20"
  >
    Delete Forever
  </button>
</div>
</div>
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/60">No deleted testimonials.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}