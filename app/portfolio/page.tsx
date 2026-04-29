import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionDivider from '@/components/sections/SectionDivider'
import CTABand from '@/components/sections/CTABand'
import Monogram from '@/components/branding/Monogram'

export const metadata: Metadata = {
  title: 'Event Portfolio | Luxury Weddings & Celebrations',
  description: 'View our portfolio of exquisite luxury events including weddings, galas, destination celebrations, and exclusive private events.',
  keywords: ['event portfolio', 'luxury weddings', 'event photography', 'luxury celebrations', 'destination weddings'],
  openGraph: {
    title: 'Our Event Portfolio',
    description: 'A showcase of our most beautiful luxury events and celebrations.',
    type: 'website',
  },
}

const portfolioEvents = [
  {
    id: 1,
    title: "Luxury Wedding Celebration",
    category: "Wedding",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777450371/luxury-wedding_wlrrzf.jpg",
    description:
      "An intimate yet grand celebration featuring custom teal and gold décor, featuring six-course fine dining and live orchestration.",
    highlights: ["Custom Design", "Fine Dining", "Live Entertainment"],
  },
  {
    id: 2,
    title: "Corporate Gala Evening",
    category: "Corporate",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777469149/gala-evening_wgj1of.png",
    description:
      "Sophisticated gala for 300 distinguished guests, featuring innovative design and curated entertainment.",
    highlights: ["Strategic Design", "Entertainment", "Networking Experience"],
  },
  {
    id: 3,
    title: "Intimate Luxury Gathering",
    category: "Private",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777450370/intimate-gathering_lfk9ea.jpg",
    description:
      "An elegant private celebration for close family and friends with refined ambiance and personalized styling.",
    highlights: ["Intimate Setting", "Bespoke Styling", "Premium Service"],
  },
  {
    id: 4,
    title: "Milestone Birthday Gala",
    category: "Birthday",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777450372/milestone-birthday_crlkp7.jpg",
    description:
      "A sophisticated celebration honoring decades of elegance, featuring gold accents and champagne service.",
    highlights: ["Elegant Ambiance", "Premium Details", "Memorable Experience"],
  },
  {
    id: 5,
    title: "Destination Wedding",
    category: "Wedding",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777450370/destination-celebration_xbjpog.jpg",
    description:
      "A breathtaking destination celebration overlooking pristine landscapes with luxury accommodations and curated experiences.",
    highlights: [
      "Destination Expertise",
      "Luxury Experience",
      "Seamless Coordination",
    ],
  },
  {
    id: 6,
    title: "Engagement Party",
    category: "Celebration",
    image:
      "https://res.cloudinary.com/doqtetftz/image/upload/v1777450372/engagement-party_svc8ez.png",
    description:
      "An elegant engagement celebration with champagne toasts, custom florals, and intimate moments.",
    highlights: ["Custom Florals", "Champagne Service", "Elegant Design"],
  },
];

export default function Portfolio() {
  return (
    <div>
      {/* Premium Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 animate-fade-up">
            <Monogram size={80} />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fade-up stagger-1 text-balance">
            Our Portfolio of Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gold font-cormorant italic max-w-3xl mx-auto animate-fade-up stagger-2">
            Discover the events that define luxury, elegance, and impeccable
            execution
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid of Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioEvents.map((event, idx) => (
              <div
                key={event.id}
                className="group overflow-hidden rounded-lg animate-fade-up hover-glow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Event Card */}
                <div className="flex flex-col h-full bg-white hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-charcoal/10">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-magenta/90 text-white px-4 py-2 rounded-full text-sm font-sans font-semibold">
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-playfair font-bold text-charcoal mb-2 group-hover:text-teal transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm font-sans mb-4 leading-relaxed flex-1">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs font-sans font-semibold text-teal bg-teal/10 px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Details Link */}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-teal font-sans font-semibold text-sm hover:text-magenta transition-colors group"
                    >
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Showcase */}
          <div className="bg-white rounded-lg overflow-hidden mb-16 hover-glow animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="animate-fade-up stagger-1">
                <div className="flex items-start gap-4 mb-6">
                  <SectionDivider />
                  <div>
                    <span className="text-magenta font-sans text-sm font-semibold uppercase tracking-widest">
                      Featured
                    </span>
                    <h2 className="text-4xl font-playfair font-bold text-charcoal mt-2">
                      Destination Wedding
                    </h2>
                  </div>
                </div>
                <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
                  Our most ambitious project to date—a breathtaking destination
                  celebration that required seamless coordination across
                  continents. We managed every detail from pre-event planning
                  through post-celebration logistics, ensuring a flawless
                  experience for 150 guests.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Coordinated international travel arrangements",
                    "Custom venue design and setup",
                    "Multi-day event programming",
                    "Luxury accommodations curation",
                    "Emergency contingency planning",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-charcoal/80 font-sans text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-magenta text-white font-sans font-semibold rounded-md hover:opacity-90 transition-all hover-lift"
                >
                  Plan Your Destination Event
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden animate-fade-up stagger-2">
                <Image
                  src="https://res.cloudinary.com/doqtetftz/image/upload/v1777450370/destination-celebration_xbjpog.jpg"
                  alt="Destination Wedding"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="text-center mb-16 animate-fade-up">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8">
              Browse by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "All Events",
                "Weddings",
                "Corporate",
                "Celebrations",
                "Private",
                "Destination",
              ].map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 rounded-full font-sans font-semibold transition-all ${
                    idx === 0
                      ? "bg-magenta text-white"
                      : "bg-charcoal/10 text-charcoal hover:bg-charcoal/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABand
        title="Inspired by our work?  "
        subtitle="Your dream event deserves the expertise and creativity of The Art of Finesse."
        ctaText="LET'S CREATE YOURS"
        ctaLink="/book-us"
      />
    </div>
  );
}
