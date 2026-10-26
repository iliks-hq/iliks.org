/**
 * Translation dictionaries for UI strings.
 *
 * Usage:
 *   import { getLangFromUrl, useTranslations } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   t('nav.features') // => "Features" or "Características"
 */

export const languages = {
  en: 'English',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.resources': 'Resources',
    'nav.services': 'Services',
    'nav.servicesDesc': 'Learn about our core services.',
    'nav.pricing': 'Pricing',
    'nav.pricingDesc': 'Simple and transparent pricing.',
    'nav.blog': 'Blog',
    'nav.blogDesc': 'Latest news and industry insights.',
    'nav.caseStudies': 'Case Studies',
    'nav.caseStudiesDesc': 'See how other companies succeed.',
    'nav.docs': 'Documentation',
    'nav.docsDesc': 'Guides, tutorials, and API reference.',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Schedule a call',
    'nav.ctaHref': 'https://cal.com/saeidex/meeting',

    // Hero
    'hero.titleStart': 'Concept to Market-Ready Software',
    'hero.titleHighlight': 'in 8 Weeks',
    'hero.description':
      'We help B2B startups design, build and launch scalable MVPs. Fixed-scope sprint delivery backed by dedicated senior product squads.',
    'hero.primaryCta': 'Schedule Strategy Session',
    'hero.secondaryCta': 'Explore Solutions',

    // Bento Grid
    'bento.title': 'Everything you need to rank higher',
    'bento.subtitle': 'Built from the ground up for technical SEO and modern AI search engines.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Everything you need to know about the product and billing.',

    // Footer Cta
    'footer.cta.title': 'Ready to get started?',
    'footer.cta.description': '',
    'footer.cta.text': 'Schedule a free session',
    'footer.cta.href': 'https://cal.com/saeidex/meeting',
    'footer.cta.ariaLabel': 'Schedule a free strategy session with our team',

    // Footer
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.documentation': 'Documentation',
    'footer.rssFeed': 'RSS Feed',
    'footer.license': 'License (MIT)',
    'footer.copyright':
      'Crafted by <a href="https://iliks.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 transition-colors">ILIKS</a>.',
    'footer.builtWith': 'Built with',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',

    // Contact Page
    'contact.title': "Let's talk about your project",
    'contact.description':
      'Whether you need a custom implementation, have questions about our open-source offering, or just want to say hi, our team is ready to help.',
    'contact.formTitle': 'Send us a message',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Company email',
    'contact.message': 'How can we help?',
    'contact.submit': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.hqLabel': 'Headquarters',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Building the ultimate open-source SEO theme for Astro.',
    'about.missionTitle': 'Our Mission',
    'about.missionText':
      "We believe that technical SEO shouldn't be an afterthought. It should be baked into the foundation of every marketing website. That's why we created ILIKS—to provide a robust, lightning-fast starting point for B2B SaaS companies.",
    'about.openSourceTitle': 'Open Source',
    'about.openSourceText':
      'This project is 100% open-source and free to use under the MIT license. We encourage contributions from the community to help make this the best SEO template available.',

    // Misc
    skipToContent: 'Skip to main content',
    lastUpdated: 'Last updated',
  },
} as const;
