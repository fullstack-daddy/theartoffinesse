// BookingModal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BookingForm from "@/components/forms/BookingForm";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [mounted, setMounted] = useState(false);
  const portalRef = useRef<HTMLDivElement | null>(null);

  // Create a dedicated portal container mounted to body
  useEffect(() => {
    const el = document.createElement("div");
    el.id = "booking-modal-portal";
    document.body.appendChild(el);
    portalRef.current = el;
    setMounted(true);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !portalRef.current || !isOpen) return null;

  return createPortal(
    <div style={{ position: "fixed", inset: 0, zIndex: 99999 }}>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth: "42rem",
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
            position: "relative",
            pointerEvents: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              position: "sticky",
              top: 0,
              background:
                "linear-gradient(to right, #2d2d2d, rgba(45,45,45,0.9))",
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 10,
              borderRadius: "0.5rem 0.5rem 0 0",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Book Your Event
              </h2>
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  margin: "0.25rem 0 0",
                }}
              >
                Let&apos;s create something extraordinary
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <div style={{ padding: "2rem" }}>
            <BookingForm onSuccess={onClose} />
          </div>
        </div>
      </div>
    </div>,
    portalRef.current,
  );
}
