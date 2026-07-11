"use client";

import { useState } from "react";

export default function TestimonialPage() {
    const [rating, setRating] = useState(0);
  return (
    <main className="min-h-screen bg-[#06131f] px-6 py-24 text-white">
      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
          Clearview Operations
        </p>

        <p className="mb-4 text-2xl">
        ⭐⭐⭐⭐⭐
       </p>

       <h2 className="mb-1 text-3xl font-semibold text-sky-300">
        We Appreciate Your Feedback
       </h2>

        <h1 className="mb-8 text-5xl font-bold tracking-tight">  
          Share Your Experience
        </h1>

        <p className="mb-8 text-white/75">
          Thank you for taking the time to review your complimentary Customer
          Experience & Operations Observation Report. If you found the report
          valuable, your feedback helps us continue improving our services and
          helps future clients understand the value of our work.
        </p>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Business or Organization Name *
            </label>
            <input
            autoFocus
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>

{/* Contact Information */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">
                First Name *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
              />
            </div>

            <div className="md:w-24">
              <label className="mb-2 block text-center text-sm font-medium">
                Last Initial *
              </label>
              <input
                type="text"
                maxLength={1}
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Job Title / Position
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address (Optional)
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>
          {/* Overall Experience */}
        <div className="border-t border-white/10 pt-10">
  <h2 className="mb-6 text-2xl font-semibold text-white">
    Overall Experience
  </h2>
  <div>
    
    <label className="mb-3 block text-sm font-medium">
      How valuable was the report? *
    </label>

    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          aria-label={`Rate ${star} out of 5 stars`}
          className={`text-4xl transition duration-200 hover:scale-110 ${
            star <= rating ? "text-yellow-400" : "text-white/25"
          }`}
        >
          ★
        </button>
      ))}
    </div>

   <p className="mt-3 text-sm font-medium">
  {rating === 0 && (
    <span className="text-white/50">
      Select a rating from 1 to 5 stars.
    </span>
  )}

  {rating === 1 && (
    <span className="text-red-400">
      ★☆☆☆☆ &nbsp;Needs Improvement
    </span>
  )}

  {rating === 2 && (
    <span className="text-orange-400">
      ★★☆☆☆ &nbsp;Fair
    </span>
  )}

  {rating === 3 && (
    <span className="text-yellow-400">
      ★★★☆☆ &nbsp;Good
    </span>
  )}

  {rating === 4 && (
    <span className="text-lime-400">
      ★★★★☆ &nbsp;Very Good
    </span>
  )}

  {rating === 5 && (
    <span className="text-green-400">
      ★★★★★ &nbsp;Outstanding
    </span>
  )}
</p>

    <input type="hidden" name="rating" value={rating} />
  </div>
</div>

{/* Report Feedback */}

<div className="border-t border-white/10 pt-10">
  <h2 className="mb-6 text-2xl font-semibold text-white">
    Your Feedback
  </h2>
  </div>


  
    <div>
      <label
        htmlFor="standoutRecommendation"
        className="mb-2 block text-sm font-medium"
      >
        What did you find most valuable, and did any recommendation stand out?
      </label>

      <textarea
        id="standoutRecommendation"
        name="standoutRecommendation"
        rows={5}
        placeholder="Tell us about any recommendation that felt especially relevant or actionable."
        className="w-full resize-y rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-sky-400"
      />
    </div>


{/* Share Your Testimonial */}

<div className="border-t border-white/10 pt-10">
  <h2 className="mb-2 text-2xl font-semibold text-white">
    Share Your Testimonial
  </h2>

  <p className="mb-6 max-w-2xl text-white/60">
    Your testimonial helps us continue improving while allowing future
    clients to better understand the value of our customer experience and
    operational consulting services.
  </p>

  <div>
    <label
      htmlFor="testimonial"
      className="mb-2 block text-sm font-medium"
    >
      Please share your experience working with Clearview Operations. *
    </label>

    <textarea
      id="testimonial"
      name="testimonial"
      required
      rows={8}
      placeholder="Example: The report was professional, balanced, and provided several actionable recommendations that our team found valuable..."
      className="w-full resize-y rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-sky-400"
    />
  </div>
</div>
{/* Permissions */}

<div className="border-t border-white/10 pt-10">
  <h2 className="mb-2 text-2xl font-semibold text-white">
    Permissions
  </h2>

  <p className="mb-6 max-w-2xl text-white/60">
    Please let us know how you would like us to use your testimonial. Your
    preferences will always be respected.

  </p>

  <p className="mb-6 max-w-2xl text-sky-200">
  Your testimonial and business information will never be published
  without your explicit authorization.
</p>

  <div className="space-y-5">

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="publishTestimonial"
        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 accent-sky-400"
      />
      <span className="text-white/80">
        I authorize Clearview Ops to publish my testimonial on its
        website, social media, and other marketing
        materials.
      </span>
    </label>

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="displayBusiness"
        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 accent-sky-400"
      />
      <span className="text-white/80">
        I authorize Clearview Ops to display my business
        name alongside my testimonial.
      </span>
    </label>

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="displayLogo"
        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 accent-sky-400"
      />
      <span className="text-white/80">
        I authorize Clearview Ops to display my logo alongside
        my testimonial.
      </span>
    </label>

  </div>
</div>

{/* Future Opportunities */}

<div className="border-t border-white/10 pt-10">
  <h2 className="mb-2 text-2xl font-semibold text-white">
    Future Opportunities
  </h2>

  <p className="mb-6 max-w-2xl text-white/60">
    We value long-term relationships. If you're open to future conversations,
    please let us know below.
  </p>

  {/* Future Consulting */}

  <div className="mb-8">
    <label className="mb-4 block text-sm font-medium">
      Would you be interested in learning more about future consulting services?
    </label>

    <div className="space-y-3">

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="futureConsulting"
          value="Yes"
          className="h-4 w-4 accent-sky-400"
        />
        <span>Yes</span>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="futureConsulting"
          value="Maybe"
          className="h-4 w-4 accent-sky-400"
        />
        <span>Maybe</span>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="futureConsulting"
          value="Not at this time"
          className="h-4 w-4 accent-sky-400"
        />
        <span>Not at this time</span>
      </label>

    </div>
  </div>

  {/* Follow Up */}

  <div>
    <label className="mb-4 block text-sm font-medium">
      May we contact you in the future to learn whether any recommendations from
      your report were implemented?
    </label>

    <div className="space-y-3">

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="followUp"
          value="Yes"
          className="h-4 w-4 accent-sky-400"
        />
        <span>Yes</span>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="followUp"
          value="Maybe"
          className="h-4 w-4 accent-sky-400"
        />
        <span>Maybe</span>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="followUp"
          value="No"
          className="h-4 w-4 accent-sky-400"
        />
        <span>No</span>
      </label>

    </div>
  </div>
</div>

{/* Privacy & Submit */}

<div className="border-t border-white/10 pt-10">

  <h2 className="mb-2 text-2xl font-semibold text-white">
  Privacy & Confidentiality
</h2>

  <p className="mb-6 max-w-2xl text-white/60">
</p>

  <div className="rounded-xl border border-sky-400/20 bg-sky-400/10 p-5">
    <p className="text-sm leading-7 text-sky-100">
      We value your privacy. Your responses will be reviewed by
      Clearview Operations and will never be published or shared without
      your explicit authorization. Thank you for taking the time to
      support our continued commitment to customer experience and
      operational excellence.
    </p>
  </div>

<p className="mt-10 text-center text-lg font-medium text-white/80 italic">
  "Your feedback today helps us deliver even greater value to future businesses."
</p>

  <button
    type="submit"
    className="mt-8 w-full rounded-xl bg-sky-500 px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
  >
    Submit Feedback
  </button>

</div>

</form>
      </section>
    </main>
  );
}