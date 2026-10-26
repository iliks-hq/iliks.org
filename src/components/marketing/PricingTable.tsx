/**
 * PricingTable.tsx — Fixed Pricing Component
 *
 * Features:
 * - Highlights popular tiers
 */

export interface PricingTier {
  name: string;
  description: string;
  price: number;
  currencySymbol?: string;
  pricePrefix?: string;
  priceDisplay?: string;
  billingPeriod?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface Props {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export default function PricingTable({ title, subtitle, tiers }: Props) {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-primary text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg">{subtitle}</p>}
        </div>

        {/* Tiers Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const currency = tier.currencySymbol || '$';

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all hover:shadow-md ${
                  tier.isPopular ? 'border-primary' : 'border-foreground/20 hover:border-primary/40'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 right-0 left-0 flex justify-center">
                    <span className="bg-primary rounded-full px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="h-24">
                  <h3 className="text-xl font-semibold text-(--text-primary)">{tier.name}</h3>
                  <p className="mt-2 text-sm text-(--text-tertiary)">{tier.description}</p>
                </div>

                <div className="my-6 flex h-8 flex-wrap items-baseline gap-x-1 gap-y-0.5">
                  <span className="text-foreground text-4xl font-extrabold tracking-tight">
                    {tier.priceDisplay ?? (
                      <>
                        {tier.pricePrefix}
                        {currency}
                        {tier.price}
                      </>
                    )}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {tier.billingPeriod}
                  </span>
                </div>

                <a
                  href={tier.ctaHref}
                  className={`inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                    tier.isPopular
                      ? 'bg-primary text-primary-foreground shadow-primary/25 hover:bg-primary/90 shadow-lg'
                      : 'text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground border'
                  }`}
                >
                  {tier.ctaText}
                </a>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary h-5 w-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
