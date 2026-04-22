import type { Metadata } from "next";
import SectionDivider from "@/components/sections/SectionDivider";
import QuoteSection from "@/components/sections/QuoteSection";
import CTABand from "@/components/sections/CTABand";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About The Art of Finesse | Luxury Event Planning Company",
  description:
    "Learn about our journey, expertise, and commitment to creating unforgettable luxury events. Discover what makes us the premier event planning company.",
  keywords: [
    "about event planner",
    "luxury event company",
    "professional event coordination",
    "event planning expertise",
  ],
  openGraph: {
    title: "About The Art of Finesse",
    description:
      "Premium event planning company specializing in luxury celebrations and bespoke events.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left: Teal + Brand Name */}
        <Image
          src="/art_of_finese_about_us.jpeg"
          alt="About Us"
          width={600}
          height={400}
          className="rounded-xl relative top-10 left-20"
        />

        {/* Right: Off-white + Story */}
        <div className="bg-off-white flex items-center justify-center p-8 md:p-12">
          <div className="max-w-lg">
            <p className="text-lg font-cormorant text-charcoal leading-relaxed mb-6">
              The Art of Finesse was established to elevate the styling and
              concept design of luxury events throughout Texas and beyond.
            </p>
            <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
              With a strong commitment to bespoke celebrations, Nike
              demonstrates a keen attention to style and detail. She has
              successfully planned, developed, and executed exceptional events
              for a diverse clientele for over ten years. Nike’s philosophy
              prioritizes client service, ensuring each event is managed with
              dedication and expertise. She has built a skilled team and
              established influential networks that contribute to the success of
              every event.
            </p>
            <p className="text-charcoal/70 font-sans leading-relaxed">
              Supported by her team of professionals, clients can trust The Art
              of Finesse to accommodate any request with precision and
              excellence.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-charcoal/70 font-sans leading-relaxed">
                Here at The Art of Finesse, we offer party planning and styling
                for your events. In addition, we have custom party packages
                already created for your loved ones, however we are also
                available for other custom parties not listed in our party
                packages. We also create a one of a kind dessert table for your
                events.
              </p>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                At The Art of Finesse, we specialize in organizing exceptional
                events, both locally and internationally. Our approach to event
                planning is distinguished by its personalized and bespoke
                nature. For each occasion, particularly weddings, we prioritize
                attentive listening and thoughtful understanding before taking
                action—this is our core strength at The Art of Finesse.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-charcoal/70 font-sans leading-relaxed">
                We offer customized solutions rather than generic options for
                the key elements of your special day. Every memorable experience
                is built upon genuine dedication and expertise. Recognizing the
                importance of having the right team involved, we are privileged
                to collaborate with esteemed companies in the event industry who
                share our passion, commitment, and high standards of service.
              </p>
              <p className="text-charcoal/70 font-sans leading-relaxed font-semibold text-teal">
                Attention to detail is integral to everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider showMonogram />

      {/* Services / Event Types Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Events We Create</h2>
            <p className="text-charcoal/70 font-sans max-w-2xl mx-auto">
              From intimate weddings to grand corporate galas, we bring your
              vision to life with precision and grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings & Celebrations",
                description:
                  "If you're a bride dreaming of an unforgettable wedding, but your calendar is packed, we're here to handle everything for you. While we manage the details, you can relax and savor every magical moment. Our dedicated team will provide expert guidance and support throughout the process, right up until you walk down the aisle.",
              },
              {
                title: "Wedding Coordination",
                description:
                  "If you have most arrangements in place but require a refined touch, our team can provide expert coordination to ensure every detail of your wedding is flawlessly executed. With extensive experience and a discerning approach to style, we seamlessly integrate all elements, guaranteeing readiness for your special day.",
              },
              {
                title: "Milestones & Social Events",
                description:
                  "Whenever we recall our most cherished moments, it's often the celebrations that come to mind like milestone birthdays, graduations, or vibrant festivals. Make your special day one to remember; share your vision with us, and our expert party planners will handle every detail. Milestone birthdays and anniversaries deserve memorable celebrations.",
              },
              {
                title: "Corporate Events",
                description:
                  "A well-organized event is an effective way to leave a lasting impression on your business partners and clients. With extensive experience planning corporate events, our team is fully prepared to meet your requirements and budget. We will collaborate with you to deliver a seamlessly executed, on brand event that will be memorable for your guests.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 border border-gold/30 hover:border-teal transition-all animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-playfair font-bold text-lg">
                    {item.title[0]}
                  </span>
                </div>
                <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quote */}
      <QuoteSection
        quote="We don't chase trends. We set them. And we do it with grace."
        author="The Art of Finesse"
      />

      {/* Team/Experience Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Experience</h2>
            <p className="text-charcoal/70 font-sans max-w-2xl mx-auto">
              Our team brings together years of expertise in event planning,
              design, and coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "Multitude", label: "Events Coordinated" },
              { number: "98%", label: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 border-b-4 border-teal animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <p className="text-5xl font-playfair font-bold text-teal mb-2">
                  {stat.number}
                </p>
                <p className="text-charcoal font-sans font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Let's Create Something Extraordinary"
        subtitle="We're ready to bring your vision to life"
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        backgroundColor="magenta"
      />
    </div>
  );
}
