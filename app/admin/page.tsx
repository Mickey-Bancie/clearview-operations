import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import DeletedTestimonials from "./DeletedTestimonials";

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
  status: "pending" | "approved" | "rejected" | "withdrawn" | "deleted"
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

async function permanentlyDeleteTestimonial(id: number) {
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
    .delete()
    .eq("id", id);

  if (error) {
    console.log("Error permanently deleting testimonial:", error);
    return;
  }

  revalidatePath("/admin");
}


async function signOut() {
  "use server";

  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect("/admin/login");
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

  const { data: approvedTestimonials } = await supabase
  .from("testimonials")
  .select("*")
  .eq("status", "approved")
  .order("created_at", { ascending: false });

const { data: withdrawnTestimonials } = await supabase
  .from("testimonials")
  .select("*")
  .eq("status", "withdrawn")
  .order("created_at", { ascending: false });

  const { data: rejectedTestimonials } = await supabase
  .from("testimonials")
  .select("*")
  .eq("status", "rejected")
  .order("created_at", { ascending: false });

  const { data: deletedTestimonials } = await supabase
  .from("testimonials")
  .select("*")
  .eq("status", "deleted")
  .order("created_at", { ascending: false });

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
  Welcome back, Mickey 👋🏾
</h1>

<p className="text-white/60">
  Admin Dashboard
</p>

<form action={signOut} className="mt-5">
  <button
    type="submit"
    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
  >
    Sign Out
  </button>
</form>

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
<details className="mt-12">
  <summary className="mb-6 flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
  <div>
    <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
      Testimonials
    </p>

    <h2 className="mt-1 text-2xl font-bold text-white">
      Pending Approval
    </h2>
  </div>

  <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
    {testimonials?.length ?? 0} Pending ▼
  </span>
</summary>

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
</details>

<details className="mt-12">
  <summary className="mb-6 flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
  <div>
    <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
      Published
    </p>

    <h2 className="mt-1 text-2xl font-bold text-white">
      Approved Testimonials
    </h2>
  </div>

  <span className="text-sm font-bold text-white/70">
    {approvedTestimonials?.length ?? 0} ▼
  </span>
</summary>

  <div className="space-y-5">
    {approvedTestimonials && approvedTestimonials.length > 0 ? (
      approvedTestimonials.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white">
              {item.first_name} {item.last_initial}.
            </h3>

            <p className="mt-1 text-sm text-white/60">
              {item.job_title && `${item.job_title} • `}
              {item.business_name}
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-black/20 p-4">
            <p className="leading-7 text-white/90">
              “{item.testimonial}”
            </p>
          </div>

          <form
            className="mt-5"
            action={async () => {
              "use server";
              await updateTestimonialStatus(item.id, "withdrawn");
            }}
          >
            <button
              type="submit"
              className="rounded-xl border border-amber-400/40 bg-amber-500/10 px-5 py-3 text-sm font-bold text-amber-300 transition hover:bg-amber-500/20"
            >
              Withdraw / Unpublish
            </button>
          </form>
        </div>
      ))
    ) : (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-white/60">
          No approved testimonials.
        </p>
      </div>
    )}
  </div>
</details>

<details className="mt-12">
  <summary className="mb-6 flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
        Archive
      </p>

      <h2 className="mt-1 text-2xl font-bold text-white">
        Withdrawn Testimonials
      </h2>
    </div>

    <span className="text-sm font-bold text-white/70">
      {withdrawnTestimonials?.length ?? 0} ▼
    </span>
  </summary>

  <div className="space-y-5">
    {withdrawnTestimonials && withdrawnTestimonials.length > 0 ? (
      withdrawnTestimonials.map((item) => (
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

          <form
            className="mt-5"
            action={async () => {
              "use server";
              await updateTestimonialStatus(item.id, "approved");
            }}
          >
            <button
              type="submit"
              className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
            >
              Republish
            </button>
          </form>

<form
  className="mt-3"
  action={async () => {
    "use server";
    await updateTestimonialStatus(item.id, "deleted");
  }}
>
  <button
    type="submit"
    className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20"
  >
    🗑 Delete
  </button>
</form>

        </div>
      ))
    ) : (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-white/60">
          No withdrawn testimonials.
        </p>
      </div>
    )}
  </div>
</details>

<details className="mt-12">
  <summary className="mb-6 flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
        Archive
      </p>

      <h2 className="mt-1 text-2xl font-bold text-white">
        Rejected Testimonials
      </h2>
    </div>

    <span className="text-sm font-bold text-white/70">
      {rejectedTestimonials?.length ?? 0} ▼
    </span>
  </summary>

  <div className="space-y-5">
    {rejectedTestimonials && rejectedTestimonials.length > 0 ? (
      rejectedTestimonials.map((item) => (
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

          <form
            className="mt-5"
            action={async () => {
              "use server";
              await updateTestimonialStatus(item.id, "pending");
            }}
          >
            <button
              type="submit"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Restore to Pending
            </button>
          </form>

<form
  className="mt-3"
  action={async () => {
    "use server";
    await updateTestimonialStatus(item.id, "deleted");
  }}
>
  <button
    type="submit"
    className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20"
  >
    🗑 Delete
  </button>
</form>

        </div>
      ))
    ) : (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-white/60">
          No rejected testimonials.
        </p>
      </div>
    )}
  </div>
</details>

<DeletedTestimonials
  testimonials={deletedTestimonials ?? []}
  restoreAction={async (id: number) => {
    "use server";
    await updateTestimonialStatus(id, "withdrawn");
  }}
  deleteForeverAction={async (id: number) => {
    "use server";
    await permanentlyDeleteTestimonial(id);
  }}
/>

      </section>
    </main>
  );
}