import React from 'react';
import { spacing, typography, colors, maxTextWidth, ColorTheme } from '../../config/design-system';
import { CTAButton } from './CTAButton';
import { MediaContainer } from './MediaContainer';

export type StepItemProps = {
  theme: ColorTheme;
  stepLabel?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  media?: {
    src?: string;
    aspectRatio?: '16:9' | '4:3' | '1:1';
    alt?: string;
  };
};

/**
 * StepItem Component
 * Single step item with label, H3, body, optional CTA, media
 * Owns: Internal spacing, step gap (block.y.xl to next step)
 * Does NOT own: Section-level spacing
 */
export function StepItem({
  theme,
  stepLabel,
  title,
  body,
  ctaLabel,
  media,
}: StepItemProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';

  return (
    <div className={spacing.block.y.xl}>
      {stepLabel && (
        <div className={`${typography.label} ${isDark ? colors.dark.accent.primary : themeColors.accent.primary} ${spacing.block.y.sm}`}>
          {stepLabel}
        </div>
      )}
      <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.md}`}>
        {title}
      </h3>
      <p className={`${typography.body} text-text-secondary ${maxTextWidth} ${spacing.block.y.md}`}>
        {body}
      </p>
      {ctaLabel && (
        <div className={spacing.block.y.md}>
          <CTAButton variant="primary" theme={theme} label={ctaLabel} />
        </div>
      )}
      {media && (
        <div className={spacing.block.y.lg}>
          <MediaContainer
            theme={theme}
            src={media.src}
            aspectRatio={media.aspectRatio}
            alt={media.alt}
          />
        </div>
      )}
    </div>
  );
}
