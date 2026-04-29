import type { Metadata } from 'next'
import SectionDivider from '@/components/sections/SectionDivider'
import BookingForm from '@/components/forms/BookingForm'
import MapComponent from '@/components/map/MapComponent'
import Monogram from '@/components/branding/Monogram'

export const metadata: Metadata = {
  title: 'Contact The Art of Finesse | Luxury Event Planning',
  description: 'Get in touch with our team to discuss your luxury event. Request a consultation or book your celebration with The Art of Finesse.',
  keywords: ['contact event planner', 'book event planning', 'event consultation', 'luxury event inquiry'],
  openGraph: {
    title: 'Contact Us',
    description: 'Reach out to discuss your luxury event planning needs.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-great-vibes text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-off-white/80 font-cormorant max-w-2xl mx-auto">
            Let&apos;s discuss how we can create something extraordinary
            together
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Contact Info - Teal */}
        <div className="bg-teal p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-sm">
            <h2 className="text-4xl font-great-vibes text-white mb-8">
              Connect With Us
            </h2>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-sans font-semibold tracking-widest text-gold mb-2 uppercase">
                  Email
                </h3>
                <a
                  href="mailto:hello@artoffinesse.com"
                  className="text-white font-sans hover:text-gold transition-colors"
                >
                  info@theartoffinesse.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-sans font-semibold tracking-widest text-gold mb-2 uppercase">
                  Phone
                </h3>
                <a
                  href="tel:+19728857833"
                  className="text-white font-sans hover:text-gold transition-colors"
                >
                  +1 972-885-7833
                </a>
              </div>
              <div>
                <h3 className="text-sm font-sans font-semibold tracking-widest text-gold mb-2 uppercase">
                  Hours
                </h3>
                <p className="text-white/90 font-sans">
                  Monday – Friday: 9 AM – 4 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gold/30">
              <p className="text-xs font-sans text-gold mb-4 uppercase tracking-widest">
                Follow
              </p>
              <div className="flex gap-4">
                {[
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "Pinterest", url: "https://pinterest.com" },
                  { name: "TikTok", url: "https://tiktok.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold hover:bg-gold hover:text-teal transition-all flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <span className="text-xs font-bold">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form - Off-white */}
        <div className="bg-off-white p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-sm">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-2">
              Send us a Message
            </h2>
            <p className="text-charcoal/70 font-sans text-sm mb-8">
              Tell us about your event, and we'll respond within 24 hours.
            </p>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-charcoal/70 font-sans max-w-2xl mx-auto">
              Located in the heart of the city, our studio is ready to welcome
              you
            </p>
          </div>
          <MapComponent />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 6-12 months in advance for weddings and major events. However, we work with shorter timelines when possible.",
              },
              {
                q: "What are your service fees?",
                a: "Our fees vary based on event scope, size, and complexity. We offer customized packages to fit different budgets. Please contact us for specific pricing.",
              },
              {
                q: "Do you work with destination events?",
                a: "Absolutely! We have extensive experience coordinating events across multiple locations and time zones. We handle all logistics and local partnerships.",
              },
              {
                q: "Can you work with my existing vendor list?",
                a: "Yes, we can coordinate with vendors you've already selected. We can also introduce you to our curated network of trusted partners.",
              },
              {
                q: "What if I have specific dietary or accessibility needs?",
                a: "We take all guest needs seriously. We coordinate with vendors to accommodate dietary restrictions, accessibility requirements, and special requests.",
              },
              {
                q: "How do you handle last-minute changes?",
                a: "Our day-of coordination team is trained to handle unexpected changes gracefully. We maintain flexibility while keeping your vision intact.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border-b border-gold/30 pb-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between text-lg font-playfair font-bold text-charcoal group-open:text-teal transition-colors">
                  {item.q}
                  <span className="text-teal group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-charcoal/70 font-sans leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
