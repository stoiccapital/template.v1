import React from 'react';
import type { SectionSecurityCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { Icon } from '../components/ui/Icon';
import { CodeIcon, SeoIcon, DarkLightModeIcon } from '../components/icons';
import { spacing, typography, colors, components, globalBackground, ColorTheme } from '../config/design-system';

export type SecurityProps = {
  copy: SectionSecurityCopy;
  theme: ColorTheme;
};

/**
 * Security Section
 * Reading-focused; left aligned
 * Layout: SingleColumn or split
 * Section spacing & internal spacing via tokens
 */
export function Security({ copy, theme }: SecurityProps) {
  const themeColors = colors[theme];

  const securityItems = copy.items.map((item, index) => {
    const isEnterpriseCodeItem = item.title === 'Enterprise-Grade Code' || item.title === 'Enterprise-Qualität Code';
    const isSeoItem = item.title === 'SEO-Ready Structure' || item.title === 'SEO-fähige Struktur';
    const isResponsiveItem = item.title === 'Responsive + Dark/Light Mode';
    
    let icon;
    if (isEnterpriseCodeItem) {
      icon = (
        <Icon>
          <CodeIcon />
        </Icon>
      );
    } else if (isSeoItem) {
      icon = (
        <Icon>
          <SeoIcon />
        </Icon>
      );
    } else if (isResponsiveItem) {
      icon = (
        <Icon>
          <DarkLightModeIcon />
        </Icon>
      );
    } else {
      icon = <div className={`${typography.textXs} ${theme === 'dark' ? colors.dark.accent.primary : themeColors.accent.primary}`}>Icon</div>;
    }
    
    return (
      <div key={index} className="text-left">
        <div className={`w-12 h-12 ${theme === 'dark' ? colors.dark.surface.elevated : themeColors.surface.default} ${components.surface.radius} flex items-center justify-center ${spacing.block.y.sm}`}>
          {icon}
        </div>
        <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.md}`}>
          {item.title}
        </h3>
        <p className={`${typography.body} text-text-secondary`}>
          {item.body}
        </p>
      </div>
    );
  });

  return (
    <section id="security" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div className={typography.sectionHeader}>
          <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
            {copy.heading}
          </h2>
          <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
            {copy.subtitle}
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {securityItems}
        </div>
      </CenteredLayout>
    </section>
  );
}

