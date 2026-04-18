"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "@/components/sections/SectionDivider";
import CTABand from "@/components/sections/CTABand";
import Monogram from "@/public/logos/secondary-logo.png";

const highlights = [
  {
    number: "500+",
    label: "Events Created",
    description:
      "Countless celebrations brought to life with elegance and precision",
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    description:
      "Our clients consistently praise our attention to detail and creativity",
  },
  {
    number: "15+",
    label: "Years of Excellence",
    description: "A decade and a half of crafting unforgettable experiences",
  },
];

const services = [
  {
    icon: "✨",
    title: "Luxury Design",
    description:
      "Bespoke concepts and stunning aesthetics tailored to your vision",
    link: "/services",
  },
  {
    icon: "🎭",
    title: "Event Planning",
    description:
      "Complete coordination from concept through flawless execution",
    link: "/what-we-do",
  },
  {
    icon: "🌟",
    title: "Vendor Curation",
    description:
      "Access to the finest partners in catering, florals, and entertainment",
    link: "/services",
  },
  {
    icon: "🏆",
    title: "Premium Service",
    description:
      "White-glove coordination ensuring every detail exceeds expectations",
    link: "/what-we-do",
  },
];

const featuredEvents = [
  {
    image: "/events/luxury-wedding.jpg",
    title: "Luxury Wedding",
    category: "Wedding",
    location: "New York City",
  },
  {
    image: "/events/gala-evening.jpg",
    title: "Corporate Gala",
    category: "Corporate",
    location: "The Plaza Hotel",
  },
  {
    image: "/events/destination-celebration.jpg",
    title: "Destination Event",
    category: "Destination",
    location: "Amalfi Coast",
  },
];

const whyUs = [
  "Personalized consultation and concept development",
  "Access to premium vendors and venues",
  "Seamless coordination from planning through execution",
  "Attention to every detail, no matter how small",
  "Stress-free experience from start to finish",
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════
          HERO — full-bleed, bottom-left anchored, editorial
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/events/luxury-wedding.jpg"
            alt="Luxury Event Planning Hero"
            fill
            className="object-cover scale-[1.03]"
            priority
          />
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/30 to-transparent" />
        </div>

        {/* Gold corner ornament — top right */}
        <div className="absolute top-8 right-8 z-10 opacity-35 pointer-events-none hidden md:block">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <path
              d="M12 12 L128 12 L128 128"
              stroke="#C9A96E"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M12 12 L12 128 L128 128"
              stroke="#C9A96E"
              strokeWidth="0.8"
              fill="none"
              opacity="0.35"
            />
            <circle cx="128" cy="12" r="3.5" fill="#C9A96E" opacity="0.9" />
            <circle cx="12" cy="128" r="3.5" fill="#C9A96E" opacity="0.35" />
            <circle cx="12" cy="12" r="2" fill="#C9A96E" opacity="0.6" />
          </svg>
        </div>

        {/* Bottom-left content block */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-2xl">
            {/* Monogram */}
            <div className="mb-8 animate-fade-up">
              <Image
                src={Monogram}
                alt="The Art of Finesse"
                width={80}
                height={80}
                className="h-20 w-auto object-contain brightness-[2] opacity-90"
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6 animate-fade-up">
              <span className="block w-10 h-px bg-gold opacity-70 flex-shrink-0" />
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/85 font-semibold">
                Luxury Event Planning &amp; Styling
              </p>
            </div>

            {/* Main heading — great vibes script */}
            <h1 className="font-great-vibes text-7xl md:text-8xl lg:text-[110px] text-white leading-[0.9] mb-6 animate-fade-up stagger-1">
              The Art of Finesse
            </h1>

            {/* Sub-heading — playfair */}
            <p className="font-playfair italic text-xl md:text-2xl text-gold/85 mb-7 animate-fade-up stagger-2">
              Luxury Event Planning for the Discerning Client
            </p>

            {/* Body */}
            <p className="font-sans text-base md:text-lg text-white/65 leading-[1.85] max-w-lg mb-11 animate-fade-up stagger-3">
              We transform your vision into an unforgettable celebration. From
              intimate gatherings to grand destination events, every detail is
              orchestrated with precision, elegance, and refined taste.
            </p>

            {/* CTA pair */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
              <Link
                href="/book-us"
                className="group relative px-10 py-4 bg-magenta text-white font-sans font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:opacity-90"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">Book Your Event</span>
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-4 border border-white/30 text-white font-sans font-semibold text-sm tracking-widest uppercase hover:border-gold/60 hover:text-gold transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical brand text — right edge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 opacity-25">
          <span className="block w-px h-16 bg-gold" />
          <p
            className="font-sans text-[9px] tracking-[0.35em] text-gold uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Where Every Detail Is Elevated Into Art
          </p>
          <span className="block w-px h-16 bg-gold" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="block w-px h-10 bg-white animate-pulse" />
          <p className="font-sans text-[9px] text-white tracking-[0.3em] uppercase">
            Scroll
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DIVIDER
      ═══════════════════════════════════════════════════ */}
      <div className="w-full h-px bg-gold/20" />
      <div className="flex justify-center py-10 bg-off-white">
        <SectionDivider />
      </div>
      <div className="w-full h-px bg-gold/15" />

      {/* ═══════════════════════════════════════════════════
          WHAT WE OFFER — asymmetric layout
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-off-white relative overflow-hidden">
        {/* Faint background ornament */}
        <div className="absolute -right-24 top-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 500 500" fill="none">
            <circle cx="500" cy="0" r="400" stroke="#006D77" strokeWidth="1" />
            <circle
              cx="500"
              cy="0"
              r="280"
              stroke="#006D77"
              strokeWidth="0.5"
            />
            <circle
              cx="500"
              cy="0"
              r="160"
              stroke="#006D77"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header — left-aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-up">
              <p className="text-magenta font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-5">
                Our Excellence
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] mb-5">
                What Sets
                <br />
                <span className="font-playfair italic font-normal text-teal">
                  Us Apart
                </span>
              </h2>
              <div className="w-14 h-px bg-gold mb-0" />
            </div>
            <div className="flex items-end animate-fade-up stagger-1">
              <p className="font-sans text-charcoal/55 text-base leading-[1.9]">
                We blend creativity, expertise, and meticulous attention to
                detail to create experiences that transcend expectations — where
                every element is considered, every moment is intentional.
              </p>
            </div>
          </div>

          {/* Services grid — 4-up with hover elevation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, idx) => (
              <Link
                key={service.title}
                href={service.link}
                className="group relative p-8 bg-white border border-gold/15 hover:border-teal transition-all duration-500 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Corner accent appears on hover */}
                <span className="absolute top-0 right-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-500 border-t-2 border-r-2 border-teal opacity-0 group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-500 border-b-2 border-l-2 border-teal opacity-0 group-hover:opacity-100" />

                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                {/* Gold accent line */}
                <div className="w-8 h-px bg-gold/50 mb-5 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-playfair font-bold text-charcoal text-lg mb-3 group-hover:text-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-charcoal/55 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-[10px] text-teal tracking-[0.2em] uppercase font-semibold">
                    Learn more
                  </span>
                  <span className="text-teal text-xs">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS — teal band with great-vibes numerals
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-charcoal overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="cgrid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cgrid)" />
          </svg>
        </div>

        {/* Decorative arc */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none">
          <svg viewBox="0 0 600 300" fill="none">
            <path
              d="M 0 300 Q 300 0 600 300"
              stroke="#C9A96E"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Label */}
          <p className="text-center font-sans text-[10px] uppercase tracking-[0.35em] text-gold/50 font-semibold mb-14 animate-fade-up">
            Our Legacy in Numbers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {highlights.map((item, idx) => (
              <div
                key={item.label}
                className={`text-center px-10 py-8 animate-fade-up
                  ${idx < highlights.length - 1 ? "md:border-r md:border-gold/15" : ""}
                `}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Great-vibes numeral */}
                <p className="font-great-vibes text-7xl md:text-8xl text-gold mb-2 leading-none">
                  {item.number}
                </p>
                {/* Top border accent */}
                <div className="w-10 h-px bg-gold/40 mx-auto mb-4" />
                <p className="font-playfair font-bold text-white text-lg mb-2">
                  {item.label}
                </p>
                <p className="font-cormorant italic text-white/45 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PORTFOLIO — overlapping editorial grid
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 animate-fade-up">
            <div>
              <p className="text-teal font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                Recent Work
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05]">
                Featured
                <br />
                <span className="font-playfair italic font-normal text-teal">
                  Events
                </span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 font-sans text-xs text-charcoal/50 tracking-[0.2em] uppercase hover:text-magenta transition-colors duration-300"
            >
              <span>Explore Full Portfolio</span>
              <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </div>

          {/* Staggered masonry-like grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large left card */}
            <div className="md:col-span-7 group relative h-[480px] md:h-[560px] overflow-hidden animate-fade-up">
              <Image
                src={featuredEvents[0].image}
                alt={featuredEvents[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              {/* Category pill */}
              <div className="absolute top-5 left-5">
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/80 bg-teal/80 px-3 py-1.5 font-semibold">
                  {featuredEvents[0].category}
                </span>
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-sans text-xs text-gold/80 tracking-widest uppercase mb-2">
                  {featuredEvents[0].location}
                </p>
                <h3 className="font-playfair text-3xl font-bold text-white mb-3">
                  {featuredEvents[0].title}
                </h3>
                <div className="w-0 group-hover:w-12 h-px bg-gold transition-all duration-500" />
              </div>
            </div>

            {/* Two stacked right cards */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {featuredEvents.slice(1).map((event, idx) => (
                <div
                  key={event.title}
                  className="group relative flex-1 h-[220px] md:h-auto overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                  {/* Category pill */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/80 bg-magenta/70 px-3 py-1 font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-sans text-[10px] text-gold/70 tracking-widest uppercase mb-1">
                      {event.location}
                    </p>
                    <h3 className="font-playfair text-xl font-bold text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="text-center mt-10 md:hidden">
            <Link
              href="/portfolio"
              className="inline-block px-10 py-3 bg-magenta text-white font-sans font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US — split with image overlap
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Faint teal wash behind image side */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-teal/[0.03]" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image — with overlapping gold frame accent */}
            <div className="relative animate-fade-up">
              {/* Offset gold border frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 pointer-events-none z-0" />
              <div className="relative z-10 h-[480px] overflow-hidden">
                <Image
                  src="/events/intimate-gathering.jpg"
                  alt="Premium Event Coordination"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating stats badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-charcoal px-7 py-5 hidden md:block">
                <p className="font-great-vibes text-4xl text-gold leading-none">
                  15+
                </p>
                <p className="font-sans text-[9px] text-white/50 tracking-[0.2em] uppercase mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-up stagger-1">
              <p className="text-magenta font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-5">
                Our Approach
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-[1.08] mb-4">
                Elegance in
                <br />
                <span className="font-playfair italic font-normal text-teal">
                  Every Detail
                </span>
              </h2>
              <div className="w-12 h-px bg-gold mb-7" />
              <p className="font-sans text-charcoal/60 text-base leading-[1.9] mb-5">
                We don&apos;t just plan events — we orchestrate experiences. Our
                team of seasoned professionals brings together creativity,
                expertise, and an unwavering commitment to excellence.
              </p>
              <p className="font-sans text-charcoal/50 text-base leading-[1.9] mb-9">
                Every client receives our full attention, from the first
                conversation to the final flourish. Nothing is too small to
                consider. Nothing is left to chance.
              </p>

              {/* Feature list */}
              <ul className="space-y-4 mb-10">
                {whyUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-2">
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                      >
                        <path
                          d="M1 5l4 4L13 1"
                          stroke="#C9A96E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-sans text-charcoal/70 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-us"
                className="group relative px-10 py-4 bg-magenta text-white font-sans font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:opacity-90"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">Start Planning Today</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIAL STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-teal relative overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="tgrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tgrid)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center">
          {/* Ornamental quotes */}
          <p className="font-great-vibes text-8xl text-gold/20 leading-none mb-0 -mb-4 select-none">
            &ldquo;
          </p>
          <p className="font-playfair italic text-xl md:text-2xl text-white/90 leading-[1.6] mb-6 animate-fade-up">
            The Art of Finesse didn&apos;t just plan our wedding — they created
            a world we still dream about. Every detail was beyond what we could
            have imagined.
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="block w-8 h-px bg-gold/40" />
            <p className="font-sans text-[10px] tracking-[0.3em] text-gold/70 uppercase font-semibold">
              Sarah &amp; James, New York
            </p>
            <span className="block w-8 h-px bg-gold/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DIVIDER + FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <div className="flex justify-center py-10 bg-off-white">
        <SectionDivider />
      </div>

      <CTABand
        title="LET'S CREATE MAGIC TOGETHER"
        subtitle="Ready to celebrate in style? Your dream event deserves the expertise of The Art of Finesse."
        ctaText="Book Your Consultation"
        ctaLink="/book-us"
      />
     
    </div>
  );
}
