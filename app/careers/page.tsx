
import CareerInterestForm from "@/components/careers/CareerInterestForm";
import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Operations Consulting",
    description:
      "Help organizations improve processes, strengthen execution, and operate more effectively.",
  },
  {
    number: "02",
    title: "Customer Experience",
    description:
      "Identify opportunities to create more consistent, thoughtful, and memorable customer journeys.",
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "Support initiatives through planning, coordination, communication, and disciplined delivery.",
  },
  {
    number: "04",
    title: "Business Development",
    description:
      "Build meaningful relationships and explore opportunities that help businesses grow.",
  },
];

export const metadata = {
  title: "Careers | Clearview Operations",
  description:
    "Explore future opportunities and connect with Clearview Operations.",
};

export default function CareersPage() {
  return (
    <main style={{ backgroundColor: "#F8FAFC", color: "#0F172A" }}>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#081A30",
          color: "#FFFFFF",
          padding: "88px 24px",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <p
            style={{
              color: "#D5B47A",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              marginBottom: "24px",
            }}
          >
            CAREERS AT CLEARVIEW
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 750,
              lineHeight: 1.12,
              maxWidth: "800px",
            }}
          >
            Build What's Next
            <br />
            With Clearview.
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "650px",
              color: "#DCE6F0",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            Great operations start with great people. We're
            interested in connecting with thoughtful professionals
            who believe better businesses are built through
            stronger processes, meaningful experiences, and
            purposeful execution.
          </p>

          <a
            href="#connect"
            style={{
              display: "inline-flex",
              marginTop: "32px",
              padding: "14px 28px",
              borderRadius: "9999px",
              backgroundColor: "#164B8A",
              border: "1px solid #C6A36B",
              color: "#FFFFFF",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Join Our Network →
          </a>
        </div>
      </section>

      {/* EXPERTISE AREAS */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <p
            style={{
              color: "#164B8A",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            AREAS OF INTEREST
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 750,
              marginTop: "12px",
              marginBottom: "28px",
              color: "#081A30",
            }}
          >
            Where Your Expertise Could Make an Impact
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {areas.map((area) => (
              <article
                key={area.number}
                style={{
                  padding: "28px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "18px",
                  boxShadow: "0 6px 22px rgba(8,26,48,0.04)",
                }}
              >
                <p
                  style={{
                    color: "#C6A36B",
                    fontSize: "20px",
                    fontWeight: 800,
                  }}
                >
                  {area.number}
                </p>

                <h3
                  style={{
                    color: "#164B8A",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginTop: "12px",
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    marginTop: "12px",
                    color: "#475569",
                    lineHeight: 1.7,
                  }}
                >
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TALENT NETWORK */}
      <section
        id="connect"
        style={{
          padding: "64px 24px",
          backgroundColor: "#EAF0F6",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#164B8A",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            JOIN OUR NETWORK
          </p>

          <h2
            style={{
              marginTop: "14px",
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 750,
              color: "#081A30",
            }}
          >
            Let's Stay Connected.
          </h2>

          <p
            style={{
              marginTop: "18px",
              color: "#475569",
              lineHeight: 1.8,
            }}
          >
            We're not currently advertising open positions,
            but we welcome expressions of interest from
            professionals who may be interested in future
            opportunities with Clearview Operations.
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#64748B",
              lineHeight: 1.7,
            }}
          >
            Submitting your information does not guarantee
            employment, an interview, or a response.
          </p>

          <CareerInterestForm />
        </div>
      </section>
    </main>
  );
}
