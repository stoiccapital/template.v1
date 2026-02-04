import type { PageCopyConfig, LegalPageCopy } from '../config/types';
import deIndexData from './de/index.json';
import enIndexData from './en/index.json';
import dePrivacyData from './de/privacy.json';
import enPrivacyData from './en/privacy.json';
import deImpressumData from './de/impressum.json';
import enImpressumData from './en/impressum.json';

export function loadPageCopy(
  locale: 'en' | 'de',
  lpId: string
): PageCopyConfig | null {
  // For now, we only support 'example-lp' which maps to index.json
  if (lpId !== 'example-lp') return null;
  
  const data = locale === 'en' ? enIndexData : deIndexData;
  return data as PageCopyConfig;
}

export function loadLegalPageCopy(
  locale: 'en' | 'de',
  pageId: 'impressum' | 'privacy'
): LegalPageCopy | null {
  if (pageId === 'privacy') {
    return (locale === 'en' ? enPrivacyData : dePrivacyData) as LegalPageCopy;
  } else if (pageId === 'impressum') {
    return (locale === 'en' ? enImpressumData : deImpressumData) as LegalPageCopy;
  }
  return null;
}

export type ShellMessages = {
  navbar: {
    brand: string;
    links: {
      features: string;
      pricing: string;
      useCases: string;
      faq: string;
    };
    cta: string;
    ariaLabels: {
      goToHomepage: string;
      switchToEnglish: string;
      switchToGerman: string;
      openMenu: string;
      closeMenu: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
};

const shellMessages: Record<'en' | 'de', ShellMessages> = {
  en: {
    navbar: {
      brand: 'Mock Brand',
      links: {
        features: 'Mock Features',
        pricing: 'Mock Pricing',
        useCases: 'Mock Use Cases',
        faq: 'Mock FAQ',
      },
      cta: 'Mock CTA',
      ariaLabels: {
        goToHomepage: 'Mock go to homepage',
        switchToEnglish: 'Mock switch to English',
        switchToGerman: 'Mock switch to German',
        openMenu: 'Mock open main menu',
        closeMenu: 'Mock close main menu',
      },
    },
    footer: {
      copyright: '© 2024 Mock Brand. All rights reserved.',
      links: {
        privacy: 'Mock Privacy',
        terms: 'Mock Terms',
        contact: 'Mock Contact',
      },
    },
  },
  de: {
    navbar: {
      brand: 'Mock Brand',
      links: {
        features: 'Mock Funktionen',
        pricing: 'Mock Preise',
        useCases: 'Mock Anwendungsfälle',
        faq: 'Mock FAQ',
      },
      cta: 'Mock CTA',
      ariaLabels: {
        goToHomepage: 'Mock zur Startseite',
        switchToEnglish: 'Mock zu Englisch wechseln',
        switchToGerman: 'Mock zu Deutsch wechseln',
        openMenu: 'Mock Hauptmenü öffnen',
        closeMenu: 'Mock Hauptmenü schließen',
      },
    },
    footer: {
      copyright: '© 2024 Mock Brand. Alle Rechte vorbehalten.',
      links: {
        privacy: 'Mock Datenschutz',
        terms: 'Mock Nutzungsbedingungen',
        contact: 'Impressum',
      },
    },
  },
};

export function getMessages(locale: 'en' | 'de'): ShellMessages {
  return shellMessages[locale];
}

