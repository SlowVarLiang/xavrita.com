export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E7E5E4] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              X
            </div>
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
