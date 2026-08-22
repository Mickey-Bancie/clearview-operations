import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  async function updateTestimonialStatus(
  id: number,
  status: "approved" | "rejected"
) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { error } = await supabase
    .from("testimonials")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.log("Error updating testimonial:", error);
    return;
  }

  revalidatePath("/admin");
}

  const { data: testimonials, error: testimonialsError } = await supabase
  .from("testimonials")
  .select("*")
  .eq("status", "pending")
  .order("created_at", { ascending: false });

  const { count: approvedCount } = await supabase
  .from("testimonials")
  .select("*", { count: "exact", head: true })
  .eq("status", "approved");

const { count: rejectedCount } = await supabase
  .from("testimonials")
  .select("*", { count: "exact", head: true })
  .eq("status", "rejected");

if (testimonialsError) {
  console.log("Testimonials query error:", {
    message: testimonialsError.message,
    details: testimonialsError.details,
    hint: testimonialsError.hint,
    code: testimonialsError.code,
  });
}

  return (
    <main className="min-h-screen bg-[#06131f] px-4 py-10 text-white md:px-6 md:py-16">
      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
          Clearview Operations
        </p>

        <h1 className="mb-3 text-4xl font-bold md:text-5xl">
          Admin Dashboard
        </h1>

        <p className="text-white/60">
          Signed in as {user.email}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">Pending Testimonials</p>
            <p className="mt-2 text-4xl font-bold">
              {testimonials?.length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">Approved Testimonials</p>
            <p className="mt-2 text-4xl font-bold">
              {approvedCount ?? 0}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">Rejected Testimonials</p>
            <p className="mt-2 text-4xl font-bold">
              {rejectedCount ?? 0}
            </p>
          </div>
        </div>
<div className="mt-12">
  <div className="mb-6 flex items-center justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
        Testimonials
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Pending Approval
      </h2>
    </div>

    <div className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
      {testimonials?.length ?? 0} Pending
    </div>
  </div>

  <div className="space-y-5">
    {testimonials && testimonials.length > 0 ? (
      testimonials.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                {item.first_name} {item.last_initial}.
              </h3>

              <p className="mt-1 text-sm text-white/60">
                {item.job_title && `${item.job_title} • `}
                {item.business_name}
              </p>
            </div>

            <div className="text-lg text-amber-300">
              {"★".repeat(item.rating)}
              <span className="text-white/20">
                {"★".repeat(5 - item.rating)}
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-black/20 p-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Testimonial
            </p>

            <p className="mt-2 leading-7 text-white/90">
              “{item.testimonial}”
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full bg-white/5 px-3 py-1 text-white/60">
              Publish: {item.publish_permission ? "Yes" : "No"}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-white/60">
              Business Name: {item.business_name_permission ? "Yes" : "No"}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-white/60">
              Logo: {item.logo_permission ? "Yes" : "No"}
            </span>
          </div>
<div className="mt-6 flex gap-3">
  <form
    action={async () => {
      "use server";
      await updateTestimonialStatus(item.id, "approved");
    }}
  >
    <button
      type="submit"
      className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
    >
      Approve
    </button>
  </form>

  <form
    action={async () => {
      "use server";
      await updateTestimonialStatus(item.id, "rejected");
    }}
  >
    <button
      type="submit"
      className="rounded-xl border border-red-400/40 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20"
    >
      Reject
    </button>
  </form>
</div>

        </div>
      ))
    ) : (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-white/60">
          No testimonials are waiting for approval.
        </p>
      </div>
    )}
  </div>
</div>
        
      </section>
    </main>
  );
}