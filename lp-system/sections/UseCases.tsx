"use client";

import React from 'react';
import type { SectionUseCasesCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { IconNavButton } from '../components/ui/IconNavButton';
import { Icon } from '../components/ui/Icon';
import { AgenciesIcon, ProductLaunchIcon, MarketingCampaignsIcon } from '../components/icons';
import { spacing, typography, globalBackground, colors, components, ColorTheme } from '../config/design-system';

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
  const [visibleCount, setVisibleCount] = React.useState(2);
  const [startIndex, setStartIndex] = React.useState(0);
  const maxStartIndex = Math.max(0, items.length - visibleCount);
  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= maxStartIndex;
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  const cardBg = isDark ? colors.dark.surface.default : themeColors.surface.default;
  const cardBorder = isDark ? colors.dark.border.subtle : themeColors.border.subtle;

  React.useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  React.useEffect(() => {
    setStartIndex((prev) => Math.min(prev, Math.max(0, items.length - visibleCount)));
  }, [items.length, visibleCount]);

  const renderUseCaseItem = (item: { title: string; body: string }) => {
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
      icon = null;
    }
    
    return (
      <FeatureCard
        icon={icon}
        title={item.title}
        body={item.body}
        theme={theme}
      />
    );
  };

  return (
    <section id="use-cases" data-section-id="use-cases" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div>
          <div className={typography.sectionHeader}>
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
          </div>
          <div className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${spacing.block.y.md}`}>
            <p className={`${typography.body} text-text-secondary ${typography.sectionHeader}`}>
              {copy.subtitle}
            </p>
            <div className="flex items-center justify-start">
              <div className={`flex ${spacing.gap.sm}`}>
                <IconNavButton
                  ariaLabel="Previous use case"
                  onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
                  disabled={isPrevDisabled}
                  className="h-8 w-8 p-0"
                >
                  <svg
                    className="w-4 h-4 mx-auto rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </IconNavButton>
                <IconNavButton
                  ariaLabel="Next use case"
                  onClick={() => setStartIndex((prev) => Math.min(maxStartIndex, prev + 1))}
                  disabled={isNextDisabled}
                  className="h-8 w-8 p-0"
                >
                  <svg
                    className="w-4 h-4 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </IconNavButton>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out md:-mx-4"
              style={{ transform: `translateX(-${(startIndex * 100) / visibleCount}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 md:w-1/2 md:px-4"
                >
                  <div
                    className={`
                      ${cardBg}
                      ${cardBorder}
                      border
                      ${components.card.base}
                      ${spacing.card.padding.md}
                      ${components.shadow.surface1}
                      ${components.transition.default}
                      hover:shadow-card-hover
                      h-full flex flex-col
                    `}
                  >
                    {renderUseCaseItem(item)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}

