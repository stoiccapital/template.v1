import React from 'react';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';
import type { SectionFAQCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FAQItem } from '../components/ui/FAQItem';

export type FAQProps = {
  theme: ColorTheme;
  content: SectionFAQCopy;
};

/**
 * FAQ Section
 * Layout: CenteredLayout
 * Alignment: LEFT
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → FAQ list block.y.md
 */
export function FAQ({ theme, content }: FAQProps) {
  return (
    <section id="faq" data-section-id="faq" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div>
          <div className={typography.sectionHeader}>
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {content.heading}
            </h2>
            {content.subtitle && (
              <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
                {content.subtitle}
              </p>
            )}
          </div>
          <div className={spacing.block.y.md}>
            {content.items.map((item, index) => (
              <FAQItem
                key={index}
                theme={theme}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}
