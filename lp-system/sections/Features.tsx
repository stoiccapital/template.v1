import React from 'react';
import type { SectionFeaturesCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { MediaContainer } from '../components/ui/MediaContainer';
import { spacing, typography, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

export type FeaturesProps = {
  copy: SectionFeaturesCopy;
  theme: ColorTheme;
};

/**
 * Features Section
 * Layout: SingleColumn or repeated SplitGrid rows
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → first feature block.y.md
 * Between features: block.y.xl
 * Text blocks LEFT aligned
 */
export function Features({ copy, theme }: FeaturesProps) {
  return (
    <section id="features" data-section-id="features" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
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
        {copy.items.map((item, index) => (
          <div key={index} className={index < copy.items.length - 1 ? spacing.block.y.xl : ''}>
            <SplitGrid>
              <div className="text-left">
                <div className={spacing.block.y.md}>
                  <h3 className={`${typography.h3} text-text-primary`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`${typography.body} text-text-secondary ${maxTextWidth}`}>
                  {item.body}
                </p>
              </div>
              <MediaContainer theme={theme} />
            </SplitGrid>
          </div>
        ))}
      </SingleColumn>
    </section>
  );
}
