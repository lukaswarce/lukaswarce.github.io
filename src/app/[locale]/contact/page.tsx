import type { Locale } from '@/i18n/config';
import { ContactView, contactMetadata } from '@/views/ContactView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return contactMetadata((await params).locale as Locale);
}

export default async function ContactPage({ params }: Props) {
  return <ContactView locale={(await params).locale as Locale} />;
}
