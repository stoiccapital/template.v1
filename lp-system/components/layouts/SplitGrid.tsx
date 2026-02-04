import React from 'react';
import { spacing } from '../../config/design-system';

export type SplitGridProps = {
  children: [React.ReactNode, React.ReactNode];
  reverse?: boolean;
};

/**
 * SplitGrid Layout Primitive
 * Provides a 2-column layout on desktop, stacking on mobile
 * Owns: grid template (1 col → 2 col breakpoints), horizontal gap via grid.x token
 * Does NOT: control section spacing, define card/media styling
 */
export function SplitGrid({ children, reverse = false }: SplitGridProps) {
  const [textContent, mediaContent] = children;
  
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${spacing.grid.x.md} items-center`}>
      <div className={reverse ? 'lg:order-2' : ''}>{textContent}</div>
      <div className={reverse ? 'lg:order-1' : ''}>{mediaContent}</div>
    </div>
  );
}

