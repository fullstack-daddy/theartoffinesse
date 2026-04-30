"use client";

import { useState } from "react";

interface BookingFormProps {
  onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Send to Formspree endpoint
      const response = await fetch("https://formspree.io/f/xnjwarod", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();

        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        console.error("Formspree submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "eventType", label: "Event Type", type: "select", required: true },
    { name: "guestCount", label: "Number of Guests", type: "number" },
    { name: "date", label: "Preferred Date", type: "date", required: true },
    { name: "location", label: "Event Location", type: "text", required: true },
    { name: "budget", label: "Estimated Budget", type: "text" },
  ];

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Private Celebration",
    "Gala",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-teal/10 border border-teal text-teal rounded-md text-center">
          Thank you for reaching out! We&apos;ll be in touch soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="text-xs font-sans font-semibold tracking-widest text-charcoal mb-2 uppercase"
            >
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="px-0 py-2 border-b border-charcoal/30 focus:border-teal bg-transparent text-charcoal font-sans focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                className="px-0 py-2 border-b border-charcoal/30 focus:border-teal bg-transparent text-charcoal font-sans focus:outline-none transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="vision"
          className="text-xs font-sans font-semibold tracking-widest text-charcoal mb-2 uppercase"
        >
          Tell us about your vision
        </label>
        <textarea
          id="vision"
          name="vision"
          rows={5}
          className="px-0 py-2 border-b border-charcoal/30 focus:border-teal bg-transparent text-charcoal font-sans focus:outline-none transition-colors resize-none"
          placeholder="Share your ideas, inspirations, and any specific details..."
        />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-magenta text-white font-sans font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Send Inquiry"}
        </button>
      </div>

      <p className="text-xs text-charcoal/50 font-sans text-center">
        We respect your privacy. Your information will only be used to respond
        to your inquiry.
      </p>
    </form>
  );
}
