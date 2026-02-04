import React from 'react';
import type { SectionDeepDiveCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { StepItem } from '../components/ui/StepItem';
import { spacing, typography, globalBackground, components, ColorTheme } from '../config/design-system';

export type DeepDiveProps = {
  copy: SectionDeepDiveCopy;
  theme: ColorTheme;
};

/**
 * Deep Dive Section
 * Layout: SingleColumn or SplitGrid (text + media)
 * Section spacing: section.y.xl
 * Internal: H2 → body block.y.md, Body → media block.y.lg
 */
export function DeepDive({ copy, theme }: DeepDiveProps) {
  return (
    <section id="deep-dive" data-section-id="deep-dive" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <SplitGrid>
          <div className="text-left">
            {copy.eyebrow && (
              <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
                {copy.eyebrow}
              </div>
            )}
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            <p className={`${typography.body} text-text-secondary ${spacing.block.y.lg}`}>
              {copy.subtitle}
            </p>
            {copy.steps.map((step, index) => (
              <StepItem
                key={`${step.title}-${index}`}
                theme={theme}
                title={step.title}
                body={step.body}
              />
            ))}
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
