// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="md:sticky top-0 z-50 border-b border-gold/30 bg-offwhite">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-28 flex items-center justify-between">
          {/* Left side - empty on mobile, left nav on desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-sans font-medium text-charcoal hover:text-teal transition-colors tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo - Better mobile centering & controlled size */}
          <Link
            href="/"
            className="flex-shrink-0 mx-auto md:mx-0 -mt-2 md:mt-0"
          >
            <Image
              src="/logos/primary-logo.png"
              alt="The Art of Finesse - Luxury Event Planning"
              width={520}
              height={96}
              priority
              className="h-26 relative top-3  w-auto md:h-40 object-contain filter brightness-125 transition-all duration-300"
            />
          </Link>

          {/* Right side - Hamburger on mobile, nav + CTA on desktop */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navigation.slice(3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-sans font-medium text-charcoal hover:text-teal transition-colors tracking-wider"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-us"
                className="px-6 py-2.5 bg-magenta text-white font-sans text-center font-semibold text-sm rounded-md hover:opacity-90 transition-all active:scale-95"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger - More premium look */}
            <button
              className="md:hidden p-2 -mr-2 text-charcoal hover:text-teal transition-all active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={32} strokeWidth={2.25} />
              ) : (
                <Menu size={32} strokeWidth={2.25} />
              )}
            </button>
          </div>
        </nav>

        {/* Improved Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-offwhite border-t border-gold/30 px-6 py-8 space-y-6">
            <div className="flex flex-col space-y-6 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-lg font-sans font-medium text-charcoal hover:text-teal transition-colors tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-gold/20">
              <Link
                href="/book-us"
                className="block w-full py-4 bg-magenta text-white font-sans text-center font-semibold text-base rounded-xl hover:opacity-90 active:scale-[0.985] transition-all shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
