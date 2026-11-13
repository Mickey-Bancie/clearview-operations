
import Image from "next/image";
import Link from "next/link";
import type { FieldNote } from "@/lib/field-notes";

export default function FieldNotePage({
  note,
}: {
  note: FieldNote;
}) {
  

const sections = [
  {
    number: "01",
    label: "What Worked",
    items: note.strengths,
    takeaway: note.sectionTakeaways.strengths,
  },
  {
    number: "02",
    label: "Opportunities for Improvement",
    items: note.opportunities,
    takeaway: note.sectionTakeaways.opportunities,
  },
  {
    number: "03",
    label: "Clearview Recommendations",
    items: note.recommendations,
    takeaway: note.sectionTakeaways.recommendations,
  },
];



  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section
  className="text-white"
  style={{ backgroundColor: "#081a30" }}
>
        <div
  className="mx-auto max-w-6xl px-6"
  style={{
    paddingTop: "36px",
    paddingBottom: "28px",
  }}
>
          <Link
            href="/our-approach"
            className="text-sm text-[#d5b47a] hover:underline"
          >
            ← Back to Our Approach
          </Link>

          <p
  className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b47a]"
  style={{ marginTop: "28px" }}
>
            From the Field / Note {note.number}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {note.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {note.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-xs">
            {[note.category, note.location, note.method].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 px-4 py-2 text-slate-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        
<div
  className="relative w-full overflow-hidden"
  style={{
    position: "relative",
    height: "clamp(240px, 38vw, 480px)",
    width: "100%",
  }}
>
  <Image
    src={note.image}
    alt={`${note.category} field observation`}
    fill
    priority
    sizes="100vw"
    style={{
      objectFit: "cover",
      objectPosition: "center",
    }}
  />

  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(8,26,48,0.55), transparent)",
    }}
  />
</div>

      </section>

      <section
  className="mx-auto max-w-4xl px-6"
  style={{
    paddingTop: "64px",
    paddingBottom: "48px",
  }}
>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Field Analysis
        </p>
        <h2
  className="mt-3 text-3xl font-semibold md:text-4xl"
  style={{ color: "#081A30" }}
>
          Strengths. Opportunities. Recommendations.
        </h2>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <article
  key={section.number}
  className="rounded-2xl border border-slate-200 bg-white shadow-sm"
  style={{
    padding: "28px",
    borderRadius: "18px",
  }}
>
              <div className="flex items-start gap-5">
                <span
  className="text-xl font-semibold"
  style={{ color: "#C6A36B" }}
>
  {section.number}
</span>
                <div>
                  
<h3
  className="text-xl font-semibold"
  style={{ color: "#164B8A" }}
>
  {section.label}
</h3>

                  
<div style={{ marginTop: "20px" }}>
  {section.items.map((item, index) => (
    <div
      key={item.title}
      style={{
        marginBottom:
          index === section.items.length - 1 ? "0" : "24px",
      }}
    >
      <h4
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#081A30",
          marginBottom: "8px",
        }}
      >
        {index + 1}. {item.title}
      </h4>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.75",
          color: "#475569",
        }}
      >
        {item.description}
      </p>
    </div>
  ))}
</div>



<div
  style={{
    marginTop: "18px",
    padding: "10px 14px",
    backgroundColor: "#EAF0F6",
    borderLeft: "3px solid #C6A36B",
    borderRadius: "0 8px 8px 0",
  }}
>

  <p
   
style={{
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  color: "#164B8A",
  marginBottom: "4px",
}}

  >
    KEY TAKEAWAY
  </p>

  <p
    style={{
      fontSize: "14px",
      fontStyle: "italic",
      lineHeight: "1.7",
      color: "#475569",
    }}
  >
    {section.takeaway}
  </p>
</div>


                </div>
              </div>
            </article>
          ))}
        </div>

        
<div
  style={{
    marginTop: "28px",
    padding: "24px",
    backgroundColor: "#EAF0F6",
    borderLeft: "4px solid #C6A36B",
    borderRadius: "0 14px 14px 0",
  }}
>

          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            The Clearview Perspective
          </p>
          <p className="mt-4 text-xl font-medium leading-relaxed">
            {note.takeaway}
          </p>
        </div>

 {/*}       <p className="mt-4 text-sm leading-6 text-slate-500">
          This Field Note reflects an independent observation
          and professional analysis. It does not represent a
          commissioned engagement, endorsement, or verified
          implementation of the recommendations.
        </p> */}
      </section>

<section
  className="px-6 py-16 text-center text-white"
  style={{ backgroundColor: "#081a30" }}
>
        <h2 className="text-3xl font-semibold">
          What might your customers be noticing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Clearview helps businesses uncover operational
          blind spots and turn observations into action.
        </p>
        
<Link
  href="/#contact"
  className="inline-flex items-center justify-center rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
  style={{
    marginTop: "28px",
    padding: "15px 32px",
    backgroundColor: "#164B8A",
    border: "1px solid #D5B47A",
    borderRadius: "9999px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    display: "inline-flex",
    gap: "12px",
    textDecoration: "none",
  }}
>
  Start a Conversation
  <span aria-hidden="true">→</span>
</Link>

      </section>
    </main>
  );
}
