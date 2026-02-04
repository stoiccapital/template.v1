import { loadLegalPageCopy } from '../../../lp-system/locales';
import { LegalPageTemplate } from '../../../lp-system/templates/LegalPage';
import { DEFAULT_THEME, LOCALES } from '../../../lp-system/config/preferences';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

type Props = {
  params: Promise<{ locale: 'en' | 'de' }>;
};

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  const copy = loadLegalPageCopy(locale, 'impressum');
  
  if (!copy) {
    throw new Error(`Impressum copy not found for locale: ${locale}`);
  }

  const theme = DEFAULT_THEME;

  return (
    <LegalPageTemplate 
      theme={theme} 
      copy={copy} 
      locale={locale}
    />
  );
}

