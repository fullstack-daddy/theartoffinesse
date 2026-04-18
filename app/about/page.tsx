import type { Metadata } from 'next'
import SectionDivider from '@/components/sections/SectionDivider'
import QuoteSection from '@/components/sections/QuoteSection'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'About The Art of Finesse | Luxury Event Planning Company',
  description: 'Learn about our journey, expertise, and commitment to creating unforgettable luxury events. Discover what makes us the premier event planning company.',
  keywords: ['about event planner', 'luxury event company', 'professional event coordination', 'event planning expertise'],
  openGraph: {
    title: 'About The Art of Finesse',
    description: 'Premium event planning company specializing in luxury celebrations and bespoke events.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left: Teal + Brand Name */}
        <div className="bg-teal flex items-center justify-center p-8 md:p-12">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-great-vibes text-white mb-4">
              About Us
            </h1>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>
        </div>

        {/* Right: Off-white + Story */}
        <div className="bg-off-white flex items-center justify-center p-8 md:p-12">
          <div className="max-w-lg">
            <p className="text-lg font-cormorant text-charcoal leading-relaxed mb-6">
              We believe that every event tells a story. A story of passion, purpose, and the people who matter most.
            </p>
            <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
              The Art of Finesse was founded on the principle that exceptional events are built on three cornerstones: meticulous planning, refined aesthetics, and genuine care. We don't just plan events—we craft experiences that linger in memory long after the last toast.
            </p>
            <p className="text-charcoal/70 font-sans leading-relaxed">
              For over a decade, we've had the privilege of bringing visions to life for discerning clients who demand nothing less than perfection.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: 'Integrity',
                description: 'We stand by our commitments with unwavering professionalism',
              },
              {
                value: 'Innovation',
                description: 'We push creative boundaries while honoring timeless elegance',
              },
              {
                value: 'Intimacy',
                description: 'We treat each event as a deeply personal endeavor',
              },
              {
                value: 'Impact',
                description: 'We measure success by the joy and memories we create',
              },
            ].map((item, index) => (
              <div
                key={item.value}
                className="p-6 border border-gold/30 hover:border-teal transition-all text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-playfair font-bold text-lg">
                    {item.value[0]}
                  </span>
                </div>
                <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">
                  {item.value}
                </h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider showMonogram />

      {/* Quote */}
      <QuoteSection
        quote="We don't chase trends. We set them. And we do it with grace."
        author="The Art of Finesse"
      />

      {/* Team/Experience Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Experience</h2>
            <p className="text-charcoal/70 font-sans max-w-2xl mx-auto">
              Our team brings together years of expertise in event planning, design, and coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: '500+', label: 'Events Coordinated' },
              { number: '10+', label: 'Years of Excellence' },
              { number: '98%', label: 'Client Satisfaction Rate' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 border-b-4 border-teal animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <p className="text-5xl font-playfair font-bold text-teal mb-2">
                  {stat.number}
                </p>
                <p className="text-charcoal font-sans font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Let's Create Something Extraordinary"
        subtitle="We're ready to bring your vision to life"
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        backgroundColor="magenta"
      />
    </div>
  )
}
