export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎮</span>
            <span className="font-display font-semibold text-white">Xavrito</span>
          </div>
          <p className="text-sm text-slate-500">
            Free HTML5 games. No downloads. No signups.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Made with 🎮</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
