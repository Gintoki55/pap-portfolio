import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import "../globals.css";

import { Inter, Cairo } from "next/font/google";
import Header from "../components/Header";
import BackgroundCircles from "../components/BackgroundCircles";

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-cairo',
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Ahmed's Portfolio - Web Developer",
    template: "%s | Ahmed's Portfolio",
  },
  description: "Hi! I'm Ahmed, a Front-End Developer. This is my site to showcase my skills and projects using modern tools like React, Next.js, and more.",
  keywords: [
    "Ahmed",
    "Frontend Developer",
    "React Developer",
    "Portfolio",
    "Web Design",
    "Next.js",
    "JavaScript",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    'google-site-verification': 'LyFoRRCoM9Qmlu_t2pHEc-CqPOKqQZTn0iP7VSR-iJ8',
  }
};

export default async function LocaleLayout(props:{children: React.ReactNode, params: Promise<{locale: string}>}) {
  const { children } = props;
  const { locale } = await props.params;

  const isArabic = locale === 'ar';

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }



  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={`${isArabic ? cairo.variable : inter.variable}`}>
      <body className={isArabic ? 'font-cairo' : 'font-inter'}>
        <NextIntlClientProvider locale={locale}>
          <div className='w-full'>
            <Header />
          </div>
          {children}
          <BackgroundCircles />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}