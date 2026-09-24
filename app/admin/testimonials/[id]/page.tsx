import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import EditableTestimonial from "./EditableTestimonial";

export default async function TestimonialReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonialId = Number(id);

  if (!Number.isInteger(testimonialId)) {
    notFound();
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: testimonial, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", testimonialId)
    .single();

  if (error || !testimonial) {
    notFound();
  }

  async function saveEditedTestimonial(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/admin/login");
    }

    const editedTestimonial = String(
      formData.get("editedTestimonial") ?? ""
    ).trim();

    if (!testimonial.edit_permission) {
      return;
    }

    const { error } = await supabase
      .from("testimonials")
      .update({
        edited_testimonial: editedTestimonial || null,
      })
      .eq("id", testimonialId);

    if (error) {
      console.error("Error saving edited testimonial:", error);
      return;
    }

    revalidatePath(`/admin/testimonials/${testimonialId}`);
    revalidatePath("/admin");
  }

  async function enableEditing() {
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
    .update({ edit_permission: true })
    .eq("id", testimonialId);

  if (error) {
    console.error("Error enabling testimonial editing:", error);
    return;
  }

  revalidatePath(`/admin/testimonials/${testimonialId}`);
  revalidatePath("/admin");
}

  async function publishTestimonial() {
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
      .update({ status: "approved" })
      .eq("id", testimonialId);

    if (error) {
      console.error("Error publishing testimonial:", error);
      return;
    }

    revalidatePath("/admin");
    revalidatePath("/");
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin"
          className="text-sm font-bold text-sky-400 transition hover:text-sky-300"
        >
          ← Back to Admin
        </Link>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">
              Testimonial Review
            </p>

            <h1 className="text-3xl font-black">
              {testimonial.first_name}{" "}
{testimonial.last_initial?.length === 1
  ? `${testimonial.last_initial}.`
  : testimonial.last_initial}
            </h1>

            <p className="text-slate-400">
              {testimonial.job_title || "No title"}
              {testimonial.business_name
                ? ` • ${testimonial.business_name}`
                : ""}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              Original Testimonial
            </p>

            <div className="mt-3 rounded-2xl bg-slate-900 p-5 leading-7 text-slate-200">
              “{testimonial.testimonial}”
            </div>
          </div>

{(testimonial.feedback || testimonial.improvement_feedback) && (
  <div className="mt-6 space-y-4">
    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
      Feedback for Clearview Operations
    </p>

    {testimonial.feedback && (
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          What did you find most valuable, and did any recommendation stand out?
        </p>
        <p className="leading-7 text-slate-200">
          {testimonial.feedback}
        </p>
      </div>
    )}

    {testimonial.improvement_feedback && (
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          Is there anything Clearview Operations could have done better?
        </p>
        <p className="leading-7 text-slate-200">
          {testimonial.improvement_feedback}
        </p>
      </div>
    )}
  </div>
)}

          <div className="mt-6 rounded-2xl border border-white/10 p-4">
            <p
              className={`font-bold ${
                testimonial.edit_permission
                  ? "text-emerald-400"
                  : "text-amber-300"
              }`}
            >
              {testimonial.edit_permission
                ? "✓ Editing authorized"
                : "Editing not authorized"}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {testimonial.edit_permission
                ? "Minor grammar, spelling, and clarity edits are permitted without changing the meaning."
                : "Publish this testimonial using the customer's original wording."}
            </p>
            
{!testimonial.edit_permission && (
  <form action={enableEditing} className="mt-4">
    <button
      type="submit"
      className="rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300 transition hover:bg-amber-400/20"
    >
      Enable Editing
    </button>

    <p className="mt-2 text-xs text-slate-500">
      Only enable after receiving permission from the customer.
    </p>
  </form>
)}

          </div>
<EditableTestimonial
  initialValue={testimonial.edited_testimonial ?? testimonial.testimonial}
  editPermission={testimonial.edit_permission}
  saveAction={saveEditedTestimonial}
/>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-slate-300">
                Status: {testimonial.status.toUpperCase()}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Saving edits does not publish this testimonial.
              </p>
            </div>

            <form action={publishTestimonial}>
              <button
                type="submit"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-400"
              >
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}