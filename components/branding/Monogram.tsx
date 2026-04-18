import Image from "next/image";

interface MonogramProps {
  size?: number;
  className?: string;
}

export default function Monogram({ size = 74, className = "" }: MonogramProps) {
  return (
    <Image
      src="/logos/secondary-logo.png"
      alt="Luxury Event Planning Hero"
      width={size}
      height={size}
      className={`object-cover scale-[2.03] brightness-110 ${className}`}
    />
  );
}
