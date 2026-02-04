import React from 'react';
import type { SectionFinalCtaCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { CTAButton } from '../components/ui/CTAButton';
import { CTAGroup } from '../components/ui/CTAGroup';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type FinalCTAProps = {
  copy: SectionFinalCtaCopy;
  theme: ColorTheme;
};

/**
 * Final CTA Section
 * Layout: CenteredLayout
 * Alignment: Text left
 * Section spacing: Top section.y.2xl, Bottom section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → CTAGroup block.y.lg
 */
export function FinalCTA({ copy, theme }: FinalCTAProps) {
  return (
    <section id="final-cta" data-section-id="final-cta" className={`${spacing.section.top['2xl']} ${spacing.section.bottom.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div className={typography.sectionHeader}>
          <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
            {copy.heading}
          </h2>
          {copy.subtitle && (
            <p className={`${typography.body} text-text-secondary ${spacing.block.y.lg}`}>
              {copy.subtitle}
            </p>
          )}
          <CTAGroup align="left" stack="horizontal">
            <CTAButton variant="primary" theme={theme} label={copy.ctaLabel} />
          </CTAGroup>
        </div>
      </CenteredLayout>
    </section>
  );
}
