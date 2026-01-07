import React from 'react';
import type { SectionPricingCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { PricingCard } from '../components/ui/PricingCard';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type PricingProps = {
  copy: SectionPricingCopy;
  theme: ColorTheme;
};

/**
 * Pricing Section
 * Layout: CenteredLayout
 * Alignment: Heading + subtitle CENTER, PricingCards: content LEFT inside each card
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → cards grid block.y.md
 * Grid: 1 col mobile, 2–3 desktop, gaps via grid tokens
 */
export function Pricing({ copy, theme }: PricingProps) {
  const plans = copy.plans && copy.plans.length > 0 ? copy.plans : [
    { name: 'Starter', price: '$29', description: 'Perfect for small teams', features: ['Basic features'], ctaLabel: 'Get Started' },
    { name: 'Professional', price: '$99', description: 'For growing businesses', features: ['Advanced features'], ctaLabel: 'Get Started' },
  ];

  const pricingCards = plans.map((plan, index) => (
    <PricingCard
      key={index}
      title={plan.name}
      price={plan.price}
      body={plan.description}
      features={plan.features}
      ctaLabel={plan.ctaLabel}
      theme={theme}
    />
  ));

  return (
    <section id="pricing" data-section-id="pricing" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-${plans.length === 2 ? '2' : '3'} ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {pricingCards}
        </div>
      </CenteredLayout>
    </section>
  );
}
