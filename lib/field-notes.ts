
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


  {
    slug: "northwest-arkansas-restaurant",
    number: "002",
    category: "Restaurants",
    location: "NWA",
    title: "When One Experience Puts Customer Loyalty at Risk",
    summary:
      "An independent restaurant observation examining how service consistency, order accuracy, and recovery influence repeat business and customer advocacy.",
    image: "/images/clearview-restaurant.png",
    method: "On-site observation",
    findings: {
      observation:
        "A restaurant with a history of positive customer experiences delivered an inconsistent visit involving delayed food, cold sides, order inaccuracies, and limited proactive table attention.",
      impact:
        "When loyal customers introduce friends to a business, an inconsistent experience can place both repeat visits and future referrals at risk.",
      recommendation:
        "Introduce service-recovery triggers, review order accuracy and food-temperature checkpoints, and strengthen proactive table monitoring.",
    },
    takeaway:
      "Great restaurants build loyalty through consistent experiences and protect it through effective recovery when things go wrong.",
    strengths: [
      {
        title: "Established Customer Loyalty",
        description:
          "Previous visits generated repeat business, enthusiastic recommendations, and introductions to new customers.",
      },
      {
        title: "Strong Food and Hospitality Foundation",
        description:
          "Earlier experiences featured welcoming service, fresh and flavorful food, generous portions, and an inviting atmosphere.",
      },
      {
        title: "Satisfactory Initial Beverage Service",
        description:
          "During the observed visit, the initial greeting and beverage service were satisfactory, demonstrating that the experience began on a positive note.",
      },
    ],
    opportunities: [
      {
        title: "Food Timing and Temperature",
        description:
          "The appetizer took approximately 30 minutes to arrive, and both the appetizer and fries accompanying multiple entrees were served cold.",
      },
      {
        title: "Order Accuracy",
        description:
          "Incorrect cheese, an unwanted bacon ingredient, and sandwiches delivered to the wrong guests created multiple accuracy concerns.",
      },
      {
        title: "Table Monitoring and Service Recovery",
        description:
          "One guest waited approximately 20 minutes for a water refill, while multiple service issues accumulated without noticeable recovery.",
      },
    ],
    recommendations: [
      {
        title: "Establish Service-Recovery Triggers",
        description:
          "Create clear escalation guidelines for significant delays, repeated order errors, remade meals, and multiple concerns at the same table.",
      },
      {
        title: "Strengthen Order and Food-Quality Verification",
        description:
          "Review the full order-to-delivery workflow, including modifier confirmation, kitchen communication, table verification, and food-temperature checks.",
      },
      {
        title: "Improve Proactive Table Monitoring",
        description:
          "Introduce practical beverage-refill, food-quality, and guest-satisfaction checkpoints to identify concerns before they compound.",
      },
    ],
    sectionTakeaways: {
      strengths:
        "A history of welcoming service, quality food, and positive experiences can turn satisfied customers into loyal advocates.",
      opportunities:
        "When delays, temperature issues, and order inaccuracies occur together, even established customer relationships can be put at risk.",
      recommendations:
        "Consistent verification, proactive guest attention, and timely service recovery help protect customer loyalty and word-of-mouth referrals.",
    },
  },


];

export function getFieldNote(slug: string) {
  return fieldNotes.find((note) => note.slug === slug);
}
