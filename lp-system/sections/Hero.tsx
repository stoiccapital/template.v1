'use client';

import React from 'react';
import type { SectionHeroCopy } from '../config/types';
import { CTAButton } from '../components/ui/CTAButton';
import { CTAGroup } from '../components/ui/CTAGroup';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { spacing, typography, maxTextWidth, globalBackground, components, ColorTheme } from '../config/design-system';

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
  const handleSecondaryCtaClick = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  <CTAButton
                    variant="ghost"
                    theme={theme}
                    label={copy.secondaryCtaLabel}
                    onClick={handleSecondaryCtaClick}
                  />
                )}
              </CTAGroup>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className={`w-full ${components.media.maxWidth.xl} ${components.media.aspectRatios['16:9']} ${components.radius.media} border border-border-subtle bg-bg-neutral flex items-center justify-center`}>
              <div className="text-text-muted text-sm">Image</div>
            </div>
          </div>
        </SplitGrid>
      </CenteredLayout>
    </section>
  );
}
