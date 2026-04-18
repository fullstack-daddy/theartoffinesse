import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  tagline?: string
  ctaText?: string
  ctaLink?: string
  backgroundColor?: string
  className?: string
}

export default function HeroSection({
  title,
  subtitle,
  tagline,
  ctaText = 'Book Now',
  ctaLink = '/contact',
  backgroundColor = 'bg-teal',
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`w-full min-h-screen flex items-center justify-center relative overflow-hidden ${backgroundColor} ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(200, 30, 126, 0.3)'}} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(201, 169, 110, 0.3)', animationDelay: '1s'}} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
        {tagline && (
          <p className="text-sm md:text-base font-sans tracking-widest text-gold mb-4 uppercase animate-fade-up">
            {tagline}
          </p>
        )}
        
        <h1 className="text-5xl md:text-7xl font-great-vibes text-white mb-6 leading-tight animate-fade-up stagger-1">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl font-playfair text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up stagger-2 text-balance">
            {subtitle}
          </p>
        )}

        {ctaText && (
          <Link
            href={ctaLink}
            className="inline-block px-8 py-3 bg-magenta text-white font-sans font-semibold rounded-md hover:opacity-90 transition-all hover-lift mt-4 animate-fade-up stagger-3"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}
