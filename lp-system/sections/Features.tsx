import React from 'react';
import type { SectionFeaturesCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, maxTextWidth, globalBackground, components, ColorTheme } from '../config/design-system';

export type FeaturesProps = {
  copy: SectionFeaturesCopy;
  theme: ColorTheme;
};

/**
 * Features Section
 * Layout: CenteredLayout with header, then repeated SplitGrid rows for each feature
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → first feature block.y.md
 * Between features: block.y.xl
 * Text blocks LEFT aligned
 */
export function Features({ copy, theme }: FeaturesProps) {
  void theme; // Reserved for future use, kept for API compatibility

  return (
    <section id="features" data-section-id="features" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div>
          <div className={typography.sectionHeader}>
            {copy.eyebrow && (
              <div className={spacing.block.y.sm}>
                <div className={`${typography.label} text-text-muted`}>
                  {copy.eyebrow}
                </div>
              </div>
            )}
            <div className={spacing.block.y.md}>
              <h2 className={`${typography.h2} text-text-primary`}>
                {copy.heading}
              </h2>
            </div>
            <div className={spacing.block.y.md}>
              <p className={`${typography.body} text-text-secondary`}>
                {copy.subtitle}
              </p>
            </div>
          </div>
        </div>
        {copy.items.map((item, index) => {
          return (
            <div key={index} className={index < copy.items.length - 1 ? spacing.block.y.xl : ''}>
              <SplitGrid>
                <div className="text-left">
                  {item.eyebrow && (
                    <div className={spacing.block.y.sm}>
                      <div className={`${typography.label} text-text-muted`}>
                        {item.eyebrow}
                      </div>
                    </div>
                  )}
                  <div className={spacing.block.y.md}>
                    <h3 className={`${typography.h3} text-text-primary`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`${typography.body} text-text-secondary ${maxTextWidth}`}>
                    {item.body}
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className={`w-full ${components.media.maxWidth.xl} ${components.media.aspectRatios['16:9']} ${components.radius.media} border border-border-subtle bg-bg-neutral flex items-center justify-center`}>
                    <div className="text-text-muted text-sm">Image</div>
                  </div>
                </div>
              </SplitGrid>
            </div>
          );
        })}
      </CenteredLayout>
    </section>
  );
}
