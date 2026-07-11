export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E7E5E4] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="20" height="14" rx="2" fill="#22C55E"/>
              <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
              <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
              <circle cx="11" cy="24" r="2" fill="#6B7280"/>
              <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
              <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
              <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
            </svg>
            <span className="font-display font-semibold text-[#1C1917]">Xavrito</span>
          </div>
          <p className="text-sm text-[#78716C]">
            Free HTML5 games. No downloads. No signups.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#A8A29E]">
            <span>Made with 🎮</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
