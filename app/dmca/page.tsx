import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA - Xavrito',
  description: 'Xavrito DMCA copyright policy and takedown request information.',
  alternates: {
    canonical: 'https://xavrita.com/dmca/',
  },
}

export default function DMCAPage() {
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">DMCA Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="text-gray-300 mb-6">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-white mb-4">Copyright Notice</h2>
          <p className="mb-4">Xavrito respects the intellectual property rights of others and expects users of our website to do the same. We are committed to responding promptly to claims of copyright infringement.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Game Content</h2>
          <p className="mb-4">Xavrito provides guides and information for video games. Game names, titles, trademarks, screenshots, and related content are property of their respective game developers and publishers. We do not claim ownership over any game content.</p>
          <p className="mb-6">Our use of game content is transformative and falls under fair use for the purpose of providing educational content about gameplay mechanics, strategies, and guide information.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Reporting Copyright Infringement</h2>
          <p className="mb-4">If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our designated agent with the following information:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing and its location on our website</li>
            <li>Your contact information including address, telephone number, and email</li>
            <li>A statement that you have a good faith belief that the disputed use is not authorized</li>
            <li>A statement under penalty of perjury that the information provided is accurate</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p className="mb-4">Please send all DMCA notices to:</p>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <p className="text-white">Email: dmca@xavrita.com</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Response Time</h2>
          <p className="mb-4">We will process and investigate notices of alleged copyright infringement and will take appropriate actions under the Digital Millennium Copyright Act. Please note that misrepresentation of infringement claims may result in liability for damages.</p>

          <h2 className="text-2xl font-bold text-white mb-4">Counter-Notification</h2>
          <p className="mb-6">If you believe your content was wrongly removed, you may file a counter-notification. Please contact us for details on the required information for counter-notices.</p>
        </div>
      </div>
    </section>
  )
}
