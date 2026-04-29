import type { Metadata } from "next";
import SectionDivider from "@/components/sections/SectionDivider";
import CTABand from "@/components/sections/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | The Art of Finesse",
  description:
    "Read our terms of service to understand the guidelines and agreements governing the use of our website and event planning services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "event planning terms",
    "legal agreement",
  ],
};

export default function TermsOfServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-off-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal mb-6">
            Terms of <span className="text-teal">Service</span>
          </h1>
          <p className="text-charcoal/70 font-sans max-w-2xl mx-auto text-lg">
            Please read these terms carefully before engaging our services or
            using our website.
          </p>
          <p className="text-sm text-charcoal/50 font-sans mt-4">
            Last Updated: January 1, 2024
          </p>
        </div>
      </section>

      <SectionDivider showMonogram />

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Agreement to Terms
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                By accessing our website, engaging our event planning services,
                or communicating with The Art of Finesse, you agree to be bound
                by these Terms of Service. If you disagree with any part of
                these terms, you may not access our website or use our services.
              </p>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                These Terms apply to all visitors, users, and clients who access
                or use our services. We reserve the right to update or modify
                these terms at any time without prior notice.
              </p>
            </div>

            {/* Event Planning Services */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Event Planning Services
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                The Art of Finesse offers professional event planning, styling,
                coordination, and design services for various occasions
                including weddings, corporate events, milestone celebrations,
                and private parties.
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-gold/20 mb-4">
                <h3 className="text-lg font-playfair font-semibold text-teal mb-3">
                  Service Inclusions
                </h3>
                <ul className="space-y-2 text-charcoal/70 font-sans leading-relaxed list-none">
                  {[
                    "Initial consultation and needs assessment",
                    "Custom event design and concept development",
                    "Vendor sourcing and management",
                    "Budget planning and oversight",
                    "Timeline creation and coordination",
                    "On-site event management",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-teal mt-1.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-charcoal/70 font-sans leading-relaxed text-sm italic">
                Specific services and deliverables will be outlined in your
                individual service agreement or contract.
              </p>
            </div>

            {/* Booking & Payments */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Booking & Payments
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Retainer Fee",
                    content:
                      "A non-refundable retainer fee of 50% is required to secure your event date and initiate planning services. Your event date is not confirmed until the retainer is received.",
                  },
                  {
                    title: "Final Payment",
                    content:
                      "The remaining balance is due no later than 14 days prior to your event date, unless otherwise specified in your service agreement.",
                  },
                  {
                    title: "Additional Costs",
                    content:
                      "Any vendor costs, materials, or services not included in the original agreement will be billed separately and are due upon receipt.",
                  },
                  {
                    title: "Payment Methods",
                    content:
                      "We accept bank transfers and certified checks. All fees are quoted in USD unless otherwise specified.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gold/20 pb-4 last:border-0"
                  >
                    <h3 className="text-lg font-playfair font-semibold text-teal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 font-sans leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation & Refunds */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Cancellation & Refunds
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/40 rounded-xl p-5 border border-gold/20">
                  <h3 className="text-lg font-playfair font-semibold text-charcoal mb-3">
                    Client Cancellation
                  </h3>
                  <ul className="space-y-2 text-charcoal/70 font-sans text-sm">
                    <li className="flex justify-between pb-2 border-b border-gold/10">
                      <span>90+ days before event</span>
                      <span>Retainer forfeited</span>
                    </li>
                    <li className="flex justify-between pb-2 border-b border-gold/10">
                      <span>60-89 days before event</span>
                      <span>50% of total fee due</span>
                    </li>
                    <li className="flex justify-between pb-2 border-b border-gold/10">
                      <span>30-59 days before event</span>
                      <span>75% of total fee due</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Less than 30 days before event</span>
                      <span>100% of total fee due</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/40 rounded-xl p-5 border border-gold/20">
                  <h3 className="text-lg font-playfair font-semibold text-charcoal mb-3">
                    Our Cancellation
                  </h3>
                  <p className="text-charcoal/70 font-sans text-sm leading-relaxed">
                    In the unlikely event that The Art of Finesse must cancel
                    your event due to circumstances beyond our control, all
                    payments made will be refunded in full, excluding any
                    non-recoverable vendor costs already incurred.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "400ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Client Responsibilities
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                As our valued client, you agree to:
              </p>
              <ul className="space-y-2 text-charcoal/70 font-sans leading-relaxed list-none">
                {[
                  "Provide accurate and complete information about your event requirements",
                  "Respond to communications in a timely manner to maintain planning schedules",
                  "Make decisions within agreed-upon deadlines",
                  "Secure necessary permits or licenses required for your venue or event",
                  "Communicate any changes or concerns promptly",
                  "Adhere to payment schedules as outlined in your agreement",
                  "Provide a hot meal for all contracted vendor staff"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vendor Relationships */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "500ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Vendor Relationships
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                The Art of Finesse works with a curated network of trusted
                vendor partners. Please note:
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-gold/20 space-y-3">
                <p className="text-charcoal/70 font-sans leading-relaxed">
                  • We are not responsible for the acts, omissions, or
                  performance of third-party vendors, though we carefully vet
                  all recommended partners.
                </p>
                <p className="text-charcoal/70 font-sans leading-relaxed">
                  • All vendor contracts are between you and the vendor
                  directly. We strongly recommend reviewing all vendor
                  agreements independently.
                </p>
                <p className="text-charcoal/70 font-sans leading-relaxed">
                  • We may receive referral compensation from certain vendor
                  partners, which will be disclosed to you in advance.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "600ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Intellectual Property
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                All content on our website, including text, graphics, logos,
                images, and event designs, is the property of The Art of Finesse
                and is protected by copyright and intellectual property laws.
              </p>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative
                works of our content without express written permission. Event
                designs and concepts created for your celebration remain our
                intellectual property, though you receive a license to use them
                for your specific event.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "700ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Limitation of Liability
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                To the maximum extent permitted by law, The Art of Finesse shall
                not be liable for:
              </p>
              <ul className="space-y-2 text-charcoal/70 font-sans leading-relaxed list-none mb-4">
                {[
                  "Indirect, incidental, or consequential damages",
                  "Loss of profits, revenue, or business opportunities",
                  "Delays or failures caused by circumstances beyond our reasonable control",
                  "Acts or omissions of third-party vendors",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal mt-1.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 font-sans leading-relaxed text-sm italic">
                Our total liability shall not exceed the total fees paid by you
                for our services.
              </p>
            </div>

            {/* Force Majeure */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "800ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Force Majeure
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                We shall not be held responsible for delays or failures in
                performance resulting from causes beyond our reasonable control,
                including but not limited to natural disasters, pandemics,
                government actions, labor disputes, or severe weather. In such
                events, we will work with you to reschedule or make alternative
                arrangements where possible.
              </p>
            </div>

            {/* Governing Law */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "900ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Governing Law
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Texas, without regard to its
                conflict of law provisions. Any disputes arising under these
                Terms shall be resolved exclusively in the state or federal
                courts located in Dallas County, Texas.
              </p>
            </div>

            {/* Contact Information */}
            <div
              className="animate-fade-up bg-white/40 rounded-2xl p-8 border border-gold/20"
              style={{ animationDelay: "1000ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="text-teal">✧</span> Questions?
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-charcoal/70 font-sans">
                  <span className="text-teal font-bold">✉</span>
                  <a
                    href="mailto:legal@artoffinesse.com"
                    className="hover:text-teal transition-colors"
                  >
                    info@theartoffinesse.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-charcoal/70 font-sans">
                  <span className="text-teal font-bold">✆</span>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-teal transition-colors"
                  >
                    (972) 885-7833
                  </a>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div
              className="text-center pt-4 animate-fade-up"
              style={{ animationDelay: "1100ms", animationFillMode: "both" }}
            >
              <div className="inline-block w-24 h-px bg-gold" />
              <p className="text-charcoal/50 font-sans text-sm mt-6">
                By engaging The Art of Finesse, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of
                Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABand
        title="Ready to Begin Your Journey?"
        subtitle="Let's create something extraordinary together"
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        backgroundColor="magenta"
      />
    </div>
  );
}
