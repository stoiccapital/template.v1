import React from 'react';
import type { SectionDeepDiveCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { ValuePropMock } from '../components/ui/mocks';
import { spacing, typography, colors, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

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
  void theme; // Reserved for future use, kept for API compatibility
  return (
    <section id="deep-dive" data-section-id="deep-dive" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        <SplitGrid>
          <div className="text-left">
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            <p className={`${typography.body} text-text-secondary ${maxTextWidth} ${spacing.block.y.lg}`}>
              {copy.subtitle}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <ValuePropMock kind="timeline" />
            </div>
          </div>
        </SplitGrid>
      </SingleColumn>
    </section>
  );
}
