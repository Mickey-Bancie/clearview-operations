
export type FieldNote = {
  slug: string;
  number: string;
  category: string;
  location: string;
  title: string;
  summary: string;
  image: string;
  method: string;
  findings: {
    observation: string;
    impact: string;
    recommendation: string;
  };
  takeaway: string;

  strengths: {
  title: string;
  description: string;
}[];

opportunities: {
  title: string;
  description: string;
}[];

recommendations: {
  title: string;
  description: string;
}[];

 sectionTakeaways: {
    strengths: string;
    opportunities: string;
    recommendations: string;
  };

};

export const fieldNotes: FieldNote[] = [
  {
    slug: "florida-coffee-shop",
    number: "001",
    category: "Coffee Shops",
    location: "Florida",
    title: "When the Small Details Shape the Experience",
    
summary:
  "A field observation exploring how welcoming service, product knowledge, and operational details combine to shape the customer experience—and where small improvements can make a meaningful difference.",

    image: "/images/clearview-coffee-shop.png",
    method: "On-site observation",
    findings: {
      observation:
        "A beverage-temperature issue created a gap between the expected and delivered experience.",
      impact:
        "Inconsistent product delivery can reduce customer confidence and affect the likelihood of repeat visits.",
      recommendation:
        "Introduce a simple beverage-quality checkpoint and a clear service-recovery process for drinks that do not meet expectations.",
    },
    
takeaway:
  "A strong customer experience is built on more than great service alone. It requires consistency across every touchpoint—from the initial greeting to product quality and presentation. This observation demonstrates how recognizing existing strengths while addressing small operational gaps can help businesses build trust, improve consistency, and encourage lasting customer relationships.",

   
strengths: [
  {
    title: "Welcoming Service",
    description:
      "A friendly greeting, genuine eye contact, and a patient cashier created a positive first impression and made the experience feel warm and inviting.",
  },
  {
    title: "Product Knowledge",
    description:
      "The cashier demonstrated strong product knowledge, clearly explaining the coffee offerings and helping customers make informed selections.",
  },
  {
    title: "Inviting Environment",
    description:
      "Attractive exterior signage, a welcoming interior, and clean restrooms contributed to a comfortable and well-maintained atmosphere.",
  },
],

opportunities: [
  {
    title: "Beverage Consistency",
    description:
      "Both the drip coffee and chai latte were served at temperatures cooler than expected, creating an opportunity to improve product consistency.",
  },
  {
    title: "Visual Housekeeping",
    description:
      "Dust on a customer-facing merchandise display and discarded items behind the preparation counter detracted from an otherwise well-maintained environment.",
  },
  {
    title: "Packaging Reliability",
    description:
      "The beverage sleeve slipped and tore along its perforations during a routine adjustment, raising concerns about its durability and fit.",
  },
],

recommendations: [
  {
    title: "Standardize Beverage Quality",
    description:
      "Establish serving-temperature checkpoints and a straightforward service-recovery process for beverages that fall short of customer expectations.",
  },
  {
    title: "Strengthen Housekeeping Routines",
    description:
      "Incorporate merchandise-display inspections and behind-counter housekeeping checks into opening and shift-change routines.",
  },
  {
    title: "Evaluate Packaging Durability",
    description:
      "Review sleeve fit, perforation placement, and material durability to reduce the likelihood of tearing during normal handling.",
  },
],


    sectionTakeaways: {
      strengths:
        "A welcoming atmosphere, knowledgeable employees, and thoughtful presentation work together to build customer confidence and encourage repeat visits.",

      opportunities:
        "Even when the overall experience is positive, inconsistencies in product delivery, presentation, and packaging can influence how customers perceive quality.",

      recommendations:
        "Simple, repeatable quality checks and targeted operational improvements can help businesses deliver a more consistent customer experience without requiring major changes.",
    },

    },
];

export function getFieldNote(slug: string) {
  return fieldNotes.find((note) => note.slug === slug);
}
