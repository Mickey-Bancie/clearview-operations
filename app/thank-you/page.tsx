import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl">
        <CheckCircle className="mx-auto mb-6 h-14 w-14 text-blue-400" />

        <h1 className="font-serif text-4xl font-black">
          Thank you for reaching out.
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          We received your consultation request and will follow up soon to learn more about your business.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}