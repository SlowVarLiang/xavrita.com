import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
              X
            </div>
            <span className="font-display font-bold text-xl text-[#1C1917] group-hover:text-[#F97316] transition-colors">
              Xavrito
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[#78716C] hover:text-[#1C1917] transition-colors">
              Games
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors shadow-md"
            >
              Play Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
