import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RSS Feed - Xavrito',
  description: 'Subscribe to Xavrito RSS feeds for the latest game guides and updates.',
  alternates: {
    canonical: 'https://xavrita.com/rss/',
  },
}

export default function RSSPage() {
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">RSS Feeds</h1>
        <p className="text-xl text-gray-400 mb-8">
          Subscribe to our RSS feeds to stay updated with the latest guides and news.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">All Content</h3>
                <p className="text-sm text-gray-400">Latest guides from all games</p>
              </div>
            </div>
            <code className="block bg-gray-800 p-3 rounded text-sm text-gray-300 overflow-x-auto">
              https://xavrita.com/rss/all.xml
            </code>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Latest Guides</h3>
                <p className="text-sm text-gray-400">New guides and articles</p>
              </div>
            </div>
            <code className="block bg-gray-800 p-3 rounded text-sm text-gray-300 overflow-x-auto">
              https://xavrita.com/rss/guides.xml
            </code>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Game Updates</h3>
                <p className="text-sm text-gray-400">Patch notes and updates</p>
              </div>
            </div>
            <code className="block bg-gray-800 p-3 rounded text-sm text-gray-300 overflow-x-auto">
              https://xavrita.com/rss/updates.xml
            </code>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Tier Lists</h3>
                <p className="text-sm text-gray-400">Latest tier list updates</p>
              </div>
            </div>
            <code className="block bg-gray-800 p-3 rounded text-sm text-gray-300 overflow-x-auto">
              https://xavrita.com/rss/tierlists.xml
            </code>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Use RSS</h2>
          <p className="text-gray-400 mb-4">RSS allows you to subscribe to content updates without visiting our website. Use an RSS reader to receive updates automatically.</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Feedly</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Inoreader</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">RSS Feed Reader</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Feeds Pub</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/guides/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
          >
            Browse All Guides
          </Link>
        </div>
      </div>
    </section>
  )
}
