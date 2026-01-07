import React from 'react';
import { ColorTheme } from '../../config/design-system';
import { components, colors } from '../../config/design-system';

export type MediaContainerProps = {
  theme: ColorTheme;
  src?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  alt?: string;
  children?: React.ReactNode;
};

/**
 * MediaContainer Component
 * Media wrapper with border, shadow, overlay
 * Owns: Border, shadow, overlay, aspect ratio
 * Does NOT own: Section spacing
 */
export function MediaContainer({
  theme,
  src,
  aspectRatio = '4:3',
  alt = '',
  children,
}: MediaContainerProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  
  const bgClass = isDark 
    ? colors.dark.surface.elevated
    : themeColors.surface.default;
  
  const borderClass = isDark 
    ? `border ${colors.dark.border.subtle}`
    : `border ${themeColors.border.subtle}`;
  
  const textColor = 'text-text-muted';
  const mediaOverlay = isDark ? components.media.overlay : '';
  const aspectRatioClass = components.media.aspectRatios[aspectRatio];
  
  return (
    <div className="flex justify-center lg:justify-end">
      <div className={`
        w-full
        max-w-xl
        lg:max-w-2xl
        ${aspectRatioClass}
        ${components.surface.radius}
        ${bgClass}
        ${borderClass}
        ${components.shadow.surface2}
        flex
        items-center
        justify-center
        overflow-hidden
        relative
        ${mediaOverlay}
      `}>
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover object-center"
          />
        ) : children || null}
      </div>
    </div>
  );
}
