'use client';
import React, { useState } from 'react';
import type { SectionPricingCopy, PricingPlanCopy, BillingMode } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { PricingCard } from '../components/ui/PricingCard';
import { spacing, typography, globalBackground, ColorTheme, components } from '../config/design-system';

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
  const [billingMode, setBillingMode] = useState<BillingMode>('monthly');
  const plans: PricingPlanCopy[] = copy.plans && copy.plans.length > 0 ? copy.plans : [];
  const toggleBaseClass = `inline-flex items-center gap-2 px-4 py-1.5 ${components.button.radius} ${typography.label} font-normal focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus`;

  const pricingCards = plans.map((plan, index) => {
    const activeBilling = plan.billing[billingMode];
    return (
    <PricingCard
      key={index}
      title={plan.title}
      body={plan.body}
      features={plan.features}
      teamPrice={activeBilling.price}
      teamPriceSub={activeBilling.subPrice}
      teamPriceDetail={activeBilling.detail}
      singleUserMonthly={plan.singleUser.monthly}
      singleUserYearly={plan.singleUser.yearly}
      billingMode={billingMode}
      singleUserLabel={copy.singleUserLabel}
      singleUserModeLabel={
        billingMode === 'yearly'
          ? copy.singleUserLabels?.yearly
          : copy.singleUserLabels?.monthly
      }
      ctaLabel={plan.ctaLabel}
      theme={theme}
      isHighlighted={plan.isPopular}
    />
    );
  });

  return (
    <section id="pricing" data-section-id="pricing" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div className={`${typography.sectionHeader} ${spacing.block.y.lg}`}>
          <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
            {copy.heading}
          </h2>
          <p className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
            {copy.subtitle}
          </p>
          {copy.helper && (
            <p className={`${typography.textXs} text-text-muted`}>
              {copy.helper}
            </p>
          )}
        </div>
        {copy.billingToggle && (
          <div className={`flex items-center justify-start ${spacing.block.y.sm}`}>
            <div className="flex flex-col items-start">
              <span className={`${typography.textXs} text-text-muted ${spacing.element.y.xs}`}>
                {copy.billingToggle.label}
              </span>
              <div className={`inline-flex items-center ${components.button.radius} border border-border-subtle bg-bg-neutral`}>
                <button
                  type="button"
                  onClick={() => setBillingMode('monthly')}
                  aria-pressed={billingMode === 'monthly'}
                className={
                  billingMode === 'monthly'
                    ? `${toggleBaseClass} bg-cta-bg text-cta-text`
                    : `${toggleBaseClass} border border-border-subtle bg-bg-default text-text-muted hover:bg-bg-neutral`
                }
                >
                  {copy.billingToggle.monthly}
                </button>
                <button
                  type="button"
                  onClick={() => setBillingMode('yearly')}
                  aria-pressed={billingMode === 'yearly'}
                className={
                  billingMode === 'yearly'
                    ? `${toggleBaseClass} bg-cta-bg text-cta-text`
                    : `${toggleBaseClass} border border-border-subtle bg-bg-default text-text-muted hover:bg-bg-neutral`
                }
                >
                  <span className="inline-flex items-center gap-2">
                    {copy.billingToggle.yearly}
                    {copy.billingToggle.yearlyBadge && (
                    <span className={`${typography.textXs} text-text-muted bg-bg-default border border-border-subtle rounded-full px-2 py-0.5`}>
                        {copy.billingToggle.yearlyBadge}
                      </span>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={`grid grid-cols-1 ${plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {pricingCards}
        </div>
        {copy.footerNote && (
          <p className={`${typography.textXs} text-text-muted ${spacing.block.y.md}`}>
            {copy.footerNote}
          </p>
        )}
      </CenteredLayout>
    </section>
  );
}
