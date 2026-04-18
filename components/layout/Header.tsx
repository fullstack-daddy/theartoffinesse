// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "@/components/modals/BookingModal";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


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

  const openModal = () => {
    console.log("Opening modal");
    setBookingModalOpen(true);
  };

  const router = useRouter();

  const closeModal = () => {
    console.log("Closing modal");
    setBookingModalOpen(false);
  };

  console.log("Modal state:", bookingModalOpen);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-offwhite">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-28 flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center relative -top:-2 gap-8">
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
              width={520}
              height={96}
              priority
              className="h-40 w-auto relative top-3 object-contain filter brightness-125"
            />
          </Link>

          {/* Right Navigation + CTA */}
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
        </nav>
      </header>

      <BookingModal isOpen={bookingModalOpen} onClose={closeModal} />
    </>
  );
}
