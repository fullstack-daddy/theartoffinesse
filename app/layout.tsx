import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Cormorant_Upright, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const cormorant = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant'
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes'
})

export const metadata: Metadata = {
  metadataBase: new URL("https://theartoffinesse.com"),
  title: "The Art of Finesse | Luxury Event Planning & Coordination",
  description:
    "Premium event planning and styling services. We specialize in luxury weddings, corporate galas, destination events, and bespoke celebrations for discerning clients.",
  keywords: [
    "luxury event planning",
    "wedding planner",
    "event coordinator",
    "destination wedding",
    "corporate events",
    "premium event design",
    "event styling",
  ],
  authors: [{ name: "The Art of Finesse" }],
  creator: "The Art of Finesse",
  publisher: "The Art of Finesse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theartoffinesse.com",
    title: "The Art of Finesse | Luxury Event Planning",
    description:
      "Premium event planning and coordination for luxury celebrations worldwide",
    siteName: "The Art of Finesse",
    images: [
      {
        url: "/logos/secondary-logo.png",
        width: 1200,
        height: 630,
        alt: "The Art of Finesse Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of Finesse | Luxury Event Planning",
    description: "Premium event planning and coordination services",
    images: ["/logos/secondary-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://theartoffinesse.com",
  },
  icons: {
    icon: [
      {
        url: "/logos/secondary-logo-big.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logos/secondary-logo-big.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logos/secondary-logo-big.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logos/secondary-logo-big.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#006D77" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Art of Finesse" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'The Art of Finesse',
              description: 'Premium luxury event planning and coordination',
              url: 'https://theartoffinesse.com',
              logo: 'https://theartoffinesse.com/logos/primary-logo.png',
              image: 'https://theartoffinesse.com/logos/primary-logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Elegant Avenue',
                addressLocality: 'Metropolitan City',
                addressRegion: 'ST',
                postalCode: '12345',
                addressCountry: 'US',
              },
              telephone: '+1-234-567-8900',
              email: 'hello@artoffinesse.com',
              sameAs: [
                'https://www.instagram.com/artoffinesse',
                'https://www.facebook.com/artoffinesse',
              ],
            }),
          }}
        />

        {/* Additional Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Art of Finesse',
              url: 'https://theartoffinesse.com',
              logo: 'https://theartoffinesse.com/logos/primary-logo.png',
              description: 'Luxury event planning and coordination services for weddings, corporate events, and destination celebrations',
              knowsAbout: ['Wedding Planning', 'Corporate Event Planning', 'Event Coordination', 'Event Design', 'Luxury Services'],
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
            }),
          }}
        />
      </head>
      <body className="bg-off-white text-charcoal font-sans antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
