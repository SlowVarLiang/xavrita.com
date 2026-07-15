'use client'

interface VideoCardProps {
  src: string
  label: string
}

export default function VideoCard({ src, label }: VideoCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-video bg-black/50 group">
      <video
        src={src}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
        <span className="text-white text-xs font-medium">{label}</span>
        <span className="text-orange-400 text-xs">🎬</span>
      </div>
    </div>
  )
}
