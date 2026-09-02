"use client";

import { useState } from "react";

import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {

    const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setError("");
  setIsLoading(true);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setError("Invalid email or password.");
    setIsLoading(false);
    return;
  }

  window.location.href = "/admin";
};
  

  return (
    <main className="min-h-screen bg-[#06131f] flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Clearview Operations
        </p>

        <h1 className="mb-8 text-4xl font-bold text-white">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Password
            </label>

            <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 pr-12 outline-none"
  />

  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-white"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
</div>
          </div>

          {error && (
  <div
    role="alert"
    className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200"
  >
    {error}
  </div>
)}

          <button
  type="submit"
  disabled={isLoading}
  className="w-full rounded-xl bg-sky-500 py-4 font-semibold transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isLoading ? "Signing In..." : "Sign In"}
</button>

        </form>

      </section>
    </main>
  );
}