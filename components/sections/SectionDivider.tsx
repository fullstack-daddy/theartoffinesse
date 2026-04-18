import Monogram from '@/components/branding/Monogram'

interface SectionDividerProps {
  showMonogram?: boolean
  className?: string
}

export default function SectionDivider({ showMonogram = false, className = '' }: SectionDividerProps) {
  if (showMonogram) {
    return (
      <div className={`flex items-center justify-center my-12 md:my-16 gap-6 ${className}`}>
        <div className="flex-1 h-px bg-gold"></div>
        <div className="w-12 h-12 text-teal/40 flex-shrink-0">
          <Monogram />
        </div>
        <div className="flex-1 h-px bg-gold"></div>
      </div>
    )
  }

  return <div className={`h-px bg-gold w-16 mx-auto my-8 md:my-12 ${className}`}></div>
}
