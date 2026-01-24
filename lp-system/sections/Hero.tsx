import React from 'react';
import type { SectionHeroCopy } from '../config/types';
import { CTAButton } from '../components/ui/CTAButton';
import { CTAGroup } from '../components/ui/CTAGroup';
import { HeroLpPreviewMock } from '../components/ui/mocks';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

export type HeroProps = {
  copy: SectionHeroCopy;
  theme: ColorTheme;
};

/**
 * Hero Section
 * Layout: SplitGrid
 * Alignment: Text column LEFT aligned
 * Section spacing: Top section.y.2xl, Bottom section.y.2xl
 * Internal spacing: H1 → subtitle block.y.md, Subtitle → CTAGroup block.y.md
 */
export function Hero({ copy, theme }: HeroProps) {
  return (
    <section id="hero" data-section-id="hero" className={`${spacing.section.y['2xl']} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <SplitGrid>
          <div className="text-left">
            <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
              {copy.title}
            </h1>
            {copy.subtitle && (
              <p className={`${typography.body} text-text-secondary ${maxTextWidth} ${spacing.block.y.md}`}>
                {copy.subtitle}
              </p>
            )}
            <div className={spacing.block.y.md}>
              <CTAGroup align="left" stack="horizontal">
                <CTAButton variant="primary" theme={theme} label={copy.primaryCtaLabel} />
                {copy.secondaryCtaLabel && (
                  <CTAButton variant="ghost" theme={theme} label={copy.secondaryCtaLabel} />
                )}
              </CTAGroup>
            </div>
          </div>
          <HeroLpPreviewMock variant="single" />
        </SplitGrid>
      </CenteredLayout>
    </section>
  );
}
