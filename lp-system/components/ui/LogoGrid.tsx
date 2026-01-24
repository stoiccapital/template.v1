import React from 'react';
import { LogoCell } from './LogoCell';
import { spacing, layout, ColorTheme } from '../../config/design-system';

export type LogoGridProps = {
  logos: { src?: string; alt: string }[];
  theme: ColorTheme;
  className?: string;
};

/**
 * LogoGrid Component
 * Renders logos in a centered 4×2 grid (desktop) or 2×4 grid (mobile)
 * Owns: Grid layout, column count, gap tokens, centering via mx-auto + max-width
 * Does NOT own: Section-level spacing, logo styling
 */
export function LogoGrid({ logos, theme, className = '' }: LogoGridProps) {
  return (
    <div className={`
      grid
      grid-cols-2
      md:grid-cols-4
      ${spacing.grid.x.md}
      ${spacing.grid.y.md}
      items-center
      justify-items-center
      ${layout.container.maxWidth}
      mx-auto
      ${className}
    `}>
      {logos.map((logo, index) => (
        <LogoCell
          key={index}
          src={logo.src}
          alt={logo.alt}
          theme={theme}
        />
      ))}
    </div>
  );
}
