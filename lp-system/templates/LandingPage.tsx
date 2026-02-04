import React from 'react';
import { ThemeName, themes } from '../config/theme';
import { PageCopyConfig } from '../config/types';
import { getMessages } from '../locales';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { HeroAgencyLp } from '../sections/HeroAgencyLp';
import { SocialProof } from '../sections/SocialProof';
import { ValueProps } from '../sections/ValueProps';
import { Features } from '../sections/Features';
import { DeepDive } from '../sections/DeepDive';
import { UseCases } from '../sections/UseCases';
import { Metrics } from '../sections/Metrics';
import { Security } from '../sections/Security';
import { Testimonials } from '../sections/Testimonials';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';

export type LandingPageTemplateProps = {
  theme: ThemeName;
  copy: PageCopyConfig;
  locale: 'en' | 'de';
  lpId?: string;
};

/**
 * Landing Page Template
 * Pure orchestration + composition
 * Canonical section order:
 * 1. Navbar
 * 2. Hero
 * 3. Social Proof
 * 4. Value Proposition
 * 5. Features
 * 6. Deep Dive
 * 7. Use Cases
 * 8. Testimonials
 * 9. Pricing (optional)
 * 10. FAQ
 * 11. Final CTA
 * 12. Footer
 */
export function LandingPageTemplate({
  theme,
  copy,
  locale,
  lpId,
}: LandingPageTemplateProps) {
  const themeConfig = themes[theme];
  const messages = getMessages(locale);
  const useAgencyHero = lpId === 'agency-lp';

  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.font}`}>
      {/* 1. Navbar */}
      <Navbar theme={theme} labels={copy.navbar || messages.navbar} locale={locale} />
      
      {/* Main content */}
      <main>
      {/* 2. Hero */}
      {useAgencyHero ? (
        <HeroAgencyLp copy={copy.hero} theme={theme} />
      ) : (
        <Hero copy={copy.hero} theme={theme} />
      )}
      
      {/* 3. Social Proof */}
      <SocialProof copy={copy.socialProof} theme={theme} />
      
      {/* 4. Value Proposition */}
      <ValueProps copy={copy.valueProps} theme={theme} />
      
      {/* 5. Features */}
      <Features copy={copy.features} theme={theme} />
      
      {/* 6. Deep Dive */}
      <DeepDive copy={copy.deepDive || { eyebrow: 'Placeholder', heading: 'Deep Dive', subtitle: 'Learn more', steps: [] }} theme={theme} />
      
      {/* 7. Metrics */}
      <Metrics copy={copy.metrics || { heading: 'Metrics', subtitle: 'Proven results', metrics: [] }} theme={theme} />

      {/* 8. Integrations *
      
      <Integrations copy={copy.integrations || { heading: 'Integrations', subtitle: 'Works with your tools', integrations: [] }} theme={theme} />
      /}

      {/* 9. Use Cases */}
      <UseCases copy={copy.useCases || { heading: 'Use Cases', subtitle: 'Built for your workflows', items: [] }} theme={theme} />

      
      {/* 10. Security *
      <Security copy={copy.security || { heading: 'Security', subtitle: 'Enterprise-grade protection', items: [] }} theme={theme} />
      /}
      {/* 11. Testimonials */}
      <Testimonials copy={copy.testimonials || { heading: 'What customers say', subtitle: 'Trusted by teams worldwide', testimonials: [] }} theme={theme} />
      
      {/* 12. Pricing (optional) */}
      <Pricing copy={copy.pricing || { heading: 'Simple pricing', subtitle: 'Choose the plan that works for you', plans: [] }} theme={theme} />
      
      {/* 13. FAQ */}
      <FAQ theme={theme} content={copy.faq || { heading: 'Frequently asked questions', subtitle: 'Everything you need to know', items: [] }} />
      
      {/* 14. Final CTA */}
      <FinalCTA copy={copy.finalCta} theme={theme} />
      </main>
      
      {/* 13. Footer */}
      <Footer theme={theme} labels={copy.footer || messages.footer} locale={locale} />
    </div>
  );
}
