import type { Metadata } from "next";
import SectionDivider from "@/components/sections/SectionDivider";
import CTABand from "@/components/sections/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Art of Finesse",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.",
  keywords: [
    "privacy policy",
    "data protection",
    "event planning privacy",
    "legal",
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-off-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal mb-6">
            Privacy <span className="text-teal">Policy</span>
          </h1>
          <p className="text-charcoal/70 font-sans max-w-2xl mx-auto text-lg">
            Your trust is our priority. Learn how we protect and handle your
            personal information.
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
            {/* Introduction */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Introduction
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                At The Art of Finesse, we are committed to protecting your
                privacy and safeguarding your personal information. This Privacy
                Policy explains how we collect, use, disclose, and protect your
                information when you visit our website, engage our services, or
                communicate with us.
              </p>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                By using our website or services, you consent to the practices
                described in this policy. We reserve the right to update this
                policy from time to time, and we encourage you to review it
                periodically.
              </p>
            </div>

            {/* Information We Collect */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Information We Collect
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-3 text-charcoal/70 font-sans leading-relaxed list-none">
                {[
                  "Personal identification information (name, email address, phone number, mailing address)",
                  "Event details and preferences (date, venue, guest count, style preferences)",
                  "Payment information (processed securely through our payment partners)",
                  "Communication history (emails, phone calls, meeting notes)",
                  "Website usage data (IP address, browser type, pages visited)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal mt-1.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                How We Use Your Information
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                We use your information to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Provide and personalize our event planning services",
                  "Communicate with you about your events and inquiries",
                  "Process payments and manage contracts",
                  "Send important updates and service-related information",
                  "Improve our website and customer experience",
                  "Comply with legal obligations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-charcoal/70 font-sans text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Sharing */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Information Sharing
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with:
              </p>
              <ul className="space-y-3 text-charcoal/70 font-sans leading-relaxed list-none">
                {[
                  "Trusted vendor partners (caterers, florists, venues) necessary for your event",
                  "Professional advisors (accountants, lawyers) as needed",
                  "Legal authorities when required by law",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal mt-1.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 font-sans leading-relaxed mt-4 text-sm italic">
                All third-party partners are contractually obligated to maintain
                the confidentiality of your information.
              </p>
            </div>

            {/* Data Security */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "400ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Data Security
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                We implement industry-standard security measures to protect your
                information, including:
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-gold/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "SSL encryption for data transmission",
                    "Secure servers with firewall protection",
                    "Restricted access to personal information",
                    "Regular security assessments",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal/70 font-sans text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-charcoal/70 font-sans leading-relaxed mt-4 text-sm">
                While we strive to protect your information, no method of
                transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "500ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Your Rights
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-charcoal/70 font-sans leading-relaxed list-none">
                {[
                  "Access the personal information we hold about you",
                  "Request correction of inaccurate information",
                  "Request deletion of your information (subject to legal obligations)",
                  "Opt out of marketing communications",
                  "Withdraw consent at any time",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "600ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Cookies & Tracking
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                Our website uses cookies to enhance your browsing experience.
                These small text files help us understand how visitors interact
                with our site, allowing us to improve functionality and content.
                You can adjust your browser settings to refuse cookies, though
                this may affect certain features.
              </p>
            </div>

            {/* Children's Privacy */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "700ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 border-l-4 border-teal pl-4">
                Children's Privacy
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                Our services are not directed to individuals under the age of
                13. We do not knowingly collect personal information from
                children. If you believe a child has provided us with personal
                information, please contact us immediately.
              </p>
            </div>

            {/* Contact Us */}
            <div
              className="animate-fade-up bg-white/40 rounded-2xl p-8 border border-gold/20"
              style={{ animationDelay: "800ms", animationFillMode: "both" }}
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="text-teal">✧</span> Contact Us
              </h2>
              <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-charcoal/70 font-sans">
                  <span className="text-teal font-bold">✉</span>
                  <a
                    href="mailto:info@theartoffinesse.com"
                    className="hover:text-teal transition-colors"
                  >
                    info@theartoffinesse.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-charcoal/70 font-sans">
                  <span className="text-teal font-bold">✆</span>
                  <a
                    href="tel:+19728857833"
                    className="hover:text-teal transition-colors"
                  >
                    (972) 885-7833
                  </a>
                </div>
                             </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABand
        title="Have Questions About Your Privacy?"
        subtitle="We're here to help and ensure your peace of mind"
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundColor="teal"
      />
    </div>
  );
}
