import type { PricingTier } from '../components/marketing/PricingTable.tsx';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Discovery',
    description: 'Get a clear technical plan before investing in a larger build.',
    price: 1500,
    pricePrefix: '',
    billingPeriod: '/one-time',
    features: [
      'Requirements and product audit',
      'Technical architecture and roadmap',
      'UX flows for the core experience',
      'Prioritized delivery plan',
      'Readout with your stakeholders',
    ],
    ctaText: 'Book a discovery call',
    ctaHref: '/contact',
  },
  {
    name: 'Product Build',
    description: 'A focused team to design and ship your next web or mobile product.',
    price: 6500,
    pricePrefix: '',
    billingPeriod: '/project',
    isPopular: true,
    features: [
      'Product strategy and UI design',
      'Production-ready frontend and backend',
      'API, payment, or AI integrations',
      'Weekly demos and written progress',
      'QA, deployment, and handover',
    ],
    ctaText: 'Discuss your project',
    ctaHref: '/contact',
  },
  {
    name: 'Scale & Support',
    description: 'Ongoing engineering capacity for complex systems and growing teams.',
    price: 0,
    priceDisplay: 'Custom',
    billingPeriod: '',
    features: [
      'Dedicated delivery lead',
      'Modernization and new features',
      'Cloud, security, and performance work',
      'Flexible monthly capacity',
      'Support terms matched to your needs',
    ],
    ctaText: 'Plan a team extension',
    ctaHref: '/contact',
  },
];
