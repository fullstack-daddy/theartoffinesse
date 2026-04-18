'use client'

import Link from 'next/link'

export interface ServiceCard {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  link?: string
}

interface ServiceCardsProps {
  services: ServiceCard[]
  className?: string
}

export default function ServiceCards({ services, className = '' }: ServiceCardsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {services.map((service, index) => (
        <div
          key={service.id}
          className="group p-6 border border-gold/30 hover:border-teal transition-all duration-300 animate-fade-up"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
        >
          {service.icon && (
            <div className="w-16 h-16 bg-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
              {service.icon}
            </div>
          )}
          <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">{service.title}</h3>
          <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          {service.link && (
            <Link
              href={service.link}
              className="inline-flex items-center gap-2 text-teal font-sans font-semibold text-sm group-hover:text-magenta transition-colors"
            >
              Learn More
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
