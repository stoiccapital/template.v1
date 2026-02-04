export type SectionHeroCopy = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
};

export type SectionSocialProofCopy = {
  label?: string;
};

export type SectionValuePropsCopy = {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionFeaturesCopy = {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: {
    eyebrow?: string;
    title: string;
    body: string;
  }[];
};

export type BillingMode = 'monthly' | 'yearly';

export type PricingPlanCopy = {
  id: string;
  title: string;
  body: string;
  billing: {
    monthly: {
      price: string;
      detail: string;
      subPrice?: string;
    };
    yearly: {
      price: string;
      detail: string;
      subPrice?: string;
    };
  };
  features: string[];
  singleUser: {
    monthly: string;
    yearly: string;
  };
  ctaLabel: string;
  isPopular?: boolean;
};

export type SectionPricingCopy = {
  heading: string;
  subtitle: string;
  helper?: string;
  singleUserLabel?: string;
  singleUserTitle?: string;
  billingToggle?: {
    label: string;
    monthly: string;
    yearly: string;
    yearlyBadge?: string;
  };
  singleUserLabels?: {
    monthly: string;
    yearly: string;
  };
  footerNote?: string;
  // Pricing content contract:
  // - body should be one short sentence (max ~60–80 chars)
  // - features should ideally have exactly 4 items
  // - each feature = verb + object (no multi-sentence bullets)
  // - teamPrice formatted as "€XXX / month" or "XXX € / Monat"
  // - singleUser.monthly/yearly follow the same pattern across plans
  plans: PricingPlanCopy[];
};

export type SectionFAQCopy = {
  heading: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type SectionFinalCtaCopy = {
  heading: string;
  subtitle: string;
  ctaLabel: string;
};

export type SectionTestimonialsCopy = {
  heading: string;
  subtitle: string;
  usedModulesLabel?: string;
  googleReviews?: {
    url?: string;
    text?: string;
    stars?: string;
    ariaLabel?: string;
  };
  navigation?: {
    previous?: string;
    next?: string;
  };
  labels?: {
    customer: string;
    outcome: string;
    description: string;
  };
  testimonials: {
    customer: string;
    outcome: string;
    description: string;
    outcomes?: {
      value: string;
      label: string;
    }[];
    modules?: string[];
  }[];
};

export type SectionDeepDiveCopy = {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  steps: {
    title: string;
    body: string;
  }[];
};

export type SectionUseCasesCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionIntegrationsCopy = {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  integrations: {
    name: string;
  }[];
};

export type SectionSecurityCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionMetricsCopy = {
  heading: string;
  subtitle: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
};

export type PageCopyConfig = {
  hero: SectionHeroCopy;
  socialProof: SectionSocialProofCopy;
  valueProps: SectionValuePropsCopy;
  features: SectionFeaturesCopy;
  deepDive?: SectionDeepDiveCopy;
  useCases?: SectionUseCasesCopy;
  integrations?: SectionIntegrationsCopy;
  security?: SectionSecurityCopy;
  metrics?: SectionMetricsCopy;
  testimonials?: SectionTestimonialsCopy;
  pricing?: SectionPricingCopy;
  faq?: SectionFAQCopy;
  finalCta: SectionFinalCtaCopy;
};

