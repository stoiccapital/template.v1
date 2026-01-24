import React from 'react';
import type { SectionValuePropsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { Icon } from '../components/ui/Icon';
import { CalendarIcon, SettingsIcon, ChartIcon } from '../components/icons';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type ValuePropsProps = {
  copy: SectionValuePropsCopy;
  theme: ColorTheme;
};

/**
 * Value Props Section
 * Layout: CenteredLayout
 * Alignment: LEFT
 * Section spacing: section.y.xl top/bottom
 * Internal: H2 → subtitle block.y.md, Subtitle → FeatureCard grid block.y.md
 * Grid: 3 columns on desktop, 1 on mobile, gaps via grid tokens
 */
export function ValueProps({ copy, theme }: ValuePropsProps) {
  const featureCards = copy.items.map((item, index) => {
    const isDeliveryItem = item.title === 'One Week Delivery' || item.title === 'Eine Woche Lieferzeit';
    const isConsistentSystemItem = item.title === 'Consistent System' || item.title === 'Konsistentes System';
    const isPerformanceReadyItem = item.title === 'Performance Ready' || item.title === 'Performance-Ready';
    
    let icon;
    if (isDeliveryItem) {
      icon = (
        <Icon>
          <CalendarIcon />
        </Icon>
      );
    } else if (isConsistentSystemItem) {
      icon = (
        <Icon>
          <SettingsIcon />
        </Icon>
      );
    } else if (isPerformanceReadyItem) {
      icon = (
        <Icon>
          <ChartIcon />
        </Icon>
      );
    } else {
      icon = <div className={`${typography.textXs}`}>⚡</div>;
    }
    
    return (
      <FeatureCard
        key={index}
        icon={icon}
        title={item.title}
        body={item.body}
        theme={theme}
      />
    );
  });

  return (
    <section id="value-props" data-section-id="value-props" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {featureCards}
        </div>
      </CenteredLayout>
    </section>
  );
}
