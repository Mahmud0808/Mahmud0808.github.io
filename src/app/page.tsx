import {
  author,
  fiverrProfile,
  seo,
  siteUrl,
  socialLinks,
} from '@/lib/content/portfolio';
import { disciplines } from '@/lib/content/skills';

import SectionNav from '@/components/SectionNav';
import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Experience from '@/containers/Experience';
import Hero from '@/containers/Hero';
import Skills from '@/containers/Skills';
import Testimonials from '@/containers/Testimonials';
import Work from '@/containers/Work';

const personId = `${siteUrl}/#person`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: author.name,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: author.name,
      alternateName: seo.alternateNames,
      givenName: 'Mahmudul Hasan',
      familyName: 'Khan',
      jobTitle: author.jobTitle,
      description: seo.description,
      url: `${siteUrl}/`,
      image: `${siteUrl}/opengraph-image.png`,
      email: `mailto:${author.email}`,
      homeLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: author.city,
          addressCountry: author.countryCode,
        },
      },
      knowsAbout: [...new Set(disciplines.flatMap((d) => d.stack))],
      sameAs: [...socialLinks.map((link) => link.href), fiverrProfile],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <SectionNav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
