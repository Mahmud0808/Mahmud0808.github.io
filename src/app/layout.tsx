import type { Metadata, Viewport } from 'next';

import { author, seo, siteUrl } from '@/lib/content/portfolio';
import fontVariables from '@/lib/utils/fonts';

import Footer from '@/containers/layout/Footer';
import Header from '@/containers/layout/Header';

import '@/styles/_generated/display-font.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${author.name}`,
  },
  description: seo.description,
  authors: [{ name: author.name, url: siteUrl }],
  creator: author.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: author.name,
    locale: 'en_US',
    title: seo.title,
    description: seo.description,
    firstName: 'Mahmudul Hasan',
    lastName: 'Khan',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    creator: '@DrDisagree',
  },
  keywords: [
    author.name,
    ...seo.alternateNames,
    'Android developer',
    'Full-stack developer',
    'Dhaka',
  ],
  applicationName: author.name,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: { google: 'tuEELxkE7zuw6YSzuesy_71LuYE_C22T0qurgD-mFFg' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#051316',
  colorScheme: 'dark light',
};

const themeBootstrap = `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme'),h=localStorage.getItem('accent');if(t==='light')d.dataset.theme=t;if(h&&/^\\d{1,3}$/.test(h))d.style.setProperty('--h',h)}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="site">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
