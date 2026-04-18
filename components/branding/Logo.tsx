export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width="24"
        height="24"
        viewBox="0 0 60 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        {/* A - Teal */}
        <text
          x="8"
          y="28"
          fontSize="24"
          fontFamily="'Playfair Display', serif"
          fontWeight="bold"
          fill="#006D77"
        >
          A
        </text>
        {/* F - Magenta */}
        <text
          x="28"
          y="28"
          fontSize="24"
          fontFamily="'Playfair Display', serif"
          fontWeight="bold"
          fill="#C81E7E"
        >
          F
        </text>
      </svg>
      <h1 className="text-xs font-sans font-bold tracking-widest text-charcoal leading-tight text-center">
        THE ART OF<br />FINESSE
      </h1>
    </div>
  )
}
