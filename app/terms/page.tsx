import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Xavrito',
  description: 'Xavrito terms of service. Guidelines for using our website and content.',
  alternates: {
    canonical: 'https://xavrita.com/terms/',
  },
}

export default function TermsPage() {
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="text-gray-300 mb-6">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
          <p className="mb-4">By accessing and using Xavrito, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use our website.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Content and Use</h2>
          <p className="mb-4">All content on Xavrito, including guides, articles, images, and data, is provided for informational purposes only. You may:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>View and use our content for personal, non-commercial purposes</li>
            <li>Share links to our content with proper attribution</li>
          </ul>
          <p className="mb-6">You may not:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Republish or redistribute our content without permission</li>
            <li>Use our content for commercial purposes without authorization</li>
            <li>Attempt to copy or mirror our website design</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
          <p className="mb-4">Game names, titles, and related content are trademarks of their respective owners. We claim no ownership over these materials. Our original content is protected by copyright.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
          <p className="mb-4">Our website may contain links to external websites, including official game sites and stores. We are not responsible for the content or practices of these third-party sites.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
          <p className="mb-4">Our content is provided "as is" without warranties of any kind. We strive for accuracy but cannot guarantee that all information is current or error-free. Game updates may change mechanics described in our guides.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p className="mb-4">Xavrito and its owners shall not be liable for any damages arising from the use of our website or content. This includes but is not limited to direct, indirect, incidental, or consequential damages.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
          <p className="mb-4">We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p>For questions about these terms, please contact us through our <a href="/contact/" className="text-indigo-400 hover:underline">contact page</a>.</p>
        </div>
      </div>
    </section>
  )
}
