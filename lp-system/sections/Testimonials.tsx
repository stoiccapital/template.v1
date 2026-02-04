"use client";

import React from 'react';
import type { SectionTestimonialsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { IconNavButton } from '../components/ui/IconNavButton';
import { spacing, typography, globalBackground, colors, components, ColorTheme } from '../config/design-system';

export type TestimonialsProps = {
  copy: SectionTestimonialsCopy;
  theme: ColorTheme;
};

/**
 * Testimonials Section
 * Layout: CenteredLayout or SingleColumn
 * Alignment: H2 + subtitle LEFT
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → grid block.y.md
 * Grid: 1 column mobile, 2–3 desktop, gaps via grid tokens
 */
export function Testimonials({ copy, theme }: TestimonialsProps) {
  const testimonials = copy.testimonials && copy.testimonials.length > 0
    ? copy.testimonials
    : [];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  const cardBg = isDark ? colors.dark.surface.default : themeColors.surface.default;
  const cardBorder = isDark ? colors.dark.border.subtle : themeColors.border.subtle;

  const structuredTestimonials = testimonials.slice(0, 3).map((testimonial) => {
    const [company, person] = testimonial.customer.split(' · ').map((item) => item.trim());

    return {
      company: company || testimonial.customer,
      person: person || '',
      outcomes: testimonial.outcomes ?? [],
      description: testimonial.description,
      modules: testimonial.modules ?? [],
    };
  });
  const totalSlides = structuredTestimonials.length;
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= totalSlides - 1;

  React.useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, totalSlides - 1)));
  }, [totalSlides]);

  return (
    <section id="testimonials" data-section-id="testimonials" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div className={spacing.block.y.md}>
          <div className={typography.sectionHeader}>
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            {copy.googleReviews && (
              <a
                href={copy.googleReviews.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.googleReviews.ariaLabel || 'Google Reviews'}
                className={`${typography.label} text-text-muted ${spacing.block.y.sm} inline-flex items-center gap-2`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.02 1.53 7.4 2.8l5.4-5.4C33.4 3.6 29.1 1.5 24 1.5 14.6 1.5 6.4 7 2.7 14.9l6.5 5c1.6-4.8 6-10.4 14.8-10.4z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.14-2.7-.44-3.9H24v7.3h12.8c-.26 2-1.66 5-4.8 7.1l6.2 4.8c3.6-3.3 8.3-8.1 8.3-15.3z"/>
                  <path fill="#FBBC05" d="M9.2 28.6a15 15 0 0 1 0-9.2l-6.5-5a23.6 23.6 0 0 0 0 19.2l6.5-5z"/>
                  <path fill="#34A853" d="M24 46.5c6.6 0 12.2-2.2 16.3-6l-6.2-4.8c-1.7 1.2-4 2.1-10.1 2.1-8.8 0-13.2-5.6-14.8-10.4l-6.5 5C6.4 41 14.6 46.5 24 46.5z"/>
                </svg>
                {copy.googleReviews.text && <span>{copy.googleReviews.text}</span>}
                {copy.googleReviews.stars && <span className="text-[#F4B400]">{copy.googleReviews.stars}</span>}
              </a>
            )}
          </div>
          <div className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${spacing.block.y.md}`}>
            {copy.subtitle && (
              <p className={`${typography.body} text-text-secondary ${typography.sectionHeader}`}>
                {copy.subtitle}
              </p>
            )}
            <div className="flex items-center justify-start">
              <div className={`flex ${spacing.gap.sm}`}>
                <IconNavButton
                  ariaLabel={copy.navigation?.previous || 'Previous testimonial'}
                  onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
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
                  ariaLabel={copy.navigation?.next || 'Next testimonial'}
                  onClick={() => setActiveIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
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
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {structuredTestimonials.map((testimonial, index) => (
              <div key={index} className="w-full shrink-0">
                <div className={`grid grid-cols-1 md:grid-cols-12 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
                  <div className={`md:col-span-3 flex flex-col ${spacing.gap.sm}`}>
                    {testimonial.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome.value} className="flex flex-col">
                        <span className={`${typography.h3} text-text-primary`}>{outcome.value}</span>
                        <span className={`${typography.label} text-text-secondary`}>{outcome.label}</span>
                      </div>
                    ))}
                    {testimonial.modules && testimonial.modules.length > 0 && (
                      <div className="flex flex-col">
                        <span className={`${typography.label} text-text-muted`}>
                          {copy.usedModulesLabel}
                        </span>
                        <ul className={`${typography.label} text-text-secondary list-none pl-0`}>
                          {testimonial.modules.map((moduleName) => (
                            <li key={moduleName}>{moduleName}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <div
                      className={`
                        ${cardBg}
                        ${cardBorder}
                        border
                        ${components.card.base}
                        ${spacing.card.padding.md}
                        ${components.shadow.surface1}
                        ${components.transition.default}
                        h-full flex flex-col
                      `}
                    >
                      <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.sm}`}>
                        {testimonial.company}
                      </h3>
                      <p className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
                        {testimonial.person}
                      </p>
                      <p className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}

