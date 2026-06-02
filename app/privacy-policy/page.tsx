import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-blue-400">
          Clearview Operations
        </p>

        <h1 className="mt-3 font-serif text-4xl font-black">
          Privacy Policy
        </h1>

        <p className="mt-4 text-slate-300">
          Last updated: June 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-black text-white">Information We Collect</h2>
            <p className="mt-3">
              When you submit a consultation request, we may collect your name, business name, email address, phone number, service interest, and any message you provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">How We Use Your Information</h2>
            <p className="mt-3">
              We use your information to respond to inquiries, schedule consultations, understand your business needs, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Third-Party Services</h2>
            <p className="mt-3">
              Our contact form may use third-party tools such as Formspree and CAPTCHA services to process submissions and reduce spam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Information Sharing</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information only when needed to operate our website, respond to your request, or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Data Security</h2>
            <p className="mt-3">
              We take reasonable steps to protect submitted information, but no online system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Contact Us</h2>
            <p className="mt-3">
              For privacy questions, contact Clearview Operations through the contact form on our website.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block rounded-md bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}