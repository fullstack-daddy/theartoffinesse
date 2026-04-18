import type { Metadata } from 'next'
import SectionDivider from '@/components/sections/SectionDivider'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Client Testimonials | The Art of Finesse Reviews',
  description: 'Read reviews and testimonials from satisfied clients about their luxury event experiences with The Art of Finesse.',
  keywords: ['event planner reviews', 'client testimonials', 'luxury event reviews', 'event coordinator feedback'],
  openGraph: {
    title: 'Client Testimonials',
    description: 'Hear from our delighted clients about their unforgettable event experiences.',
    type: 'website',
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        'The Art of Finesse didn\'t just plan our wedding. They created an experience that will be etched in our hearts forever. Every detail was perfection.',
      author: 'Sarah & Michael',
      event: 'Wedding - Spring 2023',
    },
    {
      quote:
        'Working with this team was effortless. They took our vision and elevated it beyond what we imagined. Absolutely exceptional.',
      author: 'Jennifer Park',
      event: 'Corporate Gala - Fall 2023',
    },
    {
      quote:
        'From the first consultation to the last dance, they managed everything with grace and precision. Highly recommended for anyone wanting perfection.',
      author: 'David & Emma',
      event: 'Wedding - Summer 2024',
    },
    {
      quote:
        'Our milestone birthday celebration was transformed into something truly magical. The attention to detail was extraordinary.',
      author: 'Robert Chen',
      event: 'Birthday Celebration - Winter 2023',
    },
    {
      quote:
        'They understood our brand vision immediately and executed it flawlessly. Our launch event was talked about for months.',
      author: 'Catherine Thompson',
      event: 'Brand Launch - Spring 2024',
    },
    {
      quote:
        'Impeccable coordination, beautiful design, and genuine care for every detail. They made our destination wedding feel effortless.',
      author: 'Lisa & James',
      event: 'Destination Wedding - Summer 2024',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-teal py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-great-vibes text-white mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-white/90 font-cormorant max-w-2xl mx-auto">
            What our clients have to say about their experiences
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 border-2 border-gold/40 hover:border-gold/70 transition-all group animate-fade-up"
                style={{ animationDelay: `${(index % 6) * 75}ms`, animationFillMode: 'both' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-off-white/90 font-cormorant text-lg leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-gold/30 pt-4">
                  <p className="font-playfair font-bold text-white mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-gold text-xs font-sans tracking-widest uppercase">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Clients Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Personalized Attention',
                description:
                  'We treat each event as if it were our own, bringing dedication and care to every detail.',
              },
              {
                title: 'Creative Excellence',
                description:
                  'Our team combines innovation with timeless elegance to create truly memorable experiences.',
              },
              {
                title: 'Flawless Execution',
                description:
                  'From planning to day-of coordination, we ensure every element runs smoothly and beautifully.',
              },
              {
                title: 'Trusted Partnership',
                description:
                  'Our clients become collaborators. We listen, understand, and bring their vision to life.',
              },
            ].map((item, index) => (
              <div key={item.title} className="flex gap-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-playfair font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 font-sans text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider showMonogram />

      {/* CTA */}
      <CTABand
        title="Join Our Circle of Satisfied Clients"
        subtitle="Experience the difference that precision and elegance can make"
        ctaText="Book Your Event"
        ctaLink="/contact"
        backgroundColor="magenta"
      />
    </div>
  )
}
