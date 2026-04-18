import Link from 'next/link'

interface CTABandProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundColor?: 'teal' | 'magenta' | 'charcoal' | 'gold'
  className?: string
}

const bgColors = {
  teal: 'bg-teal',
  magenta: 'bg-magenta',
  charcoal: 'bg-charcoal',
  gold: 'bg-gold',
}

const textColors = {
  teal: 'text-white',
  magenta: 'text-white',
  charcoal: 'text-off-white',
  gold: 'text-charcoal',
}

export default function CTABand({
  title,
  subtitle,
  ctaText = 'Learn More',
  ctaLink = '#',
  backgroundColor = 'teal',
  className = '',
}: CTABandProps) {
  return (
    <section className={`w-full py-16 md:py-24 ${bgColors[backgroundColor]} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-5xl font-playfair font-bold mb-4 ${textColors[backgroundColor]}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl font-cormorant mb-8 ${textColors[backgroundColor]} opacity-90`}>
            {subtitle}
          </p>
        )}
        <Link
          href={ctaLink}
          className={`inline-block px-8 py-3 ${
            backgroundColor === 'gold'
              ? 'bg-charcoal text-white hover:opacity-90'
              : 'bg-white text-charcoal hover:opacity-90'
          } font-sans font-semibold rounded-md transition-opacity`}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
