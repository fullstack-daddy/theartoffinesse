import Link from 'next/link'
import Image from 'next/image'
import Monogram from '@/components/branding/Monogram'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-off-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-gold/30">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="h-12 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/logos/secondary-logo.png"
                alt="The Art of Finesse"
                width={160}
                height={48}
                className="h-22 w-22 rounded-full object-contain filter brightness-225"
              />
            </Link>
            <p className="text-sm font-sans text-off-white/70 max-w-xs">
              Premium event planning and styling for luxury celebrations
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-sm font-sans font-semibold tracking-widest text-gold mb-2">
              EXPLORE
            </h3>
            <nav className="flex flex-col gap-2 text-center">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-off-white/70 hover:text-magenta transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-sm font-sans font-semibold tracking-widest text-gold mb-2">
              CONNECT
            </h3>
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
                  className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-magenta hover:text-charcoal transition-all"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-off-white/70 mt-4">
              hello@artoffinesse.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-off-white/50 font-sans">
          <p>&copy; {currentYear} The Art of Finesse. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-off-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-off-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
