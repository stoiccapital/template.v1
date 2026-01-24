import React from 'react';
import type { SectionSocialProofCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { LogoGrid } from '../components/ui/LogoGrid';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type SocialProofProps = {
  copy: SectionSocialProofCopy;
  theme: ColorTheme;
};

/**
 * Social Proof Section
 * Layout: CenteredLayout
 * Alignment: Heading + subtitle CENTER, Logos centered via LogoGrid
 * Section spacing: Top section.y.xl, Bottom section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → LogoGrid block.y.lg
 */
export function SocialProof({ copy, theme }: SocialProofProps) {
  const logos = Array.from({ length: 8 }, (_, i) => ({ src: undefined, alt: `Logo ${i + 1}` }));

  const heading = copy.label ? (
    <div className={spacing.block.y.md}>
      <h2 className={`${typography.h2} text-text-primary`}>
        {copy.label}
      </h2>
    </div>
  ) : null;

  return (
    <section id="social-proof" data-section-id="social-proof" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout align="center" heading={heading}>
        <div className={spacing.block.y.lg}>
          <LogoGrid logos={logos} theme={theme} />
        </div>
      </CenteredLayout>
    </section>
  );
}
