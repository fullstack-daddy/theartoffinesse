import type { Metadata } from 'next'
import SectionDivider from '@/components/sections/SectionDivider'
import CTABand from '@/components/sections/CTABand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Event Services | Luxury Wedding & Event Planning',
  description: 'Discover our full range of premium event services including luxury styling, vendor curation, catering coordination, and day-of event management.',
  keywords: ['premium event services', 'luxury wedding services', 'event styling', 'vendor coordination', 'event catering'],
  openGraph: {
    title: 'Premium Event Services',
    description: 'Complete event planning services tailored for luxury celebrations and discerning clients.',
    type: 'website',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Wedding Planning',
      description: 'From intimate ceremonies to grand celebrations, we orchestrate every detail of your perfect day.',
      features: [
        'Full event planning & coordination',
        'Vendor selection & management',
        'Design & aesthetic direction',
        'Day-of coordination',
        'Custom timeline management',
      ],
    },
    {
      title: 'Corporate Events',
      description: 'Professional, polished, and perfectly executed events that strengthen your brand and delight attendees.',
      features: [
        'Strategic event planning',
        'Brand alignment & theming',
        'Vendor coordination',
        'Logistics management',
        'Technical support',
      ],
    },
    {
      title: 'Private Celebrations',
      description: 'Milestone birthdays, anniversaries, and intimate gatherings crafted with personal care and creativity.',
      features: [
        'Personalized concepts',
        'Budget flexibility',
        'Creative design',
        'Vendor selection',
        'Guest experience optimization',
      ],
    },
    {
      title: 'Luxury Galas & Soirées',
      description: 'High-end, sophisticated events designed to impress and inspire your most discerning guests.',
      features: [
        'Exclusive venue selection',
        'Premium vendor partnerships',
        'Bespoke design concepts',
        'VIP experience management',
        'Attention to every detail',
      ],
    },
    {
      title: 'Destination Events',
      description: 'Complex multi-day celebrations coordinated seamlessly across locations and time zones.',
      features: [
        'Location scouting',
        'Travel coordination',
        'Logistics management',
        'Local vendor partnerships',
        'Unified experience design',
      ],
    },
    {
      title: 'Styling & Design Services',
      description: 'Bespoke aesthetic direction that transforms spaces and reflects your unique style.',
      features: [
        'Color palette development',
        'Décor sourcing & curation',
        'Design mood boards',
        'Visual continuity',
        'Trend-forward & timeless elements',
      ],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-magenta py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-great-vibes text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 font-cormorant max-w-2xl mx-auto">
            Complete solutions for every type of event
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 border-2 border-gold/30 hover:border-teal transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'both' }}
              >
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3 group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm font-sans">
                      <span className="text-gold mt-1 flex-shrink-0">✓</span>
                      <span className="text-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 text-teal font-sans font-semibold text-sm border-b-2 border-teal hover:border-magenta hover:text-magenta transition-colors"
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 md:py-24 bg-teal/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Custom Packages Available</h2>
            <p className="text-charcoal/70 font-sans max-w-2xl mx-auto">
              We understand that every event is unique. We offer flexible, customizable packages tailored to your specific needs, budget, and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                description: 'Event planning and day-of coordination for intimate gatherings',
              },
              {
                name: 'Premium',
                description: 'Full planning, design, and coordination for events up to 200 guests',
              },
              {
                name: 'Bespoke',
                description: 'Fully customized, luxury events with unlimited scope and scale',
              },
            ].map((pkg, index) => (
              <div
                key={pkg.name}
                className="p-8 text-center border border-charcoal/20 hover:border-teal transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">
                  {pkg.name}
                </h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <p className="text-xs font-sans text-teal font-semibold tracking-widest uppercase">
                  Custom Pricing
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Let's Discuss Your Event"
        subtitle="Schedule a consultation with our team"
        ctaText="Get in Touch"
        ctaLink="/contact"
        backgroundColor="teal"
      />
    </div>
  )
}
