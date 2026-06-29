import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-950">
      <div className="text-center">
        <div className="text-8xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/games/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            Browse Games
          </Link>
          <Link
            href="/guides/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Guides
          </Link>
        </div>
      </div>
    </section>
  )
}
