
"use client";

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { createSupabaseBrowser } from "@/lib/supabase-browser";


const areas = [
  "Operations Consulting",
  "Customer Experience",
  "Project Management",
  "Business Development",
  "Other",
];

export default function CareerInterestForm() {
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [introLength, setIntroLength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [success, setSuccess] = useState("");
const [turnstileToken, setTurnstileToken] = useState("");
const turnstileRef = useRef<React.ElementRef<typeof Turnstile>>(null);

  function handleFile(file?: File) {
    setError("");

    if (!file) {
      setResume(null);
      return;
    }

    if (
      file.type !== "application/pdf" ||
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      setError("Please upload a PDF résumé.");
      setResume(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
  setError("Your résumé must be 5 MB or smaller.");
      setResume(null);
      return;
    }

    setResume(file);
  }



async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  setError("");
  setSuccess("");

  if (!resume) {
    setError("Please select a valid PDF résumé.");
    return;
  }

  if (!turnstileToken) {
    setError("Please complete the security verification.");
    return;
  }

  const formElement = event.currentTarget;
  const formData = new FormData(formElement);

  setIsSubmitting(true);

  try {
    // Step 1: Request a signed upload authorization.
    const authorizationResponse = await fetch(
      "/api/careers/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: resume.name,
          fileSize: resume.size,
          turnstileToken,
        }),
      }
    );

    const authorization = await authorizationResponse.json();

    if (!authorizationResponse.ok) {
      throw new Error(
        authorization.error ||
          "Unable to prepare résumé upload."
      );
    }

    // Step 2: Upload directly to private Supabase Storage.
    const supabase = createSupabaseBrowser();

    const { error: uploadError } = await supabase.storage
      .from("career-resumes")
      .uploadToSignedUrl(
        authorization.resumePath,
        authorization.uploadToken,
        resume,
        {
          contentType: "application/pdf",
          upsert: false,
        }
      );

    if (uploadError) {
      throw new Error(
        "Unable to upload your résumé. Please try again."
      );
    }

    // Step 3: Finalize the application on our server.
    const response = await fetch("/api/careers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        applicationId: authorization.applicationId,
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        area: formData.get("area"),
        introduction: formData.get("introduction"),
        consent: "yes",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || "Unable to submit your information."
      );
    }

    setSuccess(
      "Thank you! Your information has been received successfully."
    );

    formElement.reset();
    setResume(null);
    setIntroLength(0);
  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
    setTurnstileToken("");
    turnstileRef.current?.reset();
  }
}



  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm md:p-9"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          Full Name
          <input
            type="text"
            name="fullName"
            required
            maxLength={120}
            placeholder="Your full name"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700"
          />
        </label>

        <label className="block text-sm font-semibold text-slate-800">
          Email Address
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-slate-800">
        Area of Interest
        <select
          name="area"
          required
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-blue-700"
        >
          <option value="" disabled>
            Select an area
          </option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-semibold text-slate-800">
        Tell Us About Yourself
        <textarea
          name="introduction"
          required
          maxLength={1000}
          rows={5}
           onChange={(event) => setIntroLength(event.target.value.length)}
          placeholder="Tell us about your experience, interests, and what draws you to Clearview."
          className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-700"
        />
      </label>

       <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-500">
  <span>Please keep your introduction concise.</span>
  <span
    className={
      introLength >= 900
        ? "font-semibold text-amber-700"
        : "text-slate-500"
    }
  >
    {introLength.toLocaleString()} / 1,000
  </span>
</div>

      <label className="mt-5 block text-sm font-semibold text-slate-800">
        Upload Résumé
        <span className="mt-1 block text-xs font-normal text-slate-500">
          PDF only · Maximum 5 MB
        </span>
        <input
          type="file"
          name="resume"
          accept=".pdf,application/pdf"
          required
          onChange={(event) => {
  const file = event.target.files?.[0];

  if (!file) {
    setResume(null);
    return;
  }

  const validPDF =
    file.type === "application/pdf" &&
    file.name.toLowerCase().endsWith(".pdf");

  const validSize =
    file.size > 0 && file.size <= 5 * 1024 * 1024;

  if (!validPDF || !validSize) {
    handleFile(file);
    event.target.value = "";
    return;
  }

  handleFile(file);
}}
          className="mt-3 block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm font-normal"
        />
      </label>

      {resume && (
        <p className="mt-2 text-sm text-green-700">
          Selected: {resume.name}
        </p>
      )}

      <label className="mt-6 flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-blue-800"
        />
        <span>
          I understand this is a general expression of interest,
not an application for an advertised vacancy. I consent
to Clearview Operations reviewing my information for
potential future opportunities and retaining my application
and résumé for up to 12 months.
        </span>
      </label>


<div className="mt-6 flex justify-center">
  <Turnstile
  ref={turnstileRef}
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    options={{
      theme: "light",
      size: "normal",
    }}
    onSuccess={(token) => setTurnstileToken(token)}
    onExpire={() => setTurnstileToken("")}
    onError={() => setTurnstileToken("")}
  />
</div>

      {error && (
  <p
    role="alert"
    style={{
      marginTop: "16px",
      color: "#DC2626",
      fontSize: "14px",
      fontWeight: 600,
    }}
  >
    ⚠ {error}
  </p>
)}

{success && (
  <p
    role="status"
    style={{
      marginTop: "16px",
      color: "#15803D",
      fontSize: "14px",
      fontWeight: 600,
    }}
  >
    ✓ {success}
  </p>
)}





<button
  type="submit"
  disabled={isSubmitting || !resume || !turnstileToken}
  style={{
    backgroundColor: "#164B8A",
    color: "#FFFFFF",
    opacity: isSubmitting || !resume || !turnstileToken ? 0.65 : 1,
  }}
  className="mt-7 block w-full rounded-full border border-[#C6A36B] px-6 py-4 text-center text-base font-semibold shadow-md transition hover:brightness-110 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Submitting..." : "Submit Your Interest"}
</button>




      <p className="mt-3 text-center text-xs text-slate-500">
        Your information will be submitted securely and retained for up to 12 months.
      </p>
    </form>
  );
}
