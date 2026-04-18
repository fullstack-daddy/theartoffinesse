'use client'

export default function MapComponent() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gold/30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0x1c0ab5fbf9d1234!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
