import type { Metadata } from 'next'
import Image from 'next/image'
import SectionDivider from '@/components/sections/SectionDivider'
import CTABand from '@/components/sections/CTABand'
import Link from 'next/link'
import Monogram from '@/components/branding/Monogram'

export const metadata: Metadata = {
  title: 'Event Planning Services | The Art of Finesse',
  description: 'Explore our comprehensive luxury event planning services including design, coordination, catering, and destination event management.',
  keywords: ['event planning services', 'luxury event design', 'event coordination', 'wedding planning services', 'corporate event planning'],
  openGraph: {
    title: 'Our Event Planning Services',
    description: 'From concept to execution, we handle every aspect of your luxury event with precision and elegance.',
    type: 'website',
  },
}

export default function WhatWeDoPage() {
  const services = [
    {
      title: 'Event Planning & Design',
      description:
        'From concept to execution, we orchestrate every element of your event with meticulous attention to detail. We handle venue selection, vendor coordination, timeline management, and creative direction—allowing you to focus on enjoying the moment.',
      highlights: ['Concept Development', 'Vendor Selection', 'Timeline Management', 'Budget Oversight'],
      image: '/events/event-coordination.jpg',
    },
    {
      title: 'Luxury Styling & Aesthetics',
      description:
        'Your event should reflect your unique vision and refined taste. We create bespoke design concepts, curate color palettes, source exceptional décor, and ensure every visual element tells your story with elegance and impact.',
      highlights: ['Bespoke Design', 'Color Curation', 'Décor Sourcing', 'Visual Direction'],
      image: '/events/venue-transformation.jpg',
    },
    {
      title: 'Premium Catering & Service',
      description:
        'We curate exceptional culinary experiences and coordinate seamless service. From gourmet menus to wine pairings, our catering partners deliver sophistication and excellence at every course.',
      highlights: ['Gourmet Menus', 'Wine Pairing', 'Service Coordination', 'Dietary Accommodation'],
      image: '/events/fine-dining.jpg',
    },
    {
      title: 'Day-of Coordination',
      description:
        "Let us manage the logistics while you savor your celebration. Our coordination team ensures flawless execution, manages vendor timing, handles every detail, and maintains the vision you've worked so hard to create.",
      highlights: ['Vendor Management', 'Timeline Execution', 'Problem-Solving', 'Guest Experience'],
      image: '/events/premium-florals.jpg',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-teal py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-great-vibes text-white mb-4">
            What We Do
          </h1>
          <p className="text-xl text-white/90 font-cormorant max-w-2xl mx-auto">
            We transform visions into unforgettable experiences
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Services */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.title} className="mb-20 last:mb-0">
              {/* Alternating layout */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-reverse' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-square rounded-sm overflow-hidden border border-gold/30 hover-glow ${
                    index % 2 === 1 ? 'md:order-last' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-charcoal/70 font-sans leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                        <span className="text-charcoal font-sans text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 border-2 border-teal text-teal font-sans font-semibold rounded-md hover:bg-teal hover:text-white transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {index < services.length - 1 && <SectionDivider />}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-teal/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We listen, learn, and understand your vision and goals',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We craft detailed timelines, budgets, and design concepts',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We bring your vision to life with precision and creativity',
              },
              {
                step: '04',
                title: 'Celebration',
                description: 'We sit back and watch magic happen at your event',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <p className="text-5xl font-playfair font-bold text-teal/20 mb-4">
                  {item.step}
                </p>
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to Start Your Journey?"
        subtitle="Let's discuss how we can bring your vision to life"
        ctaText="Get in Touch"
        ctaLink="/contact"
        backgroundColor="magenta"
      />
    </div>
  )
}
