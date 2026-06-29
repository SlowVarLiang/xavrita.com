import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Xavrito',
  description: 'Xavrito cookie policy. Learn how we use cookies and similar technologies.',
  alternates: {
    canonical: 'https://xavrita.com/cookies/',
  },
}

export default function CookiesPage() {
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="text-gray-300 mb-6">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
          <p className="mb-4">Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.</p>

          <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
          <p className="mb-6">Xavrito uses cookies for the following purposes:</p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
              <p className="text-sm text-gray-400 mb-2">Required for basic site functionality.</p>
              <p className="text-xs text-gray-500">Examples: Remembering your theme preference, session management</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
              <p className="text-sm text-gray-400 mb-2">Help us understand how visitors use our site.</p>
              <p className="text-xs text-gray-500">Examples: Google Analytics, tracking page views and user behavior</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Advertising Cookies</h3>
              <p className="text-sm text-gray-400 mb-2">Used by our advertising partners.</p>
              <p className="text-xs text-gray-500">Examples: Google AdSense, measuring ad performance</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
          <p className="mb-4">Some cookies are placed by third-party services that appear on our pages. We use:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong className="text-white">Google Analytics</strong> - For website traffic analysis</li>
            <li><strong className="text-white">Google AdSense</strong> - For displaying relevant advertisements</li>
            <li><strong className="text-white">Plausible</strong> - For privacy-friendly analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
          <p className="mb-4">You can control and manage cookies in several ways:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong className="text-white">Browser Settings</strong> - Most browsers allow you to block or delete cookies through settings</li>
            <li><strong className="text-white">Opt-Out Tools</strong> - You can opt out of Google Analytics using the <a href="https://tools.google.com/dlpage/gaoptout" className="text-indigo-400 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
            <li><strong className="text-white">Privacy Badger</strong> - The EFF's tool to control tracking</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Impact of Disabling Cookies</h2>
          <p className="mb-6">If you choose to disable cookies, some features of our website may not function properly. Essential cookies are required for basic site operation.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
          <p className="mb-6">We may update this cookie policy periodically. Any changes will be posted on this page with an updated revision date.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p>For questions about our use of cookies, please <a href="/contact/" className="text-indigo-400 hover:underline">contact us</a>.</p>
        </div>
      </div>
    </section>
  )
}
