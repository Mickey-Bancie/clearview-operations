import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
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
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">Approved Testimonials</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">Rejected Testimonials</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
        </div>
      </section>
    </main>
  );
}