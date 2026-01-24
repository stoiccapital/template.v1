import React from 'react';
import { components } from '../../../../config/design-system';

export type BrowserFrameMockProps = {
  /** Optional URL string to display in the URL pill */
  url?: string;
  /** Whether the entire frame should be aria-hidden (default: true) */
  ariaHidden?: boolean;
  /** Children rendered inside the browser frame canvas */
  children: React.ReactNode;
};

/**
 * Browser Frame Mock
 * 
 * Shared primitive that renders the outer "browser window" frame:
 * - Top bar with 3 decorative dots
 * - URL pill (optional URL string)
 * - Children area (inner canvas)
 * 
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden by default.
 * No focusable elements are created.
 */
export function BrowserFrameMock({ url, ariaHidden = true, children }: BrowserFrameMockProps) {
  return (
    <div 
      aria-hidden={ariaHidden ? "true" : undefined}
      className={`${components.surface.radius} ${components.shadow.surface2} border border-border-subtle bg-bg-default overflow-hidden`}
    >
      {/* Browser window frame */}
      <div className="bg-bg-neutral border-b border-border-subtle px-4 py-3 flex items-center gap-3">
        {/* Window controls (decorative dots) */}
        <div className="flex gap-2" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
        </div>
        {/* URL pill */}
        {url && (
          <div className={`flex-1 ${components.surface.radius} bg-bg-default border border-border-subtle px-4 py-2 max-w-md`}>
            <div className="text-text-muted text-xs truncate">{url}</div>
          </div>
        )}
      </div>

      {/* Inner canvas */}
      <div className="bg-bg-default p-6">
        {children}
      </div>
    </div>
  );
}

