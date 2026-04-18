interface QuoteSectionProps {
  quote: string
  author?: string
  backgroundColor?: string
  className?: string
}

export default function QuoteSection({
  quote,
  author,
  backgroundColor = 'bg-teal',
  className = '',
}: QuoteSectionProps) {
  return (
    <section className={`w-full py-16 md:py-24 ${backgroundColor} ${className}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="mb-6">
          <p className="text-2xl md:text-4xl font-cormorant italic text-white leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        {author && (
          <p className="text-sm font-sans text-gold tracking-widest uppercase">
            {author}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-px bg-gold"></div>
        </div>
      </div>
    </section>
  )
}
