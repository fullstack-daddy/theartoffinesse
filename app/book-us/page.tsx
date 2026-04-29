"use client";

import { useState } from "react";
import Image from "next/image";
import SectionDivider from "@/components/sections/SectionDivider";
import CTABand from "@/components/sections/CTABand";
import Monogram from "@/public/logos/secondary-logo.png";

const steps = [
  {
    num: "I",
    title: "Discovery",
    body: "A complimentary consultation where we listen, understand, and begin to shape your vision into possibility.",
  },
  {
    num: "II",
    title: "Curation",
    body: "We assemble a bespoke proposal — venues, styling, vendors, and a concept crafted exclusively around you.",
  },
  {
    num: "III",
    title: "Execution",
    body: "Every element orchestrated to perfection. You arrive as a guest at your own event, present in every moment.",
  },
];

const specialties = [
  {
    icon: "💍",
    title: "Weddings & Galas",
    body: "Intimate ceremonies to grand celebrations, planned with six months of dedicated devotion.",
  },
  {
    icon: "🏛️",
    title: "Corporate Events",
    body: "Conferences, launches, and retreats that reflect the full weight of your brand.",
  },
  {
    icon: "🥂",
    title: "Private Celebrations",
    body: "Birthdays, anniversaries, milestones — designed to be remembered forever.",
  },
];

export default function BookUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    location: "",
    budget: "",
    vision: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, eventType, date, location } = formData;
    if (!name || !email || !phone || !eventType || !date || !location) {
      setError(true);
      setTimeout(() => setError(false), 2400);
      return;
    }
    setLoading(true);
    try {
      console.log("Booking inquiry submitted:", formData);
      await new Promise((r) => setTimeout(r, 1300));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-off-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/doqtetftz/image/upload/v1777450371/luxury-wedding_wlrrzf.jpg"
            alt="Book Your Luxury Event"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Rich layered overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
        </div>

        {/* Decorative gold corner ornament — top right */}
        <div className="absolute top-10 right-10 z-10 opacity-40 pointer-events-none hidden md:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path
              d="M10 10 L110 10 L110 110"
              stroke="#C9A96E"
              strokeWidth="0.75"
              fill="none"
            />
            <path
              d="M10 10 L10 110 L110 110"
              stroke="#C9A96E"
              strokeWidth="0.75"
              fill="none"
              opacity="0.4"
            />
            <circle cx="110" cy="10" r="3" fill="#C9A96E" opacity="0.8" />
            <circle cx="10" cy="110" r="3" fill="#C9A96E" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative gold corner ornament — bottom left */}
        <div className="absolute bottom-10 left-10 z-10 opacity-30 pointer-events-none hidden md:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M5 75 L5 5 L75 5"
              stroke="#C9A96E"
              strokeWidth="0.75"
              fill="none"
            />
            <circle cx="5" cy="5" r="2.5" fill="#C9A96E" />
          </svg>
        </div>

        {/* Hero content — bottom-left anchored */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-2xl">
            {/* Monogram */}
            <div className="mb-8 animate-fade-up">
              <Image
                src={Monogram}
                alt="The Art of Finesse"
                width={72}
                height={72}
                className="h-16 w-auto object-contain brightness-200 opacity-90"
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-5 animate-fade-up">
              <span className="block w-10 h-px bg-gold opacity-70" />
              <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-semibold opacity-90">
                Reserve Your Experience
              </p>
            </div>

            {/* Main heading */}
            <h1 className="font-great-vibes text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-6 animate-fade-up stagger-1">
              Book With Us
            </h1>

            {/* Subheading */}
            <p className="font-playfair italic text-xl md:text-2xl text-gold/90 mb-6 animate-fade-up stagger-2">
              Where every detail becomes art
            </p>

            {/* Description */}
            <p className="font-sans text-base text-white/70 leading-relaxed max-w-lg mb-10 animate-fade-up stagger-3">
              Begin your journey toward an extraordinary event. Share your
              vision and our team will craft something truly unforgettable.
            </p>

            {/* Scroll cue */}
            <div className="flex items-center gap-3 animate-fade-up stagger-4">
              <span className="block w-6 h-px bg-white/40" />
              <p className="font-sans text-xs text-white/40 tracking-widest uppercase">
                Scroll to begin
              </p>
            </div>
          </div>
        </div>

        {/* Vertical text — right edge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 opacity-30">
          <span className="block w-px h-16 bg-gold" />
          <p
            className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            The Art of Finesse
          </p>
          <span className="block w-px h-16 bg-gold" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THIN GOLD BAND
      ═══════════════════════════════════════ */}
      <div className="w-full h-px bg-gold/30" />
      <div className="flex justify-center py-10 bg-off-white">
        <SectionDivider />
      </div>
      <div className="w-full h-px bg-gold/20" />

      {/* ═══════════════════════════════════════
          INTRO ROW
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — editorial text block */}
            <div className="animate-fade-up">
              <p className="text-magenta font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-5">
                An Invitation
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-[1.1] mb-6">
                Every great event begins
                <br />
                <span className="font-playfair italic font-normal text-teal">
                  with a conversation
                </span>
              </h2>
              <div className="w-14 h-px bg-gold mb-7" />
              <p className="font-sans text-charcoal/60 text-base leading-[1.9] mb-5">
                At The Art of Finesse, we believe luxury is not simply what you
                see — it is what you feel. It is the quiet confidence that every
                detail has been considered, every moment has been choreographed,
                every guest has been thought of.
              </p>
              <p className="font-sans text-charcoal/50 text-base leading-[1.9]">
                We invite you to share your vision with us. There are no
                requests too grand, no dreams too ambitious.
              </p>
            </div>

            {/* Right — process steps */}
            <div className="animate-fade-up stagger-2">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-6 py-8 ${i < steps.length - 1 ? "border-b border-charcoal/8" : ""}`}
                >
                  {/* Roman numeral */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-1">
                    <span className="font-playfair italic text-2xl text-gold/60 font-normal leading-none w-8 text-center">
                      {step.num}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="block w-px flex-1 bg-gold/20 min-h-[32px]" />
                    )}
                  </div>
                  {/* Text */}
                  <div>
                    <p className="font-playfair font-bold text-charcoal text-lg mb-2">
                      {step.title}
                    </p>
                    <p className="font-sans text-sm text-charcoal/55 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FORM + SIDEBAR
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        {/* Background ornament */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="400" cy="0" r="300" stroke="#C9A96E" strokeWidth="1" />
            <circle
              cx="400"
              cy="0"
              r="200"
              stroke="#C9A96E"
              strokeWidth="0.5"
            />
            <circle
              cx="400"
              cy="0"
              r="100"
              stroke="#C9A96E"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
          <svg viewBox="0 0 300 300" fill="none">
            <circle cx="0" cy="300" r="250" stroke="#C9A96E" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Begin Here
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">
              Tell Us About Your Event
            </h2>
            <p className="font-playfair italic text-gold/70 text-xl">
              Your extraordinary story starts now
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">
            {/* ── THE FORM ── */}
            <div className="animate-fade-up stagger-1">
              {submitted ? (
                /* SUCCESS */
                <div className="border border-gold/30 bg-white/5 rounded-sm p-16 text-center">
                  {/* Ornamental checkmark */}
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      className="w-full h-full"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#C9A96E"
                        strokeWidth="0.75"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="30"
                        stroke="#C9A96E"
                        strokeWidth="0.5"
                        opacity="0.4"
                      />
                      <path
                        d="M22 40l12 12 24-24"
                        stroke="#C9A96E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-great-vibes text-5xl text-gold mb-3">
                    Thank You
                  </p>
                  <p className="font-playfair italic text-white/70 text-lg mb-4">
                    Your inquiry has been received
                  </p>
                  <div className="w-10 h-px bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-sm text-white/45 leading-relaxed max-w-xs mx-auto">
                    One of our luxury event specialists will be in touch within
                    24 hours to begin crafting your vision.
                  </p>
                </div>
              ) : (
                /* FORM */
                <div
                  id="booking-form"
                  className="border border-gold/40 bg-white/[0.03] rounded-sm p-8 md:p-12"
                >
                  {/* Form grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                    {[
                      {
                        name: "name",
                        label: "Full Name",
                        type: "text",
                        placeholder: "Your full name",
                        required: true,
                      },
                      {
                        name: "email",
                        label: "Email Address",
                        type: "email",
                        placeholder: "your@email.com",
                        required: true,
                      },
                      {
                        name: "phone",
                        label: "Phone Number",
                        type: "tel",
                        placeholder: "+1 000 000 0000",
                        required: true,
                      },
                      {
                        name: "date",
                        label: "Preferred Date",
                        type: "date",
                        placeholder: "",
                        required: true,
                      },
                      {
                        name: "guests",
                        label: "Number of Guests",
                        type: "number",
                        placeholder: "Approximate count",
                        required: false,
                      },
                      {
                        name: "location",
                        label: "Event Location",
                        type: "text",
                        placeholder: "City or venue name",
                        required: true,
                      },
                      {
                        name: "budget",
                        label: "Estimated Budget",
                        type: "text",
                        placeholder: "e.g. $10,000+",
                        required: false,
                      },
                    ].map((field) => (
                      <div key={field.name} className="group">
                        <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-white/35 mb-3 font-semibold group-focus-within:text-gold/70 transition-colors">
                          {field.label}
                          {field.required && " *"}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/60 transition-colors"
                        />
                      </div>
                    ))}

                    {/* Event type — full width select */}
                    <div className="group">
                      <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-white/35 mb-3 font-semibold group-focus-within:text-gold/70 transition-colors">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors cursor-pointer
                          ${formData.eventType ? "text-white" : "text-white/25"}`}
                      >
                        <option value="" className="bg-charcoal text-white/50">
                          Select event type
                        </option>
                        {[
                          "Wedding",
                          "Corporate Event",
                          "Private Celebration",
                          "Gala",
                          "Other",
                        ].map((t) => (
                          <option
                            key={t}
                            value={t}
                            className="bg-charcoal text-white"
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vision textarea */}
                  <div className="group mb-10">
                    <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-white/35 mb-3 font-semibold group-focus-within:text-gold/70 transition-colors">
                      Your Vision
                    </label>
                    <textarea
                      name="vision"
                      value={formData.vision}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share your ideas, inspirations, and any details that matter most to you..."
                      className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/60 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <button
                      type="button"
                      onClick={
                        handleSubmit as unknown as React.MouseEventHandler
                      }
                      disabled={loading}
                      className={`group relative px-12 py-4 font-sans font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 overflow-hidden
                        ${
                          error
                            ? "bg-red-700 text-white cursor-not-allowed"
                            : "bg-magenta text-white hover:bg-magenta/90 cursor-pointer"
                        }
                        ${loading ? "opacity-50 cursor-not-allowed" : ""}
                      `}
                    >
                      {/* Shine sweep on hover */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <span className="relative">
                        {loading
                          ? "Sending..."
                          : error
                            ? "Please complete required fields"
                            : "Send My Inquiry"}
                      </span>
                    </button>

                    <p className="font-sans text-[10px] text-white/25 tracking-wide text-center sm:text-left">
                      Strictly confidential. We never share your information.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="flex flex-col gap-6 animate-fade-up stagger-2">
              {/* Specialties */}
              {specialties.map((s, i) => (
                <div
                  key={i}
                  className="group border border-gold/15 bg-white/[0.03] p-6 hover:border-gold/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5 opacity-80">{s.icon}</span>
                    <div>
                      <p className="font-playfair font-bold text-white text-base mb-1.5 group-hover:text-gold transition-colors duration-300">
                        {s.title}
                      </p>
                      <p className="font-sans text-xs text-white/45 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Divider ornament */}
              <div className="flex items-center gap-3 py-2">
                <span className="flex-1 h-px bg-gold/20" />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect
                    x="5"
                    y="0"
                    width="2"
                    height="12"
                    fill="#C9A96E"
                    opacity="0.5"
                  />
                  <rect
                    x="0"
                    y="5"
                    width="12"
                    height="2"
                    fill="#C9A96E"
                    opacity="0.5"
                  />
                </svg>
                <span className="flex-1 h-px bg-gold/20" />
              </div>

              {/* Contact card */}
              <div className="border border-gold/25 bg-gold/5 p-7">
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/70 font-semibold mb-4">
                  Speak Directly
                </p>
                <p className="font-playfair text-lg font-bold text-white mb-5">
                  We&apos;d love to hear your voice
                </p>
                <div className="flex flex-col gap-3.5">
                  {[
                    { icon: "→", text: "(972) 885-7833" },
                    { icon: "→", text: "info@thetheartoffinesse.com" },
                    { icon: "→", text: "Mon – Fri, 9am – 4pm" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-gold/50 text-xs font-sans">
                        {item.icon}
                      </span>
                      <p className="font-sans text-xs text-white/55 tracking-wide">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-gold/40 pl-5 py-2">
                <p className="font-playfair italic text-sm text-white/45 leading-relaxed">
                  &ldquo;Elegance is not about being noticed,
                  <br />
                  it is about being remembered.&rdquo;
                </p>
                <p className="font-sans text-[10px] text-gold/40 tracking-widest uppercase mt-2">
                  — Giorgio Armani
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAND
      ═══════════════════════════════════════ */}
      <section className="relative py-20 bg-teal overflow-hidden">
        {/* Subtle teal texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-gold/20">
            {[
              {
                number: "Multiple",
                label: "Events Created",
                sub: "Celebrations brought to life",
              },
              {
                number: "98%",
                label: "Satisfaction Rate",
                sub: "Praise for precision",
              },
              {
                number: "15+",
                label: "Years of Excellence",
                sub: "Crafting the unforgettable",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center px-8 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <p className="font-great-vibes text-6xl text-gold mb-1">
                  {stat.number}
                </p>
                <p className="font-playfair font-bold text-white text-lg mb-1">
                  {stat.label}
                </p>
                <p className="font-cormorant italic text-white/50 text-base">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DIVIDER + CTA
      ═══════════════════════════════════════ */}
      <div className="flex justify-center py-10 bg-off-white">
        <SectionDivider />
      </div>

      <CTABand
        title="LET'S CREATE MAGIC TOGETHER"
        subtitle="Ready to celebrate in style? Your dream event deserves the expertise of The Art of Finesse."
        ctaText="Book Your Consultation"
        ctaLink="#booking-form"
      />
    </div>
  );
}
