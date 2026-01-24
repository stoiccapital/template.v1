'use client';

import React from 'react';
import { components, spacing, typography } from '../../../../config/design-system';
import { BrowserFrameMock } from '../browser/BrowserFrameMock';

export type HeroLpPreviewMockProps = {
  variant?: 'single' | 'grid';
};

/**
 * Hero Landing Page Preview Mock
 * 
 * Decorative browser window mock showing canonical landing page structure preview.
 * Supports internal scrolling to view sections.
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden.
 */
export function HeroLpPreviewMock({ variant = 'single' }: HeroLpPreviewMockProps) {
  // Both variants render the same minimal layout
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = variant; // Keep variant in API for future extensibility
  return (
    <BrowserFrameMock url="example.com/landing-page">
      <SingleLayout />
    </BrowserFrameMock>
  );
}

/**
 * Mock Section Wrapper
 * Provides consistent vertical spacing between sections
 * Uses a single global spacing token for all section gaps
 */
function MockSection({ 
  children, 
  isLast = false,
  onClick,
  onKeyDown,
  className = '',
}: { 
  children: React.ReactNode;
  isLast?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  className?: string;
}) {
  const SECTION_GAP = spacing.block.y.md;
  
  return (
    <section 
      className={`${!isLast ? SECTION_GAP : ''} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </section>
  );
}

/**
 * Single layout variant
 * Renders canonical landing page structure with internal scrolling
 * All sections are implicit - no visible labels, only visual patterns
 * Sections are clickable and navigate to corresponding sections in the real LP
 */
function SingleLayout() {
  // Scroll to section handler - navigates to corresponding section in the real LP
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLDivElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <div className={`${components.mock.heroCanvasHeight} overflow-y-auto overscroll-contain relative bg-bg-default`}>
      {/* 1. Sticky Navbar */}
      <div className={`sticky top-0 bg-bg-default border-b border-border-subtle z-10 flex items-center justify-between ${spacing.container.px} py-3`}>
        <div className={`${typography.label} text-text-primary`}>
          Logo
        </div>
        <div className={`${components.button.radius} bg-cta-bg text-cta-text px-5 py-2 ${typography.textXs} font-medium`}>
          Get started
        </div>
      </div>

      <div className={spacing.container.px}>
        {/* 2. Hero Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'hero')}
          onKeyDown={(e) => handleKeyDown(e, 'hero')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="max-w-3xl space-y-2">
            {/* Large headline */}
            <div className={`${typography.h1} text-text-primary`}>
              Enterprise-grade landing pages
            </div>
            {/* Subtitle bar */}
            <div className={`${typography.body} text-text-secondary`}>
              <div className="bg-text-secondary h-4 rounded w-full max-w-xl opacity-70"></div>
            </div>
            {/* Two CTA buttons */}
            <div className="flex items-center gap-4">
              <div className={`${components.button.radius} bg-cta-bg text-cta-text px-5 py-2 ${typography.textXs} font-medium`}>
                Get started
              </div>
              <div className={`${components.button.radius} border border-border-subtle bg-bg-default text-text-primary px-5 py-2 ${typography.textXs} font-medium`}>
                Learn more
              </div>
            </div>
          </div>
        </MockSection>

        {/* 3. Social Proof Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'social-proof')}
          onKeyDown={(e) => handleKeyDown(e, 'social-proof')}
          className="flex items-center gap-6 cursor-pointer hover:opacity-80 transition-opacity"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-10 w-20 flex items-center justify-center ${typography.textXs} text-text-muted`}>
              Logo {i}
            </div>
          ))}
        </MockSection>

        {/* 4. Value Propositions Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'value-props')}
          onKeyDown={(e) => handleKeyDown(e, 'value-props')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="space-y-2">
            <div className={`${typography.h2} text-text-primary`}>
              Everything you need
            </div>
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  One Week Delivery
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  Consistent System
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  Performance Ready
                </div>
              </div>
            </div>
          </div>
        </MockSection>

        {/* 5. Features Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'features')}
          onKeyDown={(e) => handleKeyDown(e, 'features')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="space-y-2">
            <div className={`${typography.h2} text-text-primary`}>
              Built for results
            </div>
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  Bilingual Copy Included
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  Performance Optimization
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${components.surface.radius} bg-bg-neutral h-3 w-3 shrink-0`}></div>
                <div className={`${typography.body} text-text-primary`}>
                  Deployment Ready
                </div>
              </div>
            </div>
          </div>
        </MockSection>

        {/* 6. Pricing Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'pricing')}
          onKeyDown={(e) => handleKeyDown(e, 'pricing')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="space-y-2">
            <div className={`${typography.h2} text-text-primary`}>
              Simple pricing
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.gutter.x.md} max-w-4xl`}>
            <div className={`${components.surface.radius} border bg-bg-default border-border-subtle ${spacing.card.padding.lg} space-y-4`}>
              <div className={`${typography.body} text-text-primary`}>
                Single Page
              </div>
              <div className="space-y-2">
                <div className="bg-text-secondary h-3 rounded w-full opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-5/6 opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-4/5 opacity-60"></div>
              </div>
            </div>
            <div className={`${components.surface.radius} border bg-bg-default border-border-subtle ${spacing.card.padding.lg} space-y-4`}>
              <div className={`${typography.body} text-text-primary`}>
                Package
              </div>
              <div className="space-y-2">
                <div className="bg-text-secondary h-3 rounded w-full opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-5/6 opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-4/5 opacity-60"></div>
              </div>
            </div>
            <div className={`${components.surface.radius} border bg-bg-default border-border-subtle ${spacing.card.padding.lg} space-y-4`}>
              <div className={`${typography.body} text-text-primary`}>
                Enterprise
              </div>
              <div className="space-y-2">
                <div className="bg-text-secondary h-3 rounded w-full opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-5/6 opacity-60"></div>
                <div className="bg-text-secondary h-3 rounded w-4/5 opacity-60"></div>
              </div>
            </div>
          </div>
          </div>
        </MockSection>

        {/* 7. FAQ Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'faq')}
          onKeyDown={(e) => handleKeyDown(e, 'faq')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="space-y-2">
            <div className={`${typography.h2} text-text-primary`}>
              FAQ
            </div>
            <div className="max-w-2xl space-y-2">
            <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-3">
              <div className={`${typography.body} text-text-primary flex-1`}>
                How long does it take?
              </div>
              <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-5 w-5 flex items-center justify-center text-text-muted ${typography.textXs}`}>
                +
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-3">
              <div className={`${typography.body} text-text-primary flex-1`}>
                Can I make changes after delivery?
              </div>
              <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-5 w-5 flex items-center justify-center text-text-muted ${typography.textXs}`}>
                +
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-3">
              <div className={`${typography.body} text-text-primary flex-1`}>
                What do I need to provide?
              </div>
              <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-5 w-5 flex items-center justify-center text-text-muted ${typography.textXs}`}>
                +
              </div>
            </div>
          </div>
          </div>
        </MockSection>

        {/* 8. Final CTA Section */}
        <MockSection
          onClick={(e) => handleSectionClick(e, 'final-cta')}
          onKeyDown={(e) => handleKeyDown(e, 'final-cta')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle ${spacing.card.padding.lg} space-y-2 max-w-2xl`}>
            <div className={`${typography.h2} text-text-primary`}>
              Ready to get started?
            </div>
            <div className={`${components.button.radius} bg-cta-bg text-cta-text px-5 py-2 ${typography.textXs} font-medium w-fit`}>
              Get Started
            </div>
          </div>
        </MockSection>

        {/* 9. Footer */}
        <MockSection isLast={true} className="border-t border-border-subtle pt-6">
          <div className="flex items-center gap-6">
            <div className={`${typography.label} text-text-muted`}>
              Privacy
            </div>
            <div className={`${typography.label} text-text-muted`}>
              Terms
            </div>
            <div className={`${typography.label} text-text-muted`}>
              Contact
            </div>
          </div>
        </MockSection>
      </div>
    </div>
  );
}

