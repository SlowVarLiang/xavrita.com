import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Xavrito',
  description: 'Xavrito privacy policy. Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://xavrita.com/privacy/',
  },
}

export default function PrivacyPage() {
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="text-gray-300 mb-6">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
          <p className="mb-4">We collect minimal information necessary to provide and improve our services. This may include:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Anonymous analytics data to understand how visitors use our site</li>
            <li>Cookies for site functionality and preferences</li>
            <li>Any information you voluntarily provide through contact forms</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How We Use Information</h2>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Improve our website and content</li>
            <li>Understand site traffic and user behavior</li>
            <li>Respond to user inquiries when contacted</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
          <p className="mb-4">We may use third-party services for analytics (such as Google Analytics) and advertising. These services may collect their own data according to their privacy policies.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
          <p className="mb-4">We use cookies to remember your preferences and understand how you use our site. You can control cookie settings through your browser.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
          <p className="mb-4">We retain data only as long as necessary for the purposes outlined above. Analytics data is typically retained for a maximum of 26 months.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Access any personal data we may hold about you</li>
            <li>Request deletion of your data</li>
            <li>Opt out of cookies and analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="mb-4">If you have questions about this privacy policy, please contact us through our <a href="/contact/" className="text-indigo-400 hover:underline">contact page</a>.</p>
        </div>
      </div>
    </section>
  )
}
