// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "@/components/modals/BookingModal";
import { Menu, X } from "lucide-react"; // icons for mobile toggle

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
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const closeModal = () => setBookingModalOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-offwhite">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Left Navigation (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-sans font-medium text-charcoal hover:text-teal transition-colors tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logos/primary-logo.png"
              alt="The Art of Finesse - Luxury Event Planning"
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain filter brightness-125"
            />
          </Link>

          {/* Right Navigation + CTA (desktop) */}
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
              className="px-6 py-2 bg-magenta text-white font-sans font-semibold text-sm rounded-md hover:opacity-90 transition-opacity cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-charcoal hover:text-teal transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-offwhite border-t border-gold/30 px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-sans font-medium text-charcoal hover:text-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-us"
              className="block w-full text-center px-6 py-3 bg-magenta text-white font-sans font-semibold rounded-md hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </header>

      <BookingModal isOpen={bookingModalOpen} onClose={closeModal} />
    </>
  );
}
