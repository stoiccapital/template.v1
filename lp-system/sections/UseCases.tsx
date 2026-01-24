import React from 'react';
import type { SectionUseCasesCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { Icon } from '../components/ui/Icon';
import { AgenciesIcon, ProductLaunchIcon, MarketingCampaignsIcon } from '../components/icons';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type UseCasesProps = {
  copy: SectionUseCasesCopy;
  theme: ColorTheme;
};

/**
 * Use Cases Section
 * Layout: SingleColumn + grid of use-case items
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → grid block.y.md
 * Cards: left-aligned content, gaps via grid tokens
 */
export function UseCases({ copy, theme }: UseCasesProps) {
  const items = copy.items && copy.items.length > 0 ? copy.items : [
    { title: 'Use Case 1', body: 'Perfect for your workflow' },
    { title: 'Use Case 2', body: 'Built for your needs' },
    { title: 'Use Case 3', body: 'Designed for success' },
  ];

  const useCaseItems = items.map((item, index) => {
    const isAgenciesItem = item.title === 'Agencies' || item.title === 'Agenturen';
    const isProductLaunchItem = item.title === 'Product Launches' || item.title === 'Produktlaunches';
    const isMarketingCampaignsItem = item.title === 'Marketing Campaigns' || item.title === 'Marketingkampagnen';
    
    let icon;
    if (isAgenciesItem) {
      icon = (
        <Icon>
          <AgenciesIcon />
        </Icon>
      );
    } else if (isProductLaunchItem) {
      icon = (
        <Icon>
          <ProductLaunchIcon />
        </Icon>
      );
    } else if (isMarketingCampaignsItem) {
      icon = (
        <Icon>
          <MarketingCampaignsIcon />
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
    <section id="use-cases" data-section-id="use-cases" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {useCaseItems}
        </div>
      </CenteredLayout>
    </section>
  );
}

